"use client";
import React, { FC, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import { getDictionary } from "~/i18n";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useGetCategories } from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import { useQueryObject } from "~/hooks/useQueryObject";

const Categories: FC = () => {
  const { lang } = useCommon();
  const dictionary = getDictionary();

  const { query, addCheckboxToQuery } = useQueryObject();

  const categoryIds = (query?.category as string[]) || [];

  const [isOpen, setIsOpen] = useState(categoryIds.length > 0);
  const { data: categories } = useGetCategories();

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pl={2}
        sx={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography fontWeight={500} fontSize={16}>
          {dictionary("common.category")}
        </Typography>

        <SvgArrowDown style={{ transform: isOpen ? "scaleY(-1)" : "scaleY(1)" }} width={24} height={24} />
      </Box>

      <Collapse in={isOpen}>
        <Box px={2}>
          {categories?.data?.map((category) => (
            <Box key={category?._id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      categoryIds?.findIndex((categoryId) => categoryId === category._id) >
                      -1
                    }
                    onChange={(e) =>
                      addCheckboxToQuery({
                        queryName: "category",
                        checked: e.target.checked,
                        value: category._id,
                      })
                    }
                  />
                }
                label={category?.title[lang]}
              />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Categories;

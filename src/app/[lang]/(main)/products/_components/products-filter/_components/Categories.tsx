"use client";
import React, { FC, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import { getDictionary } from "~/i18n";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useGetCategories } from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";

const Categories: FC = () => {
  const { lang } = useCommon();
  const dictionary = getDictionary();

  const [isOpen, setIsOpen] = useState(false);
  const { data: brands } = useGetCategories({ lang });

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
        <SvgArrowDown width={24} height={24} />
      </Box>

      <Collapse in={isOpen}>
        <Box px={2}>
          {brands?.data?.map((brand) => (
            <Box key={brand?._id}>
              <FormControlLabel control={<Checkbox />} label={brand?.title} />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Categories;

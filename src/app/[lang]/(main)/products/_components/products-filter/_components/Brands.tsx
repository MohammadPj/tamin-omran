"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import SvgArrowDown from "~/components/icons/final/ArrowDown";
import { getDictionary } from "~/i18n";
import { useGetBrands } from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IBrand } from "~/types/product";
import { useQueryObject } from "~/hooks/useQueryObject";

interface Props {}

const Brands: FC<Props> = () => {
  const { lang } = useCommon();
  const dictionary = getDictionary();
  const { query, addCheckboxToQuery } = useQueryObject();

  const brandIds = query?.brand as string[] || []

  const [isOpen, setIsOpen] = useState(brandIds.length > 0);
  const { data: brands } = useGetBrands();


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
          {dictionary("common.brand")}
        </Typography>
        <SvgArrowDown
          width={24}
          height={24}
          style={{ transform: isOpen ? "scaleY(-1)" : "scaleY(1)" }}
        />
      </Box>

      <Collapse in={isOpen}>
        <Box px={2}>
          {brands?.data?.map((brand) => (
            <Box key={brand?._id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={brandIds?.findIndex(brandId => brandId === brand._id) > -1}
                    onChange={(e) =>
                      addCheckboxToQuery({
                        queryName: "brand",
                        checked: e.target.checked,
                        value: brand._id,
                      })
                    }
                  />
                }
                label={brand?.title}
              />
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Brands;

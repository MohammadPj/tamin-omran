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

interface Props {}

const Brands: FC<Props> = () => {
  const { lang } = useCommon();
  const dictionary = getDictionary();

  const [isOpen, setIsOpen] = useState(false);
  const { data: brands } = useGetBrands({ lang });

  const handleCheckBrand = (
    e: ChangeEvent<HTMLInputElement>,
    brand: IBrand
  ) => {
    console.log();
  };

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
                  <Checkbox onChange={(e) => handleCheckBrand(e, brand)} />
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

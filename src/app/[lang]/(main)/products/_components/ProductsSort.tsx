import React, { FC } from "react";
import {Box, Typography} from "@mui/material";
import SvgSort from "~/components/icons/final/Sort";

const ProductsSort: FC = () => {
  return (
    <Box
      bgcolor={"background.1"}
      p={2}
      borderRadius={1}
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      display={"flex"}
      flexDirection={"row-reverse"}
      alignItems={'center'}
    >
      <SvgSort width={24} height={24} />
      <Typography>مرتب سازی بر اساس </Typography>
    </Box>
  );
};

export default ProductsSort;

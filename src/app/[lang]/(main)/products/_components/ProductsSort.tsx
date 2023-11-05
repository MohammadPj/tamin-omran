'use client'
import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import SvgSort from "~/components/icons/final/Sort";
import { getDictionary } from "~/i18n";
import {store} from "~/store/store";

const ProductsSort: FC = () => {
  const lang = store.getState().common.lang

  const dictionary = getDictionary();
  return (
    <Box
      bgcolor={"background.1"}
      p={2}
      borderRadius={1}
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      display={"flex"}
      flexDirection={"row-reverse"}
      alignItems={"center"}
    >
      <SvgSort width={24} height={24} />
      <Typography>{dictionary("products.sortBy")}</Typography>
    </Box>
  );
};

export default ProductsSort;

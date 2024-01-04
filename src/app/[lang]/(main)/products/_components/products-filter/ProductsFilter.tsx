"use client";
import React, { FC } from "react";
import {
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SvgSearch from "~/components/icons/final/Search";
import Categories from "~/app/[lang]/(main)/products/_components/products-filter/_components/Categories";
import Brands from "~/app/[lang]/(main)/products/_components/products-filter/_components/Brands";
import { getDictionary } from "~/i18n";
import IsAvailable from "~/app/[lang]/(main)/products/_components/products-filter/_components/IsAvailable";
import EnginNumber from "~/app/[lang]/(main)/products/_components/products-filter/_components/EnginNumber";
import ProductTitle from "~/app/[lang]/(main)/products/_components/products-filter/_components/ProductTitle";

interface Props {}

const ProductsFilter: FC<Props> = () => {


  return (
    <Stack
      bgcolor={"background.1"}
      p={2}
      borderRadius={1}
      borderBottom={"1px solid"}
      borderColor={"grey.2"}
      gap={3}
      height={"100%"}
    >
      <ProductTitle />

      <Categories />

      <Divider />

      <Brands />

      <Divider />

      <EnginNumber />

      <Divider />

      <IsAvailable />
    </Stack>
  );
};

export default ProductsFilter;

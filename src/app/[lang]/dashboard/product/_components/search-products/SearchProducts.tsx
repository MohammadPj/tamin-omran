"use client";
import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useQueryObject } from "~/hooks/useQueryObject";
import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useGetBrands, useGetCategories } from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import InputListWithQuery from "~/components/common/input-list/with-query/InputListWithQuery";

interface SearchProducts {}

interface IForm {
  brand: string;
  category: string;
  title: string;
  engineNumber: string;
}

const SearchProducts: FC<SearchProducts> = () => {
  const { lang } = useCommon();
  const { data: brands } = useGetBrands({ lang, limit: 20 });
  const { data: categoriesFa } = useGetCategories({ lang: 'fa' });
  const { data: categoriesEn } = useGetCategories({ lang: 'en' });

  const inputList: IUseFormInput[] = [
    {
      name: "technicalNumber",
      label: "",
      placeholder: "شماره فنی",
    },
    {
      name: "title.fa",
      label: "",
      placeholder: "نام محصول (فارسی)",
    },
    {
      name: "title.en",
      label: "",
      placeholder: "نام محصول (انگلیسی)",
    },
    {
      name: "category.fa",
      label: "",
      placeholder: "دسته بندی (فارسی)",
      type: "select",
      options: categoriesFa?.data?.map((category) => ({
        label: category.title,
        value: category._id,
      })),
    },
    {
      name: "category.en",
      label: "",
      placeholder: "دسته بندی (انگلیسی)",
      type: "select",
      options: categoriesEn?.data?.map((category) => ({
        label: category.title,
        value: category._id,
      })),
    },
    {
      name: "brand",
      label: "",
      placeholder: "برند",
      type: "select",
      options: brands?.data?.map((brand) => ({
        label: brand.title,
        value: brand._id,
      })),
    },
    {
      name: "engineNumber",
      label: "",
      placeholder: "موتور",
    },

  ];

  return (
    <Box display={"flex"} gap={4}>
      <InputListWithQuery inputList={inputList} />
    </Box>
  );
};

export default SearchProducts;

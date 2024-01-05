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

interface SearchProducts {}

interface IForm {
  brand: string;
  category: string;
  title: string;
  engineNumber: string;
}

const SearchProducts: FC<SearchProducts> = () => {
  const { lang } = useCommon();
  const { debounceAddTextQuery, query } = useQueryObject();
  const { data: brands } = useGetBrands({ lang, limit: 20 });
  const { data: categories } = useGetCategories({ lang });

  const inputList: IUseFormInput[] = [
    {
      name: "technicalNumber",
      label: "",
      placeholder: "شماره فنی",
    },
    {
      name: "title",
      label: "",
      placeholder: "نام محصول",
    },
    {
      name: "category",
      label: "",
      placeholder: "دسته بندی",
      type: "select",
      options: categories?.data?.map((category) => ({
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
      {inputList.map((input) => (
        <>
          {input.type === "select" ? (
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">
                {input.placeholder}
              </InputLabel>
              <Select
                variant={"filled"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                multiple
                value={query?.[input.name] || []}
                onChange={(e) =>
                  debounceAddTextQuery({
                    queryName: input.name,
                    value: e?.target?.value as string,
                  })
                }
              >
                {input?.options?.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <TextField
              key={input.name}
              variant={"filled"}
              placeholder={input.placeholder}
              defaultValue={query?.[input.name]}
              onChange={(e) =>
                debounceAddTextQuery({
                  queryName: input.name,
                  value: e.target.value,
                })
              }
            />
          )}
        </>
      ))}

    </Box>
  );
};

export default SearchProducts;

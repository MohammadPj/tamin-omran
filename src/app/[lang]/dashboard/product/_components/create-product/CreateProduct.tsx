import React, { FC } from "react";
import CustomTab, { ITab } from "~/components/custom-mui/custom-tab/CustomTab";
import Box from "@mui/material/Box";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";

interface Props {}

const CreateProduct: FC<Props> = () => {
  const tabs: ITab[] = [{ label: "فارسی" }, { label: "انگلیسی" }];

  const handleChange = (value: any) => {};

  const form = useForm();

  const inputList: IUseFormInput[] = [
    {
      name: "productName",
      label: "نام محصول",
      placeholder: "نام محصول را وارد کنید",
      gridItemProp: {xs: 12}
    },
    {
      name: "categoryId",
      label: "دسته بندی محصول",
      placeholder: "انتخاب دسته بندی",
      type: 'select'
    },
    {
      name: "specNumber",
      label: "شماره فنی",
      placeholder: "شماره فنی محصول را وارد کنید",
    },
    {
      name: "motor",
      label: "موتور",
      placeholder: "شماره فنی محصول را وارد کنید",
    },
    {
      name: "brandId",
      label: "برند محصول",
      placeholder: "انتخاب برند",
      type: 'select'
    },
    {
      name: "description",
      label: "توضیحات",
      placeholder: "انتخاب برند",
      gridItemProp: {xs: 12},
      type: 'text-area'
    },
  ];

  return (
    <Stack width={800} gap={4}>
      <CustomTab tabs={tabs} onChange={handleChange} />

      <InputListWithUseForm inputList={inputList} form={form} gridItemProps={{xs: 6}}/>
    </Stack>
  );
};

export default CreateProduct;

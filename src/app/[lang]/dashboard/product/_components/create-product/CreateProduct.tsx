import React, { FC } from "react";
import Box from "@mui/material/Box";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import UploadProductSection from "~/app/[lang]/dashboard/product/_components/create-product/UploadProductSection";

import LanguageTab from "~/components/common/tabs/LanguageTab";
import { TLang } from "~/services/api/type";
import CustomCKEditor from "~/components/common/custom-ckeditor/CustomCKEditor";
import { IProduct } from "~/types/product";
import { useGetBrands, useGetCategories } from "~/services/api/hooks";

interface CreateProductProps {
  onSubmit?: (data: ICreateProductForm) => void;
  onCancel?: () => void;
  defaultValue?: IProduct;
}

export interface ICreateProductForm {
  title: string;
  lang: TLang;
  categoryId: string;
  brandId: string;
  image?: string;
  imageFile?: File;
  images?: string[];
  imageFiles?: File[];
  isAvailable: boolean;
  engineNumber: string;
  technicalNumber: string;
  description: string;
  review: string;
}

const CreateProduct: FC<CreateProductProps> = ({
  onSubmit,
  onCancel,
  defaultValue,
}) => {
  const form = useForm<ICreateProductForm>({
    defaultValues: {
      lang: defaultValue?.lang || "fa",
      title: defaultValue?.title!,
      brandId: defaultValue?.brand?._id!,
      categoryId: defaultValue?.category?._id,
      description: defaultValue?.description,
      engineNumber: defaultValue?.engineNumber,
      image: defaultValue?.image,
      images: defaultValue?.images,
      isAvailable: defaultValue?.isAvailable,
      review: defaultValue?.review,
      technicalNumber: defaultValue?.technicalNumber,
    },
  });

  const { data: categories } = useGetCategories({ lang: form.watch("lang") });
  const { data: brands } = useGetBrands({ lang: form.watch("lang") });

  const inputList1: IUseFormInput[] = [
    {
      name: "title",
      label: "نام محصول",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "لطفا نام محصول را وارد کنید"
    }
  ]

  const inputList2: IUseFormInput[] = [
    {
      name: "categoryId",
      label: "دسته بندی محصول",
      placeholder: "انتخاب دسته بندی",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      type: "select",
      options: categories?.map((category) => ({
        label: category.title,
        value: category._id,
      })),
    },
    {
      name: "technicalNumber",
      label: "شماره فنی",
      placeholder: "شماره فنی محصول را وارد کنید",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
    },
    {
      name: "engineNumber",
      label: "موتور",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "شماره فنی محصول را وارد کنید",
    },
    {
      name: "brandId",
      label: "برند محصول",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "انتخاب برند",
      type: "select",
      options: brands?.map((brand) => ({
        label: brand.title,
        value: brand._id,
      })),
    },
    {
      name: "description",
      label: "توضیحات",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "انتخاب برند",
      gridItemProp: { xs: 12 },
      type: "text-area",
    },
  ];

  const handleChangeLanguage = (lang: TLang) => {
    form.setValue("lang", lang);
  };

  const handleChangeReview = (value: string) => {
    form.setValue("review", value);
  };

  const handleChangeMainImage = (files: FileList) => {
    const file = files[0];

    form.setValue("image", URL.createObjectURL(file));
    form.setValue("imageFile", file);
  };

  const handleChangeImages = (files: FileList) => {
    const imageFiles = form.getValues("imageFiles") || [];
    const images = form.getValues("images") || [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log("file", file);
      if (!file) return;
      imageFiles?.push(file);
      images?.push(URL.createObjectURL(file));
    }

    form.setValue("imageFiles", imageFiles);
    form.setValue("images", images);
  };

  return (
    <Stack>
      <LanguageTab
        onChange={handleChangeLanguage}
        defaultValue={form.getValues("lang")}
      />

      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Box
            display={"flex"}
            gap={2}
            width={"100%"}
            alignItems={"end"}
            mb={4}
          >
            <Box flexGrow={1}>
              <InputListWithUseForm
                inputList={inputList1}
                form={form}
                gridItemProps={{ xs: 12 }}
              />
            </Box>

            <FormControlLabel
              checked={form.watch("isAvailable")}
              control={
                <Switch color="primary" {...form.register("isAvailable")} />
              }
              label={
                <Typography fontWeight={500} fontSize={16}>
                  موجود
                </Typography>
              }
              labelPlacement="start"
              sx={{ justifyContent: "space-between", ml: 0, px: 2, gap: 2 }}
            />
          </Box>

          <InputListWithUseForm
            inputList={inputList2}
            form={form}
            gridItemProps={{ xs: 6 }}
          />
        </Grid>

        <Grid item xs={5}>
          <UploadProductSection
            images={form.watch("images")}
            mainImage={form.watch("image")}
            onChangeImages={handleChangeImages}
            onChangeMainImage={handleChangeMainImage}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <Box display={"flex"}>
          <Typography
            mb={2}
            fontWeight={500}
            fontSize={14}
            color={"primary.main"}
            borderBottom={"1px solid"}
            borderColor={"primary.main"}
          >
            نقد و بررسی
          </Typography>
        </Box>

        <CustomCKEditor
          onChange={handleChangeReview}
          defaultValue={defaultValue?.review}
        />
      </Box>

      <Box display={"flex"} gap={4} mt={4}>
        {onSubmit && (
          <Button onClick={form.handleSubmit(onSubmit)} sx={{ height: 41 }}>
            ذخیره
          </Button>
        )}

        {onCancel && (
          <Button onClick={onCancel} variant={"outlined"} sx={{ height: 41 }}>
            انصراف
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default CreateProduct;

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

import CustomCKEditor from "~/components/common/custom-ckeditor/CustomCKEditor";
import { IProduct } from "~/types/product";
import { useGetBrands, useGetCategories } from "~/services/api/hooks";

interface CreateProductProps {
  onSubmit?: (data: ICreateProductForm) => void;
  onCancel?: () => void;
  defaultValue?: IProduct;
}

export interface ICreateProductForm {
  title: { fa: string; en: string };
  categoryId: string;
  description: { fa: string; en: string };
  review: { fa: string; en: string };
  brandId: string;
  image?: string;
  imageFile?: File;
  images?: string[];
  imageFiles?: File[];
  isAvailable: boolean;
  engineNumber: string;
  technicalNumber: string;
}

const CreateProduct: FC<CreateProductProps> = ({
  onSubmit,
  onCancel,
  defaultValue,
}) => {
  const form = useForm<ICreateProductForm>({
    defaultValues: {
      title: defaultValue?.title!,
      review: defaultValue?.review,
      categoryId: defaultValue?.category._id,
      description: defaultValue?.description,
      engineNumber: defaultValue?.engineNumber,
      brandId: defaultValue?.brand?._id!,
      image: defaultValue?.image,
      images: defaultValue?.images,
      isAvailable: defaultValue?.isAvailable,
      technicalNumber: defaultValue?.technicalNumber,
    },
  });

  const { data: categories } = useGetCategories();
  const { data: brands } = useGetBrands();

  const inputList1: IUseFormInput[] = [
    {
      name: "brandId",
      label: "برند محصول",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "انتخاب برند",
      type: "select",
      options: brands?.data?.map((brand) => ({
        label: brand.title,
        value: brand._id,
      })),
    },
  ];

  const inputList2: IUseFormInput[] = [
    {
      name: "title.fa",
      label: "نام محصول (فارسی)",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "لطفا نام محصول را وارد کنید",
    },
    {
      name: "title.en",
      label: "نام محصول (انگلیسی)",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "لطفا نام محصول را وارد کنید",
    },
    {
      name: "categoryId",
      label: "دسته بندی محصول (فارسی)",
      placeholder: "انتخاب دسته بندی",
      defaultValue: '',
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      type: "select",
      options: categories?.data?.map((category) => ({
        label: category.title.fa,
        value: category._id,
      })),
    },
    {
      name: "categoryId",
      label: "دسته بندی محصول (انگلیسی)",
      placeholder: "انتخاب دسته بندی",
      defaultValue: '',
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      type: "select",
      options: categories?.data?.map((category) => ({
        label: category.title.en,
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
  ];

  const inputListDescription: IUseFormInput[] = [
    {
      name: "description.fa",
      label: "توضیحات (فارسی)",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "انتخاب برند",
      type: "text-area",
    },
    {
      name: "description.en",
      label: "توضیحات (انگلیسی)",
      rules: { required: "وارد کردن این فیلد اجباری می باشد" },
      placeholder: "انتخاب برند",
      type: "text-area",
    },
  ];

  const handleChangeReviewFa = (value: string) => {
    form.setValue("review.fa", value);
  };

  const handleChangeReviewEn = (value: string) => {
    form.setValue("review.en", value);
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
      if (!file) return;
      imageFiles?.push(file);
      images?.push(URL.createObjectURL(file));
    }

    form.setValue("imageFiles", imageFiles);
    form.setValue("images", images);
  };

  return (
    <Stack>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <InputListWithUseForm
            inputList={inputList2}
            form={form}
            gridItemProps={{ xs: 6 }}
            gridContainerProps={{ columnSpacing: 4 }}
          />

          <Box
            display={"flex"}
            gap={2}
            width={"100%"}
            alignItems={"end"}
            mt={4}
          >
            <Box flexGrow={1}>
              <InputListWithUseForm
                inputList={inputList1}
                form={form}
                gridItemProps={{ xs: 12 }}
                gridContainerProps={{ columnSpacing: 4 }}
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
            inputList={inputListDescription}
            form={form}
            gridItemProps={{ xs: 6 }}
            gridContainerProps={{ mt: 4, columnSpacing: 4 }}
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

      <Box mt={4} display={"flex"} gap={4}>
        <Box>
          <Box display={"flex"}>
            <Typography
              mb={2}
              fontWeight={500}
              fontSize={14}
              color={"primary.main"}
              borderBottom={"1px solid"}
              borderColor={"primary.main"}
            >
              نقد و بررسی فارسی
            </Typography>
          </Box>

          <CustomCKEditor
            onChange={handleChangeReviewFa}
            defaultValue={defaultValue?.review?.fa}
          />
        </Box>

        <Box>
          <Box display={"flex"}>
            <Typography
              mb={2}
              fontWeight={500}
              fontSize={14}
              color={"primary.main"}
              borderBottom={"1px solid"}
              borderColor={"primary.main"}
            >
              نقد و بررسی انگلیسی
            </Typography>
          </Box>

          <CustomCKEditor
            onChange={handleChangeReviewEn}
            defaultValue={defaultValue?.review?.en}
          />
        </Box>
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

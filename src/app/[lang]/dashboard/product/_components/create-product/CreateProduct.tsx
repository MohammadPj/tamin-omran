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
  images: string[];
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
      brandId: defaultValue?.brand._id!,
      categoryId: defaultValue?.category._id,
      description: defaultValue?.description,
      engineNumber: defaultValue?.engineNumber,
      // images: defaultValue?.images,
      isAvailable: defaultValue?.isAvailable,
      review: defaultValue?.review,
      technicalNumber: defaultValue?.technicalNumber,
    },
  });

  const { data: categories } = useGetCategories({ lang: form.watch("lang") });
  const { data: brands } = useGetBrands({ lang: form.watch("lang") });

  const inputList: IUseFormInput[] = [
    {
      name: "categoryId",
      label: "دسته بندی محصول",
      placeholder: "انتخاب دسته بندی",
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
    },
    {
      name: "engineNumber",
      label: "موتور",
      placeholder: "شماره فنی محصول را وارد کنید",
    },
    {
      name: "brandId",
      label: "برند محصول",
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

  return (
    <Stack width={800}>
      <LanguageTab
        onChange={handleChangeLanguage}
        defaultValue={form.getValues("lang")}
      />

      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Typography
            component={"label"}
            display={"block"}
            fontWeight={400}
            fontSize={14}
            mb={2}
            htmlFor={"product-name"}
            noWrap
            title={"نام محصول"}
            color={"n.3"}
          >
            نام محصول
          </Typography>

          <Box
            display={"flex"}
            gap={2}
            width={"100%"}
            alignItems={"center"}
            mb={4}
          >
            <Box flexGrow={1}>
              <TextField
                {...form.register("title")}
                id={"product-name"}
                variant={"filled"}
                placeholder={"نام محصول را وارد کنید"}
                fullWidth
              />
            </Box>

            <FormControlLabel
              checked={form.watch('isAvailable')}
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
            inputList={inputList}
            form={form}
            gridItemProps={{ xs: 6 }}
          />
        </Grid>

        <Grid item xs={5}>
          <UploadProductSection />
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

        <CustomCKEditor onChange={handleChangeReview} defaultValue={defaultValue?.review} />
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

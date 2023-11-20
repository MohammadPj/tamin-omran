import React, { FC } from "react";
import CustomTab, { ITab } from "~/components/custom-mui/custom-tab/CustomTab";
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
  InputLabel,
  Switch,
  Typography,
} from "@mui/material";
import UploadProductSection from "~/app/[lang]/dashboard/product/_components/create-product/UploadProductSection";

interface CreateProductProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const CreateProduct: FC<CreateProductProps> = ({ onSubmit, onCancel }) => {
  const tabs: ITab[] = [{ label: "فارسی" }, { label: "انگلیسی" }];

  const handleChange = (value: any) => {};

  const form = useForm();

  const inputList: IUseFormInput[] = [
    {
      name: "categoryId",
      label: "دسته بندی محصول",
      placeholder: "انتخاب دسته بندی",
      type: "select",
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
      type: "select",
    },
    {
      name: "description",
      label: "توضیحات",
      placeholder: "انتخاب برند",
      gridItemProp: { xs: 12 },
      type: "text-area",
    },
  ];

  return (
    <Stack width={800}>
      <CustomTab
        tabs={tabs}
        onChange={handleChange}
        tabsProps={{ sx: { mb: 4 } }}
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
                {...form.register("productName")}
                id={"product-name"}
                variant={"filled"}
                fullWidth
                placeholder={"نام محصول را وارد کنید"}
              />
            </Box>

            <FormControlLabel
              value="start"
              control={<Switch color="primary" {...form.register("status")} />}
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

      <Box display={"flex"} gap={4} mt={4}>
        {onSubmit && <Button onClick={onSubmit} sx={{height: 41}}>ذخیره</Button>}

        {onCancel && (
          <Button onClick={onCancel} variant={"outlined"} sx={{height: 41}}>
            انصراف
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default CreateProduct;

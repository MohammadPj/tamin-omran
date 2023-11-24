import React, { FC } from "react";
import CustomTab, { ITab } from "~/components/custom-mui/custom-tab/CustomTab";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import SvgDownload from "~/components/icons/final/Download";

interface CreateBrochureProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const CreateBrochure: FC<CreateBrochureProps> = ({ onSubmit, onCancel }) => {
  const tabs: ITab[] = [{ label: "فارسی" }, { label: "انگلیسی" }];
  const handleChange = (value: any) => {};

  const inputList: IUseFormInput[] = [
    {
      name: "title",
      label: "نام بروشور",
      placeholder: 'نام بروشور را وارد کنید'
    },
    {
      name: "category",
      label: "دسته بندی بروشور",
      type: "select",
      options: [{ label: "", value: "" }],
    },
  ];
  const form = useForm();

  return (
    <Box>
      <CustomTab
        tabs={tabs}
        onChange={handleChange}
        tabsProps={{ sx: { mb: 4 } }}
      />

      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
        gridContainerProps={{ mb: 4 }}
      />

      <Stack
        width={"100%"}
        height={300}
        borderRadius={2}
        border={"1px dotted"}
        borderColor={"grey.3"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <SvgDownload />

        <Typography color={"grey.4"}>
          فایل مورد نظر را بکشید و در این قسمت بیندازید
        </Typography>

        <Typography>یا</Typography>

        <Button size={'small'} color={'secondary'}>بارگذاری از فایل ها</Button>
      </Stack>

      <Box display={"flex"} gap={4} mt={4}>
        {onSubmit && (
          <Button onClick={onSubmit} sx={{ height: 41 }}>
            ذخیره
          </Button>
        )}

        {onCancel && (
          <Button onClick={onCancel} variant={"outlined"} sx={{ height: 41 }}>
            انصراف
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CreateBrochure;

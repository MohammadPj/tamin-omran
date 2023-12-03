import React, { FC } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";

export interface IBrochureTypeForm {
  categoryNameFa: string;
  categoryNameEn: string;
}

interface CreateCategoryProps {
  onSubmit?: (data: IBrochureTypeForm) => void;
  onCancel?: () => void;
}

const CreateCategory: FC<CreateCategoryProps> = ({ onCancel, onSubmit }) => {
  const form = useForm<IBrochureTypeForm>();

  const inputList: IUseFormInput[] = [
    {
      rules: { required: 'این فیلد اجباری است' },
      name: "categoryNameFa",
      label: "نام دسته بندی (فارسی)",
      placeholder: "نام دسته بندی را وارد کنید",
    },
    {
      rules: { required: 'این فیلد اجباری است' },
      name: "categoryNameEn",
      label: "نام دسته بندی (انگلیسی)",
      placeholder: "نام دسته بندی را وارد کنید",
    },
  ];

  const handleSave = (values: IBrochureTypeForm) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSave)}>
      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
      />

      <Box display={"flex"} gap={4} mt={8}>
        {onSubmit && (
          <Button type={"submit"} sx={{ width: "100%", height: 41 }}>
            ذخیره
          </Button>
        )}

        {onCancel && (
          <Button
            onClick={onCancel}
            variant={"outlined"}
            sx={{ width: "100%", height: 41 }}
          >
            انصراف
          </Button>
        )}
      </Box>
    </form>
  );
};

export default CreateCategory;

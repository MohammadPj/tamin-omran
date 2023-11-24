import React, { FC } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";

interface CreateCategoryProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const CreateCategory: FC<CreateCategoryProps> = ({ onCancel, onSubmit }) => {
  const form = useForm();

  const inputList: IUseFormInput[] = [
    {
      name: "categoryNameFa",
      label: "نام دسته بندی (فارسی)",
      placeholder: "نام دسته بندی را وارد کنید",
    },
    {
      name: "categoryNameEn",
      label: "نام دسته بندی (انگلیسی)",
      placeholder: "نام دسته بندی را وارد کنید",
    },
  ];

  return (
    <div>
      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
      />

      <Box display={"flex"} gap={4} mt={8}>
        {onSubmit && (
          <Button onClick={onSubmit} sx={{ width: "100%", height: 41 }}>
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
    </div>
  );
};

export default CreateCategory;

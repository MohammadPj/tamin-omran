import React, { FC } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import LanguageTab from "~/components/common/tabs/LanguageTab";
import { TLanguages } from "~/i18n";

interface CreateCategoryProps {
  onSubmit: (data: ICreateCategoryForm) => void;
  onCancel: () => void;
  defaultValues?: ICreateCategoryForm;
}

export interface ICreateCategoryForm {
  title: string;
  lang: TLanguages;
}

const CreateCategory: FC<CreateCategoryProps> = ({
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const form = useForm<ICreateCategoryForm>({
    defaultValues: {
      title: defaultValues?.title
    },
  });

  const inputList: IUseFormInput[] = [
    {
      name: "title.fa",
      label: "نام دسته بندی (فارسی)",
      placeholder: "نام دسته بندی را وارد کنید",
      rules: {required: 'وارد کردن این فیلد اجباری می باشد'}
    },
    {
      name: "title.en",
      label: "نام دسته بندی (انگلیسی)",
      placeholder: "نام دسته بندی را وارد کنید",
      rules: {required: 'وارد کردن این فیلد اجباری می باشد'}
    },
  ];

  return (
    <Box>

      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
      />

      <Box display={"flex"} gap={4} mt={8}>
        {onSubmit && (
          <Button
            onClick={form.handleSubmit(onSubmit)}
            sx={{ width: "100%", height: 41 }}
          >
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
    </Box>
  );
};

export default CreateCategory;

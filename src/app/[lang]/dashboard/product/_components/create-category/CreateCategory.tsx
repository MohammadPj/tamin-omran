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
      lang: defaultValues?.lang || "fa",
      title: defaultValues?.title
    },
  });

  const inputList: IUseFormInput[] = [
    {
      name: "title",
      label: "نام دسته بندی",
      placeholder: "نام دسته بندی را وارد کنید",
    },
  ];

  return (
    <Box>
      <LanguageTab
        defaultValue={form.watch("lang")}
        onChange={(e: TLanguages) => form.setValue("lang", e)}
      />

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

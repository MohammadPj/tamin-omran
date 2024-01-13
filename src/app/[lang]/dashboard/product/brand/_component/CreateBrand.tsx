import React, { FC } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import LanguageTab from "~/components/common/tabs/LanguageTab";
import { TLanguages } from "~/i18n";

interface CreateBrandProps {
  onSubmit: (data: ICreateBrandForm) => void;
  onCancel: () => void;
  defaultValues?: ICreateBrandForm;
}

export interface ICreateBrandForm {
  title: string;
  lang: TLanguages;
}

const CreateBrand: FC<CreateBrandProps> = ({
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const form = useForm<ICreateBrandForm>({
    defaultValues: {
      title: defaultValues?.title
    },
  });

  const inputList: IUseFormInput[] = [
    {
      name: "title",
      label: "نام برند",
      placeholder: "نام دسته بندی را وارد کنید",
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

export default CreateBrand;

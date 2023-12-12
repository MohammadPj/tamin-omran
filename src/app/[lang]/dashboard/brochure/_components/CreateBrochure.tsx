import React, { ChangeEvent, FC, useState } from "react";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import { TLang } from "~/services/api/type";
import LanguageTab from "~/components/common/tabs/LanguageTab";
import { useGetBrochureTypes } from "~/services/api/hooks";
import BrochureUploader from "~/components/common/uploader/BrochureUploader";
import { IBrochure } from "~/types/brochure";

interface CreateBrochureProps {
  onSubmit?: (data: ICreateBrochureForm) => void;
  onCancel?: () => void;
  defaultValue?: IBrochure;
}

export interface ICreateBrochureForm {
  file?: File;
  title: string;
  brochureTypeId: string;
  lang: TLang;
  blobFile?: string
}

const CreateBrochure: FC<CreateBrochureProps> = ({
  onSubmit,
  onCancel,
  defaultValue,
}) => {
  const handleChange = (value: TLang) => {
    form.setValue("lang", value);
  };

  const form = useForm<ICreateBrochureForm>({
    defaultValues: {
      lang: defaultValue?.lang || "fa",
      title: defaultValue?.title,
      brochureTypeId: defaultValue?.brochureType?._id,
      blobFile: defaultValue?.file
    },
  });

  const { data: brochureTypes } = useGetBrochureTypes({
    lang: form.watch("lang"),
  });

  const inputList: IUseFormInput[] = [
    {
      name: "title",
      label: "نام بروشور",
      placeholder: "نام بروشور را وارد کنید",
    },
    {
      name: "brochureTypeId",
      label: "دسته بندی بروشور",
      type: "select",
      options: brochureTypes?.map((brochureType) => ({
        label: brochureType.title,
        value: brochureType._id,
      })),
    },
  ];

  const handleSubmit = (values: ICreateBrochureForm) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const handleChangeFile = (file: File) => {
    if (!file) return;
    form.setValue("file", file);
  };

  const handleDeleteFile = () => {
    form.setValue("file", undefined);
    form.setValue("blobFile", undefined);
  };

  return (
    <Box component={"form"} onSubmit={form.handleSubmit(handleSubmit)}>
      <LanguageTab
        onChange={handleChange}
        defaultValue={form.getValues("lang")}
      />

      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
        gridContainerProps={{ mb: 4 }}
      />

      <BrochureUploader
        onChange={handleChangeFile}
        onDelete={handleDeleteFile}
        defaultFile={defaultValue?.file}
      />

      <Box display={"flex"} gap={4} mt={4}>
        {onSubmit && (
          <Button type={"submit"} sx={{ height: 41 }}>
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

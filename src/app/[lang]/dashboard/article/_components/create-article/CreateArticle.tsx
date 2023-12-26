import React, { FC } from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import { useForm } from "react-hook-form";
import { TLang } from "~/services/api/type";
import CustomCKEditor from "~/components/common/custom-ckeditor/CustomCKEditor";
import LanguageTab from "~/components/common/tabs/LanguageTab";
import UploadArticleImage from "~/app/[lang]/dashboard/article/_components/create-article/UploadArticleImage";
import { IArticle } from "~/types/article";

interface CreateArticleProps {
  onSubmit?: (data: ICreateArticleForm) => void;
  onCancel?: () => void;
  defaultValue?: IArticle;
}

export interface ICreateArticleForm {
  title: string;
  lang: TLang;
  content: string;
  imageFile?: File | null;
  blobImage?: string;
}

const CreateArticle: FC<CreateArticleProps> = ({
  onSubmit,
  onCancel,
  defaultValue,
}) => {
  const inputList: IUseFormInput[] = [
    {
      rules: { required: "نام مقاله اجباری است" },
      name: "title",
      label: "نام مقاله",
    },
  ];
  const form = useForm<ICreateArticleForm>({
    defaultValues: {
      lang: defaultValue?.lang || "fa",
      content: defaultValue?.content,
      title: defaultValue?.title,
      blobImage: defaultValue?.image
    },
  });

  const handleChangeImageFile = (file: File) => {
    form.setValue("imageFile", file);
  };

  const handleDeleteImageFile = () => {
    form.setValue("imageFile", undefined);
    form.setValue("blobImage", undefined);
  };

  return (
    <Stack minHeight={"60vh"}>
      <LanguageTab
        onChange={(e) => form.setValue("lang", e)}
        defaultValue={defaultValue?.lang}
      />

      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridItemProps={{ xs: 12 }}
        gridContainerProps={{ mb: 4 }}
      />

      <Box pb={4}>

        <UploadArticleImage
          defaultImage={defaultValue?.image}
          onChange={handleChangeImageFile}
          onDelete={handleDeleteImageFile}
        />
      </Box>

      <Box flexGrow={1}>
        <CustomCKEditor
          defaultValue={defaultValue?.content}
          onChange={(e) => form.setValue("content", e)}
        />
      </Box>

      <Box display={"flex"} gap={4} py={4}>
        {onSubmit && (
          <Button
            onClick={form.handleSubmit(onSubmit)}
            sx={{ height: 41 }}
            disabled={!form.formState.isValid || !form.watch("content")}
          >
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

export default CreateArticle;

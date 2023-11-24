import React, {FC} from 'react';
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import CustomTab, {ITab} from "~/components/custom-mui/custom-tab/CustomTab";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";
import {useForm} from "react-hook-form";

interface CreateArticleProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const CreateArticle: FC<CreateArticleProps> = ({onSubmit, onCancel}) => {
  const tabs: ITab[] = [{ label: "فارسی" }, { label: "انگلیسی" }];
  const handleChange = (value: any) => {};

  const inputList: IUseFormInput[] = [
    {
      name: 'title',
      label: 'نام مقاله'
    },
    {
      name: 'description',
      label: 'مقاله',
      type: 'text-area',
      gridItemProp: {xs: 12}
    }
  ]
  const form = useForm()

  return (
    <Box>
      <CustomTab
        tabs={tabs}
        onChange={handleChange}
        tabsProps={{ sx: { mb: 4 } }}
      />

      <InputListWithUseForm inputList={inputList} form={form} />

      <Box display={"flex"} gap={4} mt={4}>
        {onSubmit && <Button onClick={onSubmit} sx={{height: 41}}>ذخیره</Button>}

        {onCancel && (
          <Button onClick={onCancel} variant={"outlined"} sx={{height: 41}}>
            انصراف
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CreateArticle;

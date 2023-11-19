import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { IUseFormInput } from "~/components/common/input-list/with-useForm/types";
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";

interface Props {}

const CreateBrand: FC<Props> = () => {
  const form = useForm();

  const inputList: IUseFormInput[] = [
    { name: "type", label: "نوع تعریف", type: "radio", placeholder: "هردو" },
    {
      name: "categoryName",
      label: "نام دسته بندی",
      type: "select",
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
    </div>
  );
};

export default CreateBrand;

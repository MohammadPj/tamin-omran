import React, {FC} from 'react';
import InputListWithUseForm from "~/components/common/input-list/with-useForm/InputListWithUseForm";
import {useForm} from "react-hook-form";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

interface Props {}

const FilterProducts: FC<Props> = () => {
  const form = useForm()

  const inputList: IUseFormInput[] = [
    {name: 'state', label: 'وضعیت محصول', type: 'select', placeholder: 'هردو'},
    {name: 'adminsName', label: 'نام ادمین', type: 'select', placeholder: 'همه'},
  ]

  return (
    <div>
      <InputListWithUseForm inputList={inputList} form={form} gridItemProps={{xs: 12}} />
    </div>
  );
};

export default FilterProducts;

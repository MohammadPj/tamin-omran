import React from 'react';
import useTable from "~/components/custom-mui/custom-table/components/useTable";
import useProductColumn from "~/app/[lang]/dashboard/product/_components/useProductColumn";
import {IProduct} from "~/types/product";

const useProduct = () => {
  const {columns} = useProductColumn()

  const data: IProduct[] = [
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
    {
      name: 'قطعه اق ممد',
      state: 'موجود',
      admin: 'گل اقا',
      uniqueCode: '۲۳۲۳۴۵۵۶',
      createDate: new Date(),
    },
  ]

  const {table} = useTable({data, columns})
  return {table}
};

export default useProduct;

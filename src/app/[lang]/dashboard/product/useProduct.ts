import React from 'react';
import useTable from "~/components/custom-mui/custom-table/components/useTable";
import useProductColumn from "~/app/[lang]/dashboard/product/_components/useProductColumn";

const useProduct = () => {
  const {columns} = useProductColumn()
  const {table} = useTable({data: [], columns})
  return {table}
};

export default useProduct;

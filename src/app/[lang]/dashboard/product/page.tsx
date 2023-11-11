'use client'
import React, {FC} from 'react';
import useProduct from "~/app/[lang]/dashboard/product/useProduct";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";

const Product: FC = () => {
  const {table} = useProduct()

  return (
    <div>
      <CustomTable leftTitle={'salam'} table={table} />
    </div>
  );
};

export default Product;

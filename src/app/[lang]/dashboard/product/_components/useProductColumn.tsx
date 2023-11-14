import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {IProduct} from "~/types/product";

const useProductColumn = () => {
  const columns: ColumnDef<IProduct, any>[] = [
    {
      header: "شماره",
      id: "number",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام محصول",
      accessorKey: "name",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "شماره فنی",
      accessorKey: "uniqueCode",
      cell: (cell) => cell.getValue(),
    },
    // {
    //   header: "تاریخ بارگذاری",
    //   accessorKey: "createDate",
    //   cell: (cell) => cell.getValue(),
    // },
    {
      header: "ادمین",
      accessorKey: "admin",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "وضعیت محصول",
      accessorKey: "state",
      cell: (cell) => cell.getValue(),
    },
  ];

  return {columns};
};

export default useProductColumn;

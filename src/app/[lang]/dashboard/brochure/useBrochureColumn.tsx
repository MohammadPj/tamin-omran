import React from 'react';
import {ColumnDef} from "@tanstack/react-table";
import SvgPlus from "~/components/icons/final/Plus";
import {IBrochure} from "~/types/brochure";

const useBrochureColumn = () => {
  const columns: ColumnDef<IBrochure, any>[] = [
    {
      header: "شماره",
      accessorKey: 'id',
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام بروشور",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "تاریخ بارگذاری",
      accessorKey: "createDate",
      cell: (cell) => cell.getValue()?.toLocaleDateString('fa-IR'),
    },
    {
      header: "ادمین",
      accessorKey: "admin",
      cell: (cell) => `${cell.getValue().firstName} ${cell.getValue().lastName}`,
    },
    {
      header: "عملیات",
      id: "action",
      cell: (cell) => <SvgPlus width={14} />,
    },
  ];

  return {columns};
};

export default useBrochureColumn;

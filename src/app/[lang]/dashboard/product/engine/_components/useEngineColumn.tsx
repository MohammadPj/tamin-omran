import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IBrand } from "~/types/product";
import { Box } from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";

const useEngineColumn = () => {
  const columns: ColumnDef<IBrand, any>[] = [
    {
      header: "شماره",
      accessorKey: "id",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "شماره موتور",
      accessorKey: "title",
      cell: (cell) => cell.getValue() || "---",
    },
    {
      header: "تاریخ بارگذاری",
      accessorKey: "createdAt",
      cell: (cell) =>
        cell.getValue()
          ? new Date(cell.getValue())?.toLocaleDateString("fa-IR")
          : "---",
    },
  ];

  return { columns };
};

export default useEngineColumn;

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {IProduct} from "~/types/product";
import {Box} from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";

interface useProductColumnProps {
  onDelete: (category: IProduct) => void;
  onEdite: (category: IProduct) => void;
}

const useProductColumn = ({ onEdite, onDelete }: useProductColumnProps) => {
  const columns: ColumnDef<IProduct, any>[] = [
    {
      header: "شماره",
      id: "number",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام محصول",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "دسته بندی",
      accessorKey: "category",
      cell: (cell) => cell.getValue()?.title || "---",
    },
    {
      header: "برند",
      accessorKey: "brand",
      cell: (cell) => cell.getValue()?.title || "---",
    },
    {
      header: "تاریخ بارگذاری",
      accessorKey: "createdAt",
      cell: (cell) =>
        cell.getValue()
          ? new Date(cell.getValue())?.toLocaleDateString("fa-IR")
          : "---",
    },
    {
      header: "وضعیت محصول",
      accessorKey: "isAvailable",
      cell: (cell) => cell.getValue() ? 'موجود' : "نا موجود",
    },
    {
      header: "عملیات",
      id: "action",
      cell: (cell) => (
        <Box display={"flex"} gap={2}>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            onClick={() => onDelete(cell.row.original)}
          >
            <SvgDelete primarycolor={"red"} width={18} />
          </Box>

          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            onClick={() => onEdite(cell.row.original)}
          >
            <SvgEdit primarycolor={"grey"} width={18} />
          </Box>
        </Box>
      ),
    },
  ];

  return {columns};
};

export default useProductColumn;

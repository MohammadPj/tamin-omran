import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "~/types/product";
import { Box } from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";

interface useProductColumnProps {
  onDelete: (category: IProduct) => void;
  onEdite: (category: IProduct) => void;
}

const useProductColumn = ({ onEdite, onDelete }: useProductColumnProps) => {
  const columns: ColumnDef<IProduct, any>[] = [
    {
      header: "شماره فنی",
      accessorKey: "technicalNumber",
      cell: (cell) => cell.getValue() || "---",
    },
    {
      header: "نام محصول (فارسی)",
      accessorKey: "title.fa",
      cell: (cell) => <Box width={150}>{cell.getValue()}</Box>,
    },
    {
      header: "نام محصول (انگلیسی)",
      accessorKey: "title.en",
      cell: (cell) => <Box width={150}>{cell.getValue()}</Box>,
    },
    {
      header: "دسته بندی (فارسی)",
      accessorKey: "category",
      cell: (cell) => <Box width={100}>{cell.getValue()?.title?.fa || "---"}</Box>,
    },
    {
      header: "دسته بندی (انگلیسی)",
      accessorKey: "category",
      cell: (cell) => <Box width={100}>{cell.getValue()?.title?.en || "---"}</Box>,
    },
    {
      header: "برند",
      accessorKey: "brand",
      cell: (cell) => cell.getValue()?.title || "---",
    },
    {
      header: "موتور",
      accessorKey: "engineNumber",
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
    {
      header: "وضعیت محصول",
      accessorKey: "isAvailable",
      cell: (cell) => (
        <Box width={"fit-content"}>
          {cell.getValue() ? "موجود" : "نا موجود"}
        </Box>
      ),
    },
    {
      header: "عملیات",
      id: "action",
      meta: {},
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

  return { columns };
};

export default useProductColumn;

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";
import { ICategory } from "~/types/product";

interface useCategoryColumnProps {
  onDelete: (category: ICategory) => void;
  onEdite: (category: ICategory) => void;
}

const useCategoryColumn = ({ onEdite, onDelete }: useCategoryColumnProps) => {
  const columns: ColumnDef<ICategory, any>[] = [
    {
      header: "شماره",
      accessorKey: "id",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام دسته بندی",
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

  return { columns };
};

export default useCategoryColumn;

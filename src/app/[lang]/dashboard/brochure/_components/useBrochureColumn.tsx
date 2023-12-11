import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IBrochure } from "~/types/brochure";
import { Box, Button, Typography } from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";

interface Props {
  onEdit: (brochure: IBrochure) => void;
  onDelete: (brochure: IBrochure) => void;
}

const useBrochureColumn = ({ onEdit, onDelete }: Props) => {
  const columns: ColumnDef<IBrochure, any>[] = [
    {
      header: "شماره",
      accessorKey: "id",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام بروشور",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "دسته بندی",
      accessorKey: "brochureType",
      cell: (cell) => cell?.getValue()?.title || "--",
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
      header: "فایل",
      accessorKey: "file",
      cell: (cell) => (
        <Button
          size={"small"}
          sx={{ p: 2, height: "auto", borderRadius: 1, fontSize: 10 }}
          onClick={() => window.open(cell.getValue())}
        >
          مشاهده
        </Button>
      ),
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
            onClick={() => onEdit(cell.row.original)}
          >
            <SvgEdit primarycolor={"grey"} width={18} />
          </Box>
        </Box>
      ),
    },
  ];

  return { columns };
};

export default useBrochureColumn;

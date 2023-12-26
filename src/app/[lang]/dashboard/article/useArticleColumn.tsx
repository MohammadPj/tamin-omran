import {ColumnDef} from "@tanstack/react-table";
import {IArticle} from "~/types/article";
import {Box, Button} from "@mui/material";
import SvgDelete from "~/components/icons/output/Delete";
import SvgEdit from "~/components/icons/output/Edit";
import React from "react";

interface useArticleColumnProps {
  onDelete: (article: IArticle) => void;
  onEdite: (article: IArticle) => void;
}

const useArticleColumn = ({ onEdite, onDelete }: useArticleColumnProps) => {
  const columns: ColumnDef<IArticle, any>[] = [
    {
      header: "شماره",
      accessorKey: 'id',
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام مقاله",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
    },
    {
      header: "تاریخ بارگذاری",
      accessorKey: "createdAt",
      cell: (cell) => cell.getValue()
        ? new Date(cell.getValue())?.toLocaleDateString("fa-IR")
        : "---",
    },
    {
      header: "فایل",
      accessorKey: "image",
      cell: (cell) => (
        <Button
          size={"small"}
          sx={{ p: 2, height: "auto", borderRadius: 1, fontSize: 10 }}
          onClick={() => window.open(cell.getValue())}
          disabled={!cell.getValue()}
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

export default useArticleColumn;

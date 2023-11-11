import React from "react";
import { Typography } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";

const useProductColumn = () => {
  const columns: ColumnDef<any, any>[] = [
    {
      header: () => "نام کامل",
      accessorKey: "name",
      cell: ({ row, getValue }) => (
        <Typography variant="body1">
          {row.original.type === "Juridical"
            ? row.original.companyName
            : row.original.name}
        </Typography>
      ),
    },
    {
      header: () => "نوع",
      accessorKey: "type",
      cell: (cell) => (
        <Typography variant="body1">
          {cell.getValue() === "Natural"
            ? "حقیقی"
            : cell.getValue() === "Juridical"
            ? "حقوقی"
            : "---"}
        </Typography>
      ),
    },
    {
      header: () => "حساب اصلی",
      accessorKey: "parentAccount" || null,
      cell: (cell) => (
        // <Typography variant="body1">{cell.getValue() || "---"}</Typography>
        <Typography variant="body1"></Typography>
      ),
    },
    {
      header: () => "وبسایت",
      accessorKey: "website",
      cell: (cell) => (
        <Typography variant="body1">{cell.getValue() || "---"}</Typography>
      ),
    },
    {
      header: () => "شماره تماس",
      accessorKey: "phoneNumber",
      cell: (cell) => (
        <Typography variant="body1">{cell.getValue() || "---"}</Typography>
      ),
    },
    {
      header: () => "آدرس",
      accessorKey: "address",
      cell: (cell) => (
        <Typography
          title={cell.getValue()}
          sx={{
            width: 200,
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          variant="body1"
          // textAlign={ cell.getValue() ? "center" : 'center'}
          textAlign="center"
        >
          {cell.getValue() || "---"}
        </Typography>
      ),
    },
    {
      header: () => "تاریخ ایجاد",
      accessorKey: "createdAt",
      cell: (cell) => (
        <Typography variant={"body1"}>
          {new Date(cell.getValue()).toLocaleDateString("fa-IR")}
        </Typography>
      ),
    },
  ];

  return {columns};
};

export default useProductColumn;

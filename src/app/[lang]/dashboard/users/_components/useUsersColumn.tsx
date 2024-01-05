import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "~/types/product";
import { IUser } from "~/types/user";
import Box from "@mui/material/Box";
import SvgDelete from "~/components/icons/output/Delete";

interface IUsersColumnProps {
  onDeleteUser: (userId: string) => void;
}

const useUsersColumn = (props?: IUsersColumnProps) => {
  const { onDeleteUser } = props || {};

  const columns: ColumnDef<IUser, any>[] = [
    {
      header: "نام",
      id: "name",
      cell: ({ row }) => row.original.firstName + " " + row.original.lastName,
    },
    {
      header: "نام کاربری",
      accessorKey: "username",
      cell: ({ getValue }) => getValue() || "---",
    },
    {
      header: "ایمیل",
      accessorKey: "email",
      cell: ({ getValue }) => getValue() || "---",
    },
    {
      header: "شماره تماس",
      accessorKey: "phoneNumber",
      cell: ({ getValue }) => getValue() || "---",
    },
    {
      header: "نوع",
      accessorKey: "isAdmin",
      cell: ({ getValue }) => (getValue() ? "ادمین" : "یوزر عادی"),
    },
    {
      header: "عملیات",
      id: "actions",
      cell: ({ row }) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={() => onDeleteUser && onDeleteUser(row.original._id)}
        >
          <SvgDelete width={20} height={20} primarycolor={"red"} />
        </Box>
      ),
    },
  ];

  return { columns };
};

export default useUsersColumn;

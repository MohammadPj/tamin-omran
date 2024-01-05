'use client'
import React from 'react';
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useUsers from "~/app/[lang]/dashboard/users/_components/useUsers";

const UsersPage = () => {
  const {table} = useUsers()

  return (
    <CustomTable table={table} />
  );
};

export default UsersPage;

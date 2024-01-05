import React from "react";
import useTable from "~/components/custom-mui/custom-table/components/useTable";
import { useDeleteUser, useGetUsers } from "~/services/api/hooks";
import useUsersColumn from "~/app/[lang]/dashboard/users/_components/useUsersColumn";
import {useQueryClient} from "@tanstack/react-query";
import {useSnackbar} from "notistack";

const useUsers = () => {

  const QC = useQueryClient()
  const {enqueueSnackbar} = useSnackbar()

  const { mutate: mutateDeleteUser } = useDeleteUser();
  const handleDeleteUser = (userId: string) => {
    mutateDeleteUser(userId, {
      onSuccess: () => {
        QC.refetchQueries({queryKey: ['users']}).then(r => {})
        enqueueSnackbar("کاربر با موفقیت حذف شد", {variant: 'success'})
      }
    });
  };

  const { data: users } = useGetUsers();
  const { columns } = useUsersColumn({ onDeleteUser: handleDeleteUser });

  const { table } = useTable({ data: users?.data, columns: columns });
  return { table };
};

export default useUsers;

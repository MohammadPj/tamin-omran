import { ColumnDef } from "@tanstack/react-table";
import { IBrochureType } from "~/types/brochure";
import React, { useState } from "react";
import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {
  useCreateBrochureType, useDeleteBrochureType,
  useEditeBrochureType,
  useGetBrochureTypes,
} from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import SvgDelete from "~/components/icons/output/Delete";
import { Box } from "@mui/material";
import SvgEdit from "~/components/icons/output/Edit";
import { IBrochureTypeForm } from "~/app/[lang]/dashboard/brochure/brochure-type/_components/CreateBrochureType";
import { useSnackbar } from "notistack";
import {useQueryClient} from "@tanstack/react-query";

type TModal =
  | "create-brochure-type"
  | "edit-brochure-type"
  | "delete-brochure-type"
  | null;

const useBrochureType = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { lang } = useCommon();
  const { data } = useGetBrochureTypes({ lang });
  const QC = useQueryClient()

  const [modal, setModal] = useState<TModal>();
  const { mutateAsync: mutateCreateBrochureType } = useCreateBrochureType();
  const { mutateAsync: mutateEditBrochureType } = useEditeBrochureType();
  const { mutateAsync: mutateDeleteBrochureType } = useDeleteBrochureType();

  const [selectedBrochureType, setSelectedBrochureType] =
    useState<IBrochureType>();

  const modals: { id: TModal; title: string }[] = [
    { id: "create-brochure-type", title: "تعریف دسته بندی" },
    { id: "edit-brochure-type", title: "ویرایش دسته بندی" },
    { id: "delete-brochure-type", title: "حذف دسته بندی" },
  ];

  const handleCreateCategory = async (data: IBrochureTypeForm) => {
    try {
      await mutateCreateBrochureType({
        title: data.categoryNameEn,
        lang: "en",
      });
      await mutateCreateBrochureType({
        title: data.categoryNameFa,
        lang: "fa",
      });
      enqueueSnackbar("دسته بندی با موفقیت ایجاد شد", { variant: "success" });
      // @ts-ignore
      await QC.refetchQueries(['BrochureType'])
      setModal(null);
    } catch (e) {
      enqueueSnackbar("عملیات با مشکل مواجه شد", { variant: "error" });
    }
  };

  const handleEditeBrochureType = async (brochureType: any) => {
    try {
      await mutateEditBrochureType({
        title: brochureType.title,
        id: selectedBrochureType?._id!,
      });

      enqueueSnackbar("دسته بندی با موفقیت ویرایش شد", { variant: "success" });

      // @ts-ignore
      await QC.refetchQueries(['BrochureType'])

      setModal(null);
    } catch (e) {
      enqueueSnackbar("عملیات با مشکل مواجه شد", { variant: "error" });
    }
  };

  const handleOpenModal = (modal: TModal, brochureType: IBrochureType) => {
    setSelectedBrochureType(brochureType);
    setModal(modal);
  };

  const handleDeleteBrochureType = async () => {
    try {
      await mutateDeleteBrochureType(selectedBrochureType?._id!);

      enqueueSnackbar("دسته بندی با موفقیت حذف شد", { variant: "success" });

      // @ts-ignore
      await QC.refetchQueries(['BrochureType'])

      setModal(null);
    } catch (e) {
      enqueueSnackbar("عملیات با مشکل مواجه شد", { variant: "error" });
    }
  }

  const handleCloseModal = () => {
    setModal(undefined);
  };

  const columns: ColumnDef<IBrochureType, any>[] = [
    {
      header: "شماره",
      accessorKey: "id",
      cell: (cell) => cell.row.index + 1,
    },
    {
      header: "نام دسته بندی",
      accessorKey: "title",
      cell: (cell) => cell.getValue(),
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
            onClick={() =>
              handleOpenModal("delete-brochure-type", cell.row.original)
            }
          >
            <SvgDelete primarycolor={"red"} width={18} />
          </Box>

          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            onClick={() =>
              handleOpenModal("edit-brochure-type", cell.row.original)
            }
          >
            <SvgEdit primarycolor={"grey"} width={18} />
          </Box>
        </Box>
      ),
    },
  ];

  const { table } = useTable({ data, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedBrochureType,
    handleCreateCategory,
    handleEditeBrochureType,
    handleDeleteBrochureType,
  };
};

export default useBrochureType;

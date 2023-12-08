import useTable from "~/components/custom-mui/custom-table/components/useTable";
import { IBrochure } from "~/types/brochure";
import useBrochureColumn from "~/app/[lang]/dashboard/brochure/_components/useBrochureColumn";
import {
  useCreateBrochure,
  useDeleteBrochure,
  useEditeBrochure,
  useGetBrochures,
} from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import { useSnackbar } from "notistack";
import { ICreateBrochureForm } from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {IBrochureBody} from "~/services/api/type";

type TProductModals =
  | "create-brochure"
  | "edit-brochure"
  | "delete-brochure"
  | null;

const useBrochure = () => {
  const { lang } = useCommon();
  const { enqueueSnackbar } = useSnackbar();
  const QC = useQueryClient();

  const { mutateAsync: mutateCreateBrochure } = useCreateBrochure();
  const { mutateAsync: mutateEditBrochure } = useEditeBrochure();
  const { mutateAsync: mutateDeleteBrochure } = useDeleteBrochure();

  const { data: brochures } = useGetBrochures({ lang });

  const [selectedBrochure, setSelectedBrochure] = useState<IBrochure>();

  const [modal, setModal] = useState<TProductModals>();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-brochure", title: "تعریف بروشور" },
    { id: "edit-brochure", title: "ویرایش بروشور" },
    { id: "delete-brochure", title: "حذف بروشور" },
  ];

  const handleCloseModal = () => {
    setModal(undefined);
  };

  const handleOpenModal = (
    modal: TProductModals,
    selectedBrochure?: IBrochure
  ) => {
    if (selectedBrochure) {
      setSelectedBrochure(selectedBrochure);
    }

    setModal(modal);
  };

  const handleCreateBrochure = async (values: ICreateBrochureForm) => {
    try {
      await mutateCreateBrochure({ ...values });
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }

    // @ts-ignore
    await QC.refetchQueries(["Brochures"]);
    handleCloseModal()
    enqueueSnackbar("عملیات با موفقیت انجام شد", { variant: "success" });
  };

  const handleEditeBrochure = async (brochure: IBrochureBody) => {
    console.log('edited')
    try {
      await mutateEditBrochure({id: selectedBrochure?._id!, ...brochure});
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }

    // @ts-ignore
    // await QC.refetchQueries(["Brochures"]);
    handleCloseModal()
    enqueueSnackbar("عملیات با موفقیت انجام شد", { variant: "success" });
  };

  const handleDeleteBrochure = async () => {
    try {
      await mutateDeleteBrochure(selectedBrochure?._id!);
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }

    // @ts-ignore
    await QC.refetchQueries(["Brochures"]);
    handleCloseModal()
    enqueueSnackbar("عملیات با موفقیت انجام شد", { variant: "success" });
  };

  const { columns } = useBrochureColumn({
    onEdit: (brochure) => handleOpenModal("edit-brochure", brochure),
    onDelete: (brochure) => handleOpenModal("delete-brochure", brochure),
  });

  const { table } = useTable({ data: brochures, columns });

  return {
    table,
    modal,
    modals,
    handleOpenModal,
    selectedBrochure,
    handleCloseModal,
    handleEditeBrochure,
    handleDeleteBrochure,
    handleCreateBrochure,
  };
};

export default useBrochure;

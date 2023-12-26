import useTable from "~/components/custom-mui/custom-table/components/useTable";
import { IBrochure } from "~/types/brochure";
import useBrochureColumn from "~/app/[lang]/dashboard/brochure/_components/useBrochureColumn";
import {
  useAssignBrochureFile,
  useCreateBrochure,
  useCreateFile,
  useDeleteBrochure,
  useEditeBrochure,
  useGetBrochures,
} from "~/services/api/hooks";
import { useCommon } from "~/store/common/commonSlice";
import { useSnackbar } from "notistack";
import { ICreateBrochureForm } from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

type TProductModals =
  | "create-brochure"
  | "edit-brochure"
  | "delete-brochure"
  | null;

const useBrochure = () => {
  const { lang } = useCommon();
  const { enqueueSnackbar } = useSnackbar();
  const QC = useQueryClient();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedBrochure, setSelectedBrochure] = useState<IBrochure>();

  const { mutateAsync: mutateCreateBrochure } = useCreateBrochure();
  const { mutateAsync: mutateEditBrochure } = useEditeBrochure();
  const { mutateAsync: mutateDeleteBrochure } = useDeleteBrochure();
  const { mutateAsync: mutateAssignBrochureFile } = useAssignBrochureFile();

  const { mutateAsync: mutateCreateFile } = useCreateFile();

  const { data: brochures } = useGetBrochures({ lang, page, limit });


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
    const formData = new FormData();
    formData.append("file", values.file!);

    try {
      const { file, ...body } = { ...values };
      const res = await mutateCreateBrochure({ ...body });
      await mutateAssignBrochureFile({ id: res._id!, formData });

      // @ts-ignore
      await QC.refetchQueries(["Brochures"]);
      handleCloseModal();
      enqueueSnackbar("عملیات با موفقیت انجام شد", { variant: "success" });
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }
  };

  const handleEditeBrochure = async (brochure: ICreateBrochureForm) => {
    try {
      const { file } = { ...brochure };
      const formData = new FormData();
      formData.append("file", file!);

      await mutateEditBrochure({
        id: selectedBrochure?._id!,
        lang: brochure.lang,
        title: brochure.title,
        brochureTypeId: brochure.brochureTypeId,
      });

      if (brochure.blobFile !== selectedBrochure?.file || !!file) {
        await mutateAssignBrochureFile({
          id: selectedBrochure?._id!,
          formData,
        });
      }

      // @ts-ignore
      await QC.refetchQueries(["Brochures"]);
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }

    handleCloseModal();
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
    handleCloseModal();
    enqueueSnackbar("عملیات با موفقیت انجام شد", { variant: "success" });
  };

  const { columns } = useBrochureColumn({
    onEdit: (brochure) => handleOpenModal("edit-brochure", brochure),
    onDelete: (brochure) => handleOpenModal("delete-brochure", brochure),
  });

  const { table } = useTable({ data: brochures?.data, columns });

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
    setPage,
    page,
    limit,
    setLimit,
    count: brochures?.meta?.totalPages
  };
};

export default useBrochure;

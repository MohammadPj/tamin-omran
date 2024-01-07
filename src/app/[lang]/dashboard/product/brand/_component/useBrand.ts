import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {
  useCreateBrand, useDeleteBrand, useEditeBrand, useGetBrands,
  useGetCategories
} from "~/services/api/hooks";

import { useState } from "react";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import {useCommon} from "~/store/common/commonSlice";
import {IBrand} from "~/types/product";
import {ICreateBrandForm} from "~/app/[lang]/dashboard/product/brand/_component/CreateBrand";
import useBrandColumn from "~/app/[lang]/dashboard/product/brand/_component/useBrandColumn";

type TBrandModals =
  | "create-brand"
  | "edit-brand"
  | "delete-brand"
  | null;

const useBrand = () => {
  const QC = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const {lang} = useCommon()

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedBrand, setSelectedBrand] = useState<IBrand>();

  const { data: brands } = useGetBrands({ lang, page, limit });
  const { mutateAsync: mutateCreateBrand } = useCreateBrand();
  const { mutateAsync: mutateEditBrand } = useEditeBrand();
  const { mutateAsync: mutateDeleteBrand } = useDeleteBrand();

  const [modal, setModal] = useState<TBrandModals>();

  const modals: { id: TBrandModals; title: string }[] = [
    { id: "create-brand", title: "تعریف برند" },
    { id: "edit-brand", title: "ویرایش برند" },
    { id: "delete-brand", title: "حذف برند" },
  ];

  const handleCreateBrand = async (values: ICreateBrandForm) => {
    try {
      await mutateCreateBrand(values);

      // @ts-ignore
      await QC.refetchQueries(['Brand'])
      enqueueSnackbar('برند با موفقیت ایجاد شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditBrand = async (values: ICreateBrandForm) => {
    try {
      await mutateEditBrand({id: selectedBrand?._id!, ...values})

      // @ts-ignore
      await QC.refetchQueries(['Brand'])
      enqueueSnackbar('برند با موفقیت ویرایش شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }

  };

  const handleDeleteBrand = async () => {
    try {
      await mutateDeleteBrand(selectedBrand?._id!)

      // @ts-ignore
      await QC.refetchQueries(['Brand'])
      enqueueSnackbar('برند با موفقیت حذف شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      console.log('e', e)
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleOpenModal = (modal: TBrandModals, brand: IBrand) => {
    setSelectedBrand(brand);

    setModal(modal);
  };

  const { columns } = useBrandColumn({
    onDelete: (brand) => handleOpenModal("delete-brand", brand),
    onEdite: (brand) => handleOpenModal("edit-brand", brand),
  });

  const { table } = useTable({ data: brands?.data, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedBrand,
    handleEditBrand,
    handleDeleteBrand,
    handleCreateBrand,
    page,
    setPage,
    limit,
    setLimit,
    count: brands?.meta?.totalPages
  };
};

export default useBrand;

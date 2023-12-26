import useTable from "~/components/custom-mui/custom-table/components/useTable";
import useCategoryColumn from "~/app/[lang]/dashboard/product/category/_component/useCategoryColumn";
import {useCreateCategory, useDeleteCategory, useEditeCategory, useGetCategories} from "~/services/api/hooks";
import { useState } from "react";
import { ICategory } from "~/types/product";
import { ICreateCategoryForm } from "~/app/[lang]/dashboard/product/category/_component/CreateCategory";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import {useCommon} from "~/store/common/commonSlice";

type TCategoryModals =
  | "create-category"
  | "edit-category"
  | "delete-category"
  | null;

const useCategory = () => {
  const QC = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const {lang} = useCommon()

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();

  const { data: categories } = useGetCategories({ lang, page, limit });
  const { mutateAsync: mutateCreateCategory } = useCreateCategory();
  const { mutateAsync: mutateEditCategory } = useEditeCategory();
  const { mutateAsync: mutateDeleteCategory } = useDeleteCategory();

  const [modal, setModal] = useState<TCategoryModals>();

  const modals: { id: TCategoryModals; title: string }[] = [
    { id: "create-category", title: "تعریف دسته بندی" },
    { id: "edit-category", title: "ویرایش دسته بندی" },
    { id: "delete-category", title: "حذف دسته بندی" },
  ];

  const handleCreateCategory = async (values: ICreateCategoryForm) => {
    try {
      await mutateCreateCategory(values);

      // @ts-ignore
      await QC.refetchQueries(['Category'])
      enqueueSnackbar('دسته بندی با موفقیت ایجاد شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditCategory = async (values: ICreateCategoryForm) => {
    try {
      await mutateEditCategory({id: selectedCategory?._id!, ...values})

      // @ts-ignore
      await QC.refetchQueries(['Category'])
      enqueueSnackbar('دسته بندی با موفقیت ویرایش شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }

  };

  const handleDeleteCategory = async () => {
    try {
      await mutateDeleteCategory(selectedCategory?._id!)

      // @ts-ignore
      await QC.refetchQueries(['Category'])
      enqueueSnackbar('دسته بندی با موفقیت حذف شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleOpenModal = (modal: TCategoryModals, category: ICategory) => {
    setSelectedCategory(category);

    setModal(modal);
  };

  const { columns } = useCategoryColumn({
    onDelete: (category) => handleOpenModal("delete-category", category),
    onEdite: (category) => handleOpenModal("edit-category", category),
  });

  const { table } = useTable({ data: categories?.data, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedCategory,
    handleEditCategory,
    handleDeleteCategory,
    handleCreateCategory,
    setPage,
    page,
    limit,
    setLimit,
    count: categories?.meta?.totalPages
  };
};

export default useCategory;

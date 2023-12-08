import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {
  useCreateArticle,
  useDeleteArticle,
  useEditeArticle,
  useGetArticles,
  useGetCategories
} from "~/services/api/hooks";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import {useCommon} from "~/store/common/commonSlice";
import {IArticle} from "~/types/article";
import useArticleColumn from "~/app/[lang]/dashboard/article/useArticleColumn";
import {ICreateArticleForm} from "~/app/[lang]/dashboard/article/_components/create-article/CreateArticle";

type TArticleModals =
  | "create-article"
  | "edit-article"
  | "delete-article"
  | null;

const useArticle = () => {
  const QC = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const {lang} = useCommon()

  const [selectedArticle, setSelectedArticle] = useState<IArticle>();
  const { data: categories } = useGetArticles({ lang });
  const { mutateAsync: mutateCreateArticle } = useCreateArticle();
  const { mutateAsync: mutateEditArticle } = useEditeArticle();
  const { mutateAsync: mutateDeleteArticle } = useDeleteArticle();

  const [modal, setModal] = useState<TArticleModals>();

  const modals: { id: TArticleModals; title: string }[] = [
    { id: "create-article", title: "تعریف دسته بندی" },
    { id: "edit-article", title: "ویرایش دسته بندی" },
    { id: "delete-article", title: "حذف دسته بندی" },
  ];

  const handleCreateArticle = async (values: ICreateArticleForm) => {
    try {
      await mutateCreateArticle(values);

      // @ts-ignore
      await QC.refetchQueries(['Article'])
      enqueueSnackbar('دسته بندی با موفقیت ایجاد شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditArticle = async (values: ICreateArticleForm) => {
    try {
      await mutateEditArticle({id: selectedArticle?._id!, ...values})

      // @ts-ignore
      await QC.refetchQueries(['Article'])
      enqueueSnackbar('دسته بندی با موفقیت ویرایش شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }

  };

  const handleDeleteArticle = async () => {
    try {
      await mutateDeleteArticle(selectedArticle?._id!)

      // @ts-ignore
      await QC.refetchQueries(['Article'])
      enqueueSnackbar('دسته بندی با موفقیت حذف شد', { variant: "success" });
      setModal(undefined)
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleOpenModal = (modal: TArticleModals, article: IArticle) => {
    setSelectedArticle(article);

    setModal(modal);
  };

  const { columns } = useArticleColumn({
    onDelete: (article) => handleOpenModal("delete-article", article),
    onEdite: (article) => handleOpenModal("edit-article", article),
  });

  const { table } = useTable({ data: categories, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedArticle,
    handleEditArticle,
    handleDeleteArticle,
    handleCreateArticle,
  };
};

export default useArticle;

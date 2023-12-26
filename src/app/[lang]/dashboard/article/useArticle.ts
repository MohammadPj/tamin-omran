import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {
  useAssignArticleImage,
  useCreateArticle,
  useDeleteArticle,
  useEditeArticle,
  useGetArticles,
} from "~/services/api/hooks";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useCommon } from "~/store/common/commonSlice";
import { IArticle } from "~/types/article";
import useArticleColumn from "~/app/[lang]/dashboard/article/useArticleColumn";
import { ICreateArticleForm } from "~/app/[lang]/dashboard/article/_components/create-article/CreateArticle";

type TArticleModals =
  | "create-article"
  | "edit-article"
  | "delete-article"
  | null;

const useArticle = () => {
  const QC = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const { lang } = useCommon();

  const [selectedArticle, setSelectedArticle] = useState<IArticle>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: articles } = useGetArticles({ lang });
  const { mutateAsync: mutateCreateArticle } = useCreateArticle();
  const { mutateAsync: mutateEditArticle } = useEditeArticle();
  const { mutateAsync: mutateAssignArticleImage } = useAssignArticleImage();
  const { mutateAsync: mutateDeleteArticle } = useDeleteArticle();

  const [modal, setModal] = useState<TArticleModals>();

  const modals: { id: TArticleModals; title: string }[] = [
    { id: "create-article", title: "تعریف دسته بندی" },
    { id: "edit-article", title: "ویرایش دسته بندی" },
    { id: "delete-article", title: "حذف دسته بندی" },
  ];

  const handleCreateArticle = async (values: ICreateArticleForm) => {
    const { imageFile, ...body } = values;
    try {
      const res = await mutateCreateArticle(body);

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
          await mutateAssignArticleImage({
            id: res?._id!,
            formData,
          });
        } catch (e) {
          enqueueSnackbar("بارگذاری عکس با خطا مواجه شد", { variant: "error" });
        }
      }

      // @ts-ignore
      await QC.refetchQueries(["Article"]);
      enqueueSnackbar("دسته بندی با موفقیت ایجاد شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditArticle = async (article: ICreateArticleForm) => {
    try {
      const { imageFile } = { ...article };
      const formData = new FormData();
      formData.append("image", imageFile!);

      await mutateEditArticle({
        id: selectedArticle?._id!,
        lang: article.lang,
        title: article.title,
        content: article.content,
      });

      if (article.blobImage !== selectedArticle?.image || !!imageFile) {
        console.log('run')
        try {
          await mutateAssignArticleImage({
            id: selectedArticle?._id!,
            formData,
          });
        } catch (e) {
          enqueueSnackbar("بارگذاری عکس با خطا مواجه شد", { variant: "error" });
        }
      }

      // @ts-ignore
      await QC.refetchQueries(["Articles"]);
      setModal(undefined);
    } catch (ex: any) {
      enqueueSnackbar(ex?.message, { variant: "error" });
    }
  };

  const handleDeleteArticle = async () => {
    try {
      await mutateDeleteArticle(selectedArticle?._id!);

      // @ts-ignore
      await QC.refetchQueries(["Article"]);
      enqueueSnackbar("دسته بندی با موفقیت حذف شد", { variant: "success" });
      setModal(undefined);
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

  const { table } = useTable({ data: articles?.data, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedArticle,
    handleEditArticle,
    handleDeleteArticle,
    handleCreateArticle,
    setPage,
    page,
    limit,
    setLimit,
    count: articles?.meta?.totalPages
  };
};

export default useArticle;

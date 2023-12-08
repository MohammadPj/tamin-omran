import useTable from "~/components/custom-mui/custom-table/components/useTable";
import {
  useCreateProduct,
  useDeleteProduct,
  useEditeProduct,
  useGetProducts,
} from "~/services/api/hooks";

import { useState } from "react";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useCommon } from "~/store/common/commonSlice";
import { IProduct } from "~/types/product";
import { ICreateProductForm } from "~/app/[lang]/dashboard/product/_components/create-product/CreateProduct";
import useProductColumn from "~/app/[lang]/dashboard/product/_components/useProductColumn";

type TProductModals =
  | "create-product"
  | "edit-product"
  | "delete-product"
  | "filter-product"
  | null;

const useProduct = () => {
  const QC = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const { lang } = useCommon();

  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const { data: categories } = useGetProducts({ lang });
  const { mutateAsync: mutateCreateProduct } = useCreateProduct();
  const { mutateAsync: mutateEditProduct } = useEditeProduct();
  const { mutateAsync: mutateDeleteProduct } = useDeleteProduct();

  const [modal, setModal] = useState<TProductModals>();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-product", title: "تعریف محصول" },
    { id: "edit-product", title: "ویرایش محصول" },
    { id: "delete-product", title: "حذف محصول" },
  ];

  const handleFilterProduct = (e: any) => {
    console.log('e', e)
  }

  const handleCreateProduct = async (values: ICreateProductForm) => {

    try {
      await mutateCreateProduct({
        ...values,
      });

      // @ts-ignore
      await QC.refetchQueries(["Product"]);
      enqueueSnackbar("محصول با موفقیت ایجاد شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditProduct = async (values: ICreateProductForm) => {
    try {
      await mutateEditProduct({
        id: selectedProduct?._id!,
        ...values,
      });

      // @ts-ignore
      await QC.refetchQueries(["Product"]);
      enqueueSnackbar("محصول با موفقیت ویرایش شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await mutateDeleteProduct(selectedProduct?._id!);

      // @ts-ignore
      await QC.refetchQueries(["Product"]);
      enqueueSnackbar("محصول با موفقیت حذف شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleOpenModal = (modal: TProductModals, product: IProduct) => {
    setSelectedProduct(product);

    setModal(modal);
  };

  const { columns } = useProductColumn({
    onDelete: (product) => handleOpenModal("delete-product", product),
    onEdite: (product) => handleOpenModal("edit-product", product),
  });

  const { table } = useTable({ data: categories, columns });

  return {
    table,
    modal,
    modals,
    setModal,
    selectedProduct,
    handleEditProduct,
    handleFilterProduct,
    handleDeleteProduct,
    handleCreateProduct,
  };
};

export default useProduct;

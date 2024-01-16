import useTable from "~/components/custom-mui/custom-table/components/useTable";

import {
  useAssignProductImage,
  useCreateProduct,
  useDeleteProduct,
  useEditeProduct,
  useGetEngineNumber,
  useGetProducts,
} from "~/services/api/hooks";

import { useState } from "react";
import { useSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useCommon } from "~/store/common/commonSlice";
import { IProduct } from "~/types/product";
import { ICreateProductForm } from "~/app/[lang]/dashboard/product/_components/create-product/CreateProduct";
import useProductColumn from "~/app/[lang]/dashboard/product/_components/useProductColumn";
import { handleAppendFormData } from "~/helpers/methods";
import { useQueryObject } from "~/hooks/useQueryObject";
import { IProductBody } from "~/services/api/type";

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
  const { query } = useQueryObject();

  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: products } = useGetProducts({ limit, page, ...query });
  const { data: enginNumbers } = useGetEngineNumber();
  const { mutateAsync: mutateCreateProduct } = useCreateProduct();
  const { mutateAsync: mutateEditProduct } = useEditeProduct();
  const { mutateAsync: mutateDeleteProduct } = useDeleteProduct();
  const { mutateAsync: mutateAssignProductImage } = useAssignProductImage();

  const [modal, setModal] = useState<TProductModals>();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-product", title: "تعریف محصول" },
    { id: "edit-product", title: "ویرایش محصول" },
    { id: "delete-product", title: "حذف محصول" },
  ];

  const handleFilterProduct = (e: any) => {
    console.log("e", e);
  };

  const handleCreateProduct = async (values: ICreateProductForm) => {
    const { image, images, imageFiles, imageFile, engineNumber, ...newValues } =
      values;

    const body: IProductBody = { ...newValues };

    if (!values.engineNumber?.value) {
      const foundEngineNumber = enginNumbers?.data?.find(
        (e) => e.title === values.engineNumber?.label
      );
      body.engineNumber = foundEngineNumber
        ? foundEngineNumber?._id
        : engineNumber.label;
    } else {
      body.engineNumber = engineNumber.value;
    }

    try {
      const res = await mutateCreateProduct(body);

      if (imageFile || Number(imageFiles?.length) > 0) {
        const formData = new FormData();
        handleAppendFormData(formData, "images", imageFile);

        for (let i = 0; i < Number(imageFiles?.length); i++) {
          const file = imageFiles?.[i];
          handleAppendFormData(formData, "images", file);
        }

        try {
          await mutateAssignProductImage({ id: res._id, formData });
        } catch (e) {
          enqueueSnackbar("بارگذاری عکس با مشکل مواجه شد", {
            variant: "error",
          });
        }
      }

      // @ts-ignore
      await QC.refetchQueries(["Product"]);
      enqueueSnackbar("محصول با موفقیت ایجاد شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data, { variant: "error" });
    }
  };

  const handleEditProduct = async (values: ICreateProductForm) => {
    const { image, images, imageFiles, imageFile, engineNumber, ...newValues } =
      values;

    const body: IProductBody = { ...newValues };

    if (!values.engineNumber?.value) {
      const foundEngineNumber = enginNumbers?.data?.find(
        (e) => e.title === values.engineNumber?.label
      );
      body.engineNumber = foundEngineNumber
        ? foundEngineNumber?._id
        : engineNumber.label;
    } else {
      body.engineNumber = engineNumber.value;
    }

    try {
      const res = await mutateEditProduct({
        id: selectedProduct?._id!,
        ...body,
      });

      if (imageFile || Number(imageFiles?.length) > 0) {
        const formData = new FormData();
        handleAppendFormData(formData, "images", imageFile);

        for (let i = 0; i < Number(imageFiles?.length); i++) {
          const file = imageFiles?.[i];
          handleAppendFormData(formData, "images", file);
        }

        try {
          await mutateAssignProductImage({ id: res._id, formData });
        } catch (e) {
          enqueueSnackbar("بارگذاری عکس با مشکل مواجه شد", {
            variant: "error",
          });
        }
      }

      // @ts-ignore
      await QC.refetchQueries(["Product"]);
      enqueueSnackbar("محصول با موفقیت ایجاد شد", { variant: "success" });
      setModal(undefined);
    } catch (e: any) {
      enqueueSnackbar(e?.response?.data || "عملیات با خطا مواجه شد", {
        variant: "error",
      });
    }

    //   // @ts-ignore
    //   await QC.refetchQueries(["Product"]);
    //   enqueueSnackbar("محصول با موفقیت ایجاد شد", { variant: "success" });
    //   setModal(undefined);
    // } catch (e: any) {
    //   enqueueSnackbar(e?.response?.data, { variant: "error" });
    // }
    //
    //
    // try {
    //   await mutateEditProduct({
    //     id: selectedProduct?._id!,
    //     ...values,
    //   });
    //
    //   // @ts-ignore
    //   await QC.refetchQueries(["Product"]);
    //   enqueueSnackbar("محصول با موفقیت ویرایش شد", { variant: "success" });
    //   setModal(undefined);
    // } catch (e: any) {
    //   enqueueSnackbar(e?.response?.data, { variant: "error" });
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

  const { table } = useTable({ data: products?.data, columns });

  return {
    page,
    table,
    modal,
    limit,
    modals,
    setPage,
    setModal,
    setLimit,
    selectedProduct,
    handleEditProduct,
    handleFilterProduct,
    handleDeleteProduct,
    handleCreateProduct,
    count: products?.meta?.totalPages,
  };
};

export default useProduct;

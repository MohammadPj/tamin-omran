"use client";
import React, { FC, useState } from "react";
import useProduct from "~/app/[lang]/dashboard/product/useProduct";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import CreateProduct from "~/app/[lang]/dashboard/product/_components/create-product/CreateProduct";
import CreateBrand from "~/app/[lang]/dashboard/product/_components/create-brand/CreateBrand";
import FilterProducts from "~/app/[lang]/dashboard/product/_components/filter-produts/FilterProducts";

type TProductModals =
  | "create-product"
  | "create-brand"
  | "filter-products"
  | null;

const Product: FC = () => {
  const { table } = useProduct();
  const [modal, setModal] = useState<TProductModals>();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-product", title: "تعریف محصول" },
    { id: "create-brand", title: "تعریف برند و دسته بندی" },
    { id: "filter-products", title: "فیلتر" },
  ];

  const handleCreateProduct = () => {
    setModal(null)
  }

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button
              variant={"outlined"}
              onClick={() => setModal("create-brand")}
            >
              تعریف برند و دسته بندی
            </Button>

            <Button onClick={() => setModal("create-product")}>
              تعریف محصول
            </Button>
          </Box>
        }
        onClickFilter={() => setModal('filter-products')}
        table={table}
        pageCount={4}
      />

      <CustomModal
        open={!!modal}
        title={modals.find((m) => m.id === modal)?.title}
        onClose={() => setModal(null)}
      >
        {modal === "create-product" ? (
          <CreateProduct onSubmit={handleCreateProduct} onCancel={() => setModal(null)} />
        ) : modal === "create-brand" ? (
          <CreateBrand onCancel={() => setModal(null)} onSubmit={() => setModal(null)} />
        ) : modal === "filter-products" ? (
          <FilterProducts onCancel={() => setModal(null)} onSubmit={() => setModal(null)} />
        ) : (
          <Box />
        )}
      </CustomModal>
    </>
  );
};

export default Product;

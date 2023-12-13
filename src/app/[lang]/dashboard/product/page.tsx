"use client";
import React, { FC, useState } from "react";
import useProduct from "~/app/[lang]/dashboard/product/_components/useProduct";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import CreateProduct from "~/app/[lang]/dashboard/product/_components/create-product/CreateProduct";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";
import FilterProducts from "~/app/[lang]/dashboard/product/_components/filter-produts/FilterProducts";

const Product: FC = () => {
  const {
    table,
    modal,
    modals,
    setModal,
    selectedProduct,
    handleEditProduct,
    handleFilterProduct,
    handleDeleteProduct,
    handleCreateProduct,
  } = useProduct();

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button onClick={() => setModal("create-product")}>
              تعریف محصول
            </Button>
          </Box>
        }
        onClickFilter={() => setModal("filter-product")}
        table={table}
        pageCount={4}
      />

      <CustomModal
        open={!!modal}
        title={modals.find((m) => m.id === modal)?.title}
        onClose={() => setModal(null)}
        boxProps={{
          width: "90%",
          maxWidth:
            modal === "create-product" || modal === "edit-product" ? 1000 : 400,
        }}
      >
        {modal === "create-product" ? (
          <CreateProduct
            onSubmit={handleCreateProduct}
            onCancel={() => setModal(undefined)}
          />
        ) : modal === "edit-product" ? (
          <CreateProduct
            defaultValue={selectedProduct}
            onCancel={() => setModal(null)}
            onSubmit={handleEditProduct}
          />
        ) : modal === "delete-product" ? (
          <ConfirmDelete
            onConfirm={handleDeleteProduct}
            onCancel={() => setModal(undefined)}
          />
        ) : modal === "filter-product" ? (
          <FilterProducts
            onSubmit={handleFilterProduct}
            onCancel={() => setModal(undefined)}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </>
  );
};

export default Product;

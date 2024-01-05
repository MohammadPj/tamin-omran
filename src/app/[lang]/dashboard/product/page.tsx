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
import SearchProducts from "~/app/[lang]/dashboard/product/_components/search-products/SearchProducts";

const Product: FC = () => {
  const {
    page,
    table,
    modal,
    count,
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
  } = useProduct();

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button sx={{width: 'max-content'}} onClick={() => setModal("create-product")} >
              تعریف محصول
            </Button>
          </Box>
        }
        rightContent={<SearchProducts />}
        table={table}
        pageCount={count}
        page={page}
        onChangePage={(e, page) => setPage(page)}
        onChangePageSize={(limit) => {
          setPage(1);
          setLimit(limit);
        }}
        pageSize={limit}
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

"use client";
import React, { FC } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useCategory from "~/app/[lang]/dashboard/product/category/_component/useCategory";
import CreateCategory from "~/app/[lang]/dashboard/product/_components/create-category/CreateCategory";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";

const Product: FC = () => {
  const {
    table,
    modal,
    modals,
    setModal,
    selectedCategory,
    handleEditCategory,
    handleDeleteCategory,
    handleCreateCategory,
  } = useCategory();

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button onClick={() => setModal("create-category")}>
              تعریف دسته بندی
            </Button>
          </Box>
        }
        table={table}
        pageCount={4}
      />

      <CustomModal
        open={!!modal}
        title={modals.find((m) => m.id === modal)?.title}
        onClose={() => setModal(null)}
      >
        {modal === "create-category" ? (
          <CreateCategory
            onSubmit={handleCreateCategory}
            onCancel={() => setModal(undefined)}
          />
        ) : modal === "edit-category" ? (
          <CreateCategory
            defaultValues={selectedCategory}
            onCancel={() => setModal(null)}
            onSubmit={handleEditCategory}
          />
        ) : modal === "delete-category" ? (
          <ConfirmDelete
            onConfirm={handleDeleteCategory}
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

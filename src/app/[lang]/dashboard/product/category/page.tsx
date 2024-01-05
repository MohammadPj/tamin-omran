"use client";
import React, { FC } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useCategory from "~/app/[lang]/dashboard/product/category/_component/useCategory";
import CreateCategory from "~/app/[lang]/dashboard/product/category/_component/CreateCategory";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";
import InputListWithQuery from "~/components/common/input-list/with-query/InputListWithQuery";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

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
    setPage,
    page,
    limit,
    setLimit,
    count
  } = useCategory();

  const inputList: IUseFormInput[] = [
    {
      name: 'title',
      label: '',
      placeholder: 'دسته بندی'
    }
  ]

  return (
    <>
      <CustomTable
        leftContent={
          <Box sx={{width: 200}} display={"flex"} gap={4}>
            <Button onClick={() => setModal("create-category")}>
              تعریف دسته بندی
            </Button>
          </Box>
        }
        rightContent={<InputListWithQuery inputList={inputList} />}
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

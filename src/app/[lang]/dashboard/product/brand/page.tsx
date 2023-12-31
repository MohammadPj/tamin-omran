"use client";
import React, { FC } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useBrand from "~/app/[lang]/dashboard/product/brand/_component/useBrand";
import CreateBrand from "~/app/[lang]/dashboard/product/brand/_component/CreateBrand";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";
import InputListWithQuery from "~/components/common/input-list/with-query/InputListWithQuery";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

const Product: FC = () => {
  const {
    table,
    modal,
    modals,
    setModal,
    handleEditBrand,
    handleDeleteBrand,
    handleCreateBrand,
    selectedBrand,
    page,
    setPage,
    limit,
    setLimit,
    count
  } = useBrand();

  const inputList: IUseFormInput[] = [
    {
      name: 'title',
      label: '',
      placeholder: 'برند'
    }
  ]

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button sx={{width: 'max-content'}} onClick={() => setModal("create-brand")}>
              تعریف برند
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
        {modal === "create-brand" ? (
          <CreateBrand
            onSubmit={handleCreateBrand}
            onCancel={() => setModal(undefined)}
          />
        ) : modal === "edit-brand" ? (
          <CreateBrand
            defaultValues={selectedBrand}
            onCancel={() => setModal(null)}
            onSubmit={handleEditBrand}
          />
        ) : modal === "delete-brand" ? (
          <ConfirmDelete
            onConfirm={handleDeleteBrand}
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

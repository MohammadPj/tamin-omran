"use client";
import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useArticle from "~/app/[lang]/dashboard/article/useArticle";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import CreateArticle from "~/app/[lang]/dashboard/article/_components/create-article/CreateArticle";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";
import InputListWithQuery from "~/components/common/input-list/with-query/InputListWithQuery";
import {IUseFormInput} from "~/components/common/input-list/with-useForm/types";

const Article: FC = () => {

  const {
    table,
    selectedArticle,
    handleDeleteArticle,
    handleEditArticle,
    handleCreateArticle,
    setModal,
    modals,
    modal,
    setPage,
    page,
    limit,
    setLimit,
    count
  } = useArticle();

  const inputList: IUseFormInput[] = [
    {
      name: 'title',
      label: '',
      placeholder: 'مقاله'
    }
  ]

  return (
    <>
      <CustomTable
        leftContent={
          <Button sx={{width: 150}} onClick={() => setModal("create-article")}>
            تعریف مقاله
          </Button>
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
        boxProps={{width: '90%', maxWidth: 900}}
      >
        {modal === "create-article" ? (
          <CreateArticle
            onSubmit={handleCreateArticle}
            onCancel={() => setModal(undefined)}
          />
        ) : modal === "edit-article" ? (
          <CreateArticle
            defaultValue={selectedArticle}
            onCancel={() => setModal(null)}
            onSubmit={handleEditArticle}
          />
        ) : modal === "delete-article" ? (
          <ConfirmDelete
            onConfirm={handleDeleteArticle}
            onCancel={() => setModal(undefined)}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </>
  );
};

export default Article;

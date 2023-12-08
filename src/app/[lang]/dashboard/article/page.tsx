"use client";
import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useArticle from "~/app/[lang]/dashboard/article/useArticle";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import CreateArticle from "~/app/[lang]/dashboard/article/_components/create-article/CreateArticle";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";

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
  } = useArticle();


  return (
    <>
      <CustomTable
        leftContent={
          <Button onClick={() => setModal("create-article")}>
            تعریف مقاله
          </Button>
        }
        table={table}
        pageCount={4}
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

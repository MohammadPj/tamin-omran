"use client";
import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useArticle from "~/app/[lang]/dashboard/article/useArticle";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import CreateArticle from "~/app/[lang]/dashboard/article/_components/create-article/CreateArticle";

type TProductModals = "create-article" | null;

const Article: FC = () => {
  const [modal, setModal] = useState<TProductModals>();

  const { table } = useArticle();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-article", title: "تعریف مقاله" },
  ];

  const handleCreateArticle = () => {
    setModal(null);
  };

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
        boxProps={{maxWidth: 900, width: '90%'}}
      >
        {modal === "create-article" ? (
          <CreateArticle
            onSubmit={handleCreateArticle}
            onCancel={() => setModal(null)}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </>
  );
};

export default Article;

"use client";
import React, { FC, useState } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import { Button } from "@mui/material";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import Box from "@mui/material/Box";
import useBrochure from "~/app/[lang]/dashboard/brochure/useBrochure";
import CreateBrochure from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
import CreateCategory from "~/app/[lang]/dashboard/brochure/_components/CreateCategory";

type TProductModals = "create-brochure" | "create-category" | null;

const Brochure: FC = () => {
  const [modal, setModal] = useState<TProductModals>();

  const { table } = useBrochure();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-brochure", title: "تعریف بروشور" },
    { id: "create-category", title: "تعریف دسته بندی" },
  ];

  const handleCreateArticle = () => {
    setModal(null);
  };

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button
              variant={"outlined"}
              onClick={() => setModal("create-category")}
            >
              تعریف دسته بندی
            </Button>

            <Button onClick={() => setModal("create-brochure")}>
              تعریف بروشور
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
        boxProps={{ maxWidth: 500, width: "90%" }}
      >
        {modal === "create-brochure" ? (
          <CreateBrochure
            onSubmit={handleCreateArticle}
            onCancel={() => setModal(null)}
          />
        ) : modal === "create-category" ? (
          <CreateCategory
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

export default Brochure;

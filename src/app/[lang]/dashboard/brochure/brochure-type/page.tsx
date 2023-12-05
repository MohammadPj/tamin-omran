"use client";
import React, { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import useBrochureType from "~/app/[lang]/dashboard/brochure/brochure-type/_components/useBrochureType";
import CreateBrochureType from "~/app/[lang]/dashboard/brochure/brochure-type/_components/CreateBrochureType";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import EditBrochureType from "~/app/[lang]/dashboard/brochure/brochure-type/_components/EditBrochureType";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";

interface BrochureTypeProps {}

const BrochureType: FC<BrochureTypeProps> = () => {
  const {
    table,
    modal,
    modals,
    setModal,
    selectedBrochureType,
    handleCreateCategory,
    handleEditeBrochureType,
    handleDeleteBrochureType,
  } = useBrochureType();

  return (
    <>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button
              variant={"outlined"}
              onClick={() => setModal("create-brochure-type")}
            >
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
        boxProps={{ maxWidth: 500, width: "90%" }}
      >
        {modal === "create-brochure-type" ? (
          <CreateBrochureType
            onSubmit={handleCreateCategory}
            onCancel={() => setModal(null)}
          />
        ) : modal === "edit-brochure-type" ? (
          <EditBrochureType
            onSubmit={handleEditeBrochureType}
            onCancel={() => setModal(null)}
            selectedBrochureType={selectedBrochureType!}
          />
        ) : modal === "delete-brochure-type" ? (
          <ConfirmDelete
            onConfirm={handleDeleteBrochureType}
            onCancel={() => setModal(null)}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </>
  );
};

export default BrochureType;

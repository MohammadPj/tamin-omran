"use client";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useBrochure from "~/app/[lang]/dashboard/brochure/_components/useBrochure";
import CreateBrochure from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
import ConfirmDelete from "~/components/common/modals/ConfirmDelete";
import EditBrochure from "~/app/[lang]/dashboard/brochure/_components/EditBrochure";

const Brochure: FC = () => {
  const {
    table,
    modal,
    modals,
    handleOpenModal,
    selectedBrochure,
    handleCloseModal,
    handleEditeBrochure,
    handleDeleteBrochure,
    handleCreateBrochure,
  } = useBrochure();

  return (
    <Box flexGrow={1}>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>
            <Button onClick={() => handleOpenModal("create-brochure")}>
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
        onClose={handleCloseModal}
        boxProps={{ maxWidth: 500, width: "90%" }}
      >
        {modal === "create-brochure" ? (
          <CreateBrochure
            onSubmit={handleCreateBrochure}
            onCancel={handleCloseModal}
          />
        ) : modal === "delete-brochure" ? (
          <ConfirmDelete
            onConfirm={handleDeleteBrochure}
            onCancel={handleCloseModal}
          />
        ) : modal === "edit-brochure" ? (
          <CreateBrochure
            onSubmit={handleEditeBrochure}
            onCancel={handleCloseModal}
            defaultValue={{
              lang: selectedBrochure?.lang!,
              brochureTypeId: selectedBrochure?.brochureType?._id!,
              title: selectedBrochure?.title!,
            }}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </Box>
  );
};

export default Brochure;

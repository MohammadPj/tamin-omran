"use client";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useBrochure from "~/app/[lang]/dashboard/brochure/useBrochure";
import CreateBrochure from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
type TProductModals = "create-brochure" | "create-category" | null;

const Brochure: FC = () => {
  const [modal, setModal] = useState<TProductModals>();
  const { table } = useBrochure();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-brochure", title: "تعریف بروشور" },
  ];

  const handleCreateBrochure = () => {};

  return (
    <Box flexGrow={1}>
      <CustomTable
        leftContent={
          <Box display={"flex"} gap={4}>

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
            onSubmit={handleCreateBrochure}
            onCancel={() => setModal(null)}
          />
        ) : (
          <Box />
        )}
      </CustomModal>
    </Box>
  );
};

export default Brochure;

"use client";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import CustomTable from "~/components/custom-mui/custom-table/CustomTable";
import CustomModal from "~/components/custom-mui/custom-modal/CustomModal";
import useBrochure from "~/app/[lang]/dashboard/brochure/useBrochure";
import CreateBrochure from "~/app/[lang]/dashboard/brochure/_components/CreateBrochure";
import CreateCategory, {
  IBrochureTypeForm,
} from "~/app/[lang]/dashboard/brochure/_components/CreateCategory";
import { useCreateBrochureType } from "~/services/api/hooks";
import { useSnackbar } from "notistack";

type TProductModals = "create-brochure" | "create-category" | null;

const Brochure: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [modal, setModal] = useState<TProductModals>();
  const { mutateAsync: mutateCreateBrochureType } = useCreateBrochureType();

  const { table } = useBrochure();

  const modals: { id: TProductModals; title: string }[] = [
    { id: "create-brochure", title: "تعریف بروشور" },
    { id: "create-category", title: "تعریف دسته بندی" },
  ];

  const handleCreateCategory = async (data: IBrochureTypeForm) => {
    try {
      await mutateCreateBrochureType({
        title: data.categoryNameEn,
        lang: "en",
      });
      await mutateCreateBrochureType({
        title: data.categoryNameFa,
        lang: "fa",
      });
      enqueueSnackbar("دسته بندی با موفقیت ایجاد شد", {variant: 'success'});
      setModal(null);
    } catch (e) {
      enqueueSnackbar("عملیات با مشکل مواجه شد", {variant: 'error'});
    }
  };

  const handleCreateBrochure = () => {};

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
            onSubmit={handleCreateBrochure}
            onCancel={() => setModal(null)}
          />
        ) : modal === "create-category" ? (
          <CreateCategory
            onSubmit={handleCreateCategory}
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

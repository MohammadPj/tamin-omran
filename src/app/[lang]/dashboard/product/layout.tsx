import React, { FC } from "react";
import { Box, Stack } from "@mui/material";
import CustomTab, { ITab } from "~/components/custom-mui/custom-tab/CustomTab";

interface BrochureLayoutProps {
  children: React.ReactNode;
}
const BrochureLayout: FC<BrochureLayoutProps> = ({ children }) => {
  const tabs: ITab[] = [
    { href: "/dashboard/product", label: "محصول" },
    { href: "/dashboard/product/category", label: "دسته بندی" },
    { href: "/dashboard/product/brand", label: "برند" },
    // {href: "/dashboard/product/engine", label: "موتور"},
  ];

  return (
    <Stack height={"100%"}>
      <CustomTab tabs={tabs} tabsProps={{ sx: { mb: 4 } }} />
      {children}
    </Stack>
  );
};

export default BrochureLayout;

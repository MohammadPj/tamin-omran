import React, {FC} from 'react';
import {Box, Stack} from "@mui/material";
import CustomTab, {ITab} from "~/components/custom-mui/custom-tab/CustomTab";

interface BrochureLayoutProps {
  children: React.ReactNode
}
const BrochureLayout: FC<BrochureLayoutProps>  = ({children}) => {
  const tabs: ITab[] = [
    {href: "/dashboard/brochure", label: "بروشور"},
    {href: "/dashboard/brochure/brochure-type", label: "دسته بندی"},
  ]

  return (
    <Stack height={'100%'}>
      <CustomTab tabs={tabs} tabsProps={{sx: {mb: 4}}} />

      {children}
    </Stack>
  );
};

export default BrochureLayout;

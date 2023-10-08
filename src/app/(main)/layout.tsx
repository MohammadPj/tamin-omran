import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Header from "@/app/_components/Header";

const MainLayout: FC = ({children}) => {
  return (
    <Stack>
      <Header />
      {children}
      MainLayout
    </Stack>
  );
};

export default MainLayout;

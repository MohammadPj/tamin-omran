import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Header from "~/app/_components/Header";
import Footer from "~/app/_components/Footer";

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({children}) => {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default MainLayout;

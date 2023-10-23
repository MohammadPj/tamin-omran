import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Header from "~/app/_components/Header";
import Footer from "~/app/_components/Footer";

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({children}) => {


  return (
    <Stack minHeight={'100vh'}>

      <Header />

      <Stack flexGrow={1}>
      {children}
      </Stack>

      <Footer />
    </Stack>
  );
};

export default MainLayout;

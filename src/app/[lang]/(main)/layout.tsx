import React, { FC } from "react";
import { Stack } from "@mui/material";
import Header from "~/app/[lang]/_components/header/Header";
import Footer from "~/app/[lang]/_components/Footer";
import {TLanguages} from "~/i18n";

interface Props {
  children: React.ReactNode;
  params: {lang: TLanguages}
}

const MainLayout: FC<Props> = ({ children, params }) => {

  return (
    <Stack minHeight={"100vh"} bgcolor={'#F0F0F0'}>
      <Header lang={params.lang} />

      <Stack flexGrow={1}>{children}</Stack>

      <Footer lang={params.lang} />
    </Stack>
  );
};

export default MainLayout;

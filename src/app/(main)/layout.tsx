import React from 'react';
import {Stack} from "@mui/material";

const MainLayout = ({children}) => {
  return (
    <Stack>
      {children}
      MainLayout
    </Stack>
  );
};

export default MainLayout;

import React, {FC} from 'react';
import {Box} from "@mui/material";

interface Props {
  children: React.ReactNode
}

const LoginLayout: FC<Props> = ({children}) => {

  return (
    <Box minHeight={"100vh"} bgcolor={"white"}>
      {children}
    </Box>
  );
};

export default LoginLayout;

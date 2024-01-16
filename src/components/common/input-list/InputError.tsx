import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {BoxProps} from "@mui/material/Box";
import SvgClose from "~/components/icons/final/Close";

interface Props {
  error: string;
  boxProps?: BoxProps
}

const InputError: FC<Props> = ({ error, boxProps, ...rest }) => {
  if (!error) return null;

  return (
    <Box display={"flex"} mt={3} alignItems="center" {...boxProps} {...rest}>
      <SvgClose
        width={16}
        height={16}
        primarycolor={"red"}
      />

      <Typography fontWeight={500} fontSize={12} color={"error"} ml={1}>
        {error}
      </Typography>
    </Box>
  );
};

export default InputError;

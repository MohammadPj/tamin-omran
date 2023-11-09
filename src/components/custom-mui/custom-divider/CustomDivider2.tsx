import React, { FC } from "react";
import {Box, BoxProps, Typography} from "@mui/material";
import {TypographyProps} from "@mui/material/Typography";

interface Props {
  title: string;
  boxProps?: BoxProps;
  typoProps?: TypographyProps
}

const CustomDivider2: FC<Props> = ({ title, typoProps, boxProps }) => {
  return (
    <Box display={'flex'} {...boxProps}>
      <Typography
        fontSize={{xs: 16, sm: 24}}
        fontWeight={700}
        color={"primary"}
        borderBottom={"3px solid"}
        borderColor={"primary"}
        pb={2}
        {...typoProps}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CustomDivider2;

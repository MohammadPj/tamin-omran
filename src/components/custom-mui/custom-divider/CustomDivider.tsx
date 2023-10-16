import React, { FC } from "react";
import {Box, BoxProps, Typography, useTheme} from "@mui/material";
import SvgGear from "~/components/icons/Gear";
import SvgArrowCircleLeft from "~/components/icons/ArrowCircleLeft";

interface Props extends BoxProps{
  title: string;
  onShowMore?: () => void;
}

const CustomDivider: FC<Props> = ({ title, onShowMore, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      borderBottom={"1px solid"}
      borderColor={'grey.2'}
      display={"flex"}
      width={"100%"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Box
        display={"flex"}
        alignItems={"end"}
        borderBottom={"4px solid"}
        borderColor={theme.palette.primary.main}
        pr={4}
      >
        <SvgGear style={{ marginBottom: "-4px", marginRight: "-13px" }} />
        <Typography fontWeight={500} fontSize={18}>
          {title}
        </Typography>
      </Box>

      {onShowMore && (
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={onShowMore}
        >
          <Typography color={"primary"} fontSize={16} fontWeight={700}>
            مشاهده همه
          </Typography>
          <SvgArrowCircleLeft />
        </Box>
      )}
    </Box>
  );
};

export default CustomDivider;

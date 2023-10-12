import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SvgGear from "~/components/icons/Gear";
import SvgArrowCircleLeft from "~/components/icons/ArrowCircleLeft";

interface Props {
  title: string;
  onShowMore?: () => void;
}

const CustomDivider: FC<Props> = ({ title, onShowMore }) => {
  const theme = useTheme();
  return (
    <Box
      borderBottom={"1px solid"}
      borderColor={theme.palette.grey["2"]}
      display={"flex"}
      width={"100%"}
      justifyContent={"space-between"}
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

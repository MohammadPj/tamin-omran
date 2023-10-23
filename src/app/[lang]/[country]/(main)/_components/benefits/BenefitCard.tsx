import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import SvgGear from "~/components/icons/final/Gear";

interface Props {
  title: string;
  description: string;
}

const BenefitCard: FC<Props> = ({ title, description }) => {
  return (
    <Box height={280} py={9} px={3} flexGrow={1} bgcolor={"background.2"}>
      <Box mb={4}>
        <Box display={"flex"} alignItems={"center"}>
          <SvgGear secondarycolor={"grey"} primarycolor={"grey"} />
          <Typography fontWeight={500} fontSize={18}>
            {title}
          </Typography>
        </Box>
        <Box
          borderBottom={"3px solid"}
          borderColor={"grey.3"}
          width={"80%"}
        ></Box>
        <Box borderBottom={"3px solid"}></Box>
      </Box>

      <Box display={"flex"}>
        <Typography flexGrow={1} width={0} color={"text.secondary"} fontWeight={400} fontSize={16}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BenefitCard;

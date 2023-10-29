import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider2 from "~/components/custom-mui/custom-divider/CustomDivider2";
import Image from "next/image";
import TruckImage from "@/public/images/home/image-1.png";
import Benefits from "~/app/[lang]/(main)/_components/benefits/Benefits";
import HomeGallery from "~/app/[lang]/(main)/_components/HomeGallery";
import {getDictionary} from "~/i18n";

interface Props {}

const InformationSection1: FC<Props> = () => {
  const dictionary = getDictionary();

  return (
    <Box position={"relative"}>
      <CustomDivider2
        title={dictionary("home.InformationSection1.title") || ""}
        boxProps={{ mb: 4 }}
      />

      <Typography color={"text.secondary"} fontSize={16} fontWeight={400}>
        {dictionary("home.InformationSection1.subtitle")}
      </Typography>

      <Box position={"relative"} height={400} mt={2}>
        <Image src={TruckImage.src} alt={"truck"} fill={true} />
      </Box>

      <Box mt={6} mb={24}>
        <Benefits />
      </Box>

      <Box>
        <HomeGallery />
      </Box>
    </Box>
  );
};

export default InformationSection1;

import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider2 from "~/components/custom-mui/custom-divider/CustomDivider2";
import Image from "next/image";
import TruckImage from "@/public/images/home/image-1.png";
import Benefits from "~/app/[lang]/(main)/_components/benefits/Benefits";
import HomeGallery from "~/app/[lang]/(main)/_components/HomeGallery";
import { getDictionary } from "~/i18n";
import {TLang} from "~/services/api/type";

interface InformationSection1Props {
  lang: TLang
}

const InformationSection1: FC<InformationSection1Props> = ({lang}) => {
  const dictionary = getDictionary(lang);

  return (
    <Box position={"relative"}>
      <CustomDivider2
        title={dictionary("home.InformationSection1.title") || ""}
        boxProps={{ mb: 4 }}
      />

      <Typography
        color={"text.secondary"}
        fontSize={{ xs: 14, sm: 16 }}
        fontWeight={400}
        textAlign={"justify"}
      >
        {dictionary("home.InformationSection1.subtitle")}
      </Typography>

      <Box position={"relative"} height={{xs: 230, sm: 400}} mt={2}>
        <Image src={TruckImage.src} alt={"truck"} fill={true} />
      </Box>

      <Box mt={6} mb={{xs: 20, sm: 24}}>
        <Benefits lang={lang} />
      </Box>

      <Box>
        <HomeGallery />
      </Box>
    </Box>
  );
};

export default InformationSection1;

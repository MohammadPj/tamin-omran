import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomDivider2 from "~/components/custom-mui/custom-divider/CustomDivider2";
import Image from "next/image";
import TruckImage from "@/public/images/home/image-1.png";
import Benefits from "~/app/[lang]/(main)/_components/benefits/Benefits";
import HomeGallery from "~/app/[lang]/(main)/_components/HomeGallery";

interface Props {}

const InformationSection1: FC<Props> = () => {
  return (
    <Box position={"relative"}>
      <CustomDivider2
        title={"این یک متن ساختگی است که تغییر خواهد کرد"}
        boxProps={{ mb: 4 }}
      />

      <Typography color={"text.secondary"} fontSize={16} fontWeight={400}>
        انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش
        نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته
        میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد
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

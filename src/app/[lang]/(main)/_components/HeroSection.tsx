import SvgArrowLeft from "~/components/icons/final/ArrowLeft";
import React, { FC } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HeroSectionImage from "../../../../../public/images/home/hero-image.webp";
import { getDictionary } from "~/i18n";
import { useCommon } from "~/store/common/commonSlice";
import {TLang} from "~/services/api/type";

interface HeroSectionProps {
  lang: TLang
}

const HeroSection: FC<HeroSectionProps> = ({lang}) => {
  const dictionary = getDictionary(lang);

  return (
    <Stack
      width={"100%"}
      height={{ xs: 348, sm: "auto" }}
      sx={{
        background: `linear-gradient(0deg, #00002B -5.37%, rgba(0, 0, 43, 0.00) 100%), url(${HeroSectionImage.src})`,
        backgroundSize: "auto",
        backgroundRepeat: "round",
        aspectRatio: 2,
        maxHeight: 700,
      }}
      justifyContent={"end"}
    >
      <Container>
        <Typography
          fontWeight={700}
          fontSize={{ xs: 12, sm: 20, md: 28 }}
          color={"white"}
        >
          {dictionary("home.title")}
        </Typography>

        <Box display={'flex'} flexDirection={{xs: 'column', sm: 'row'}} my={6} gap={{xs: 4, sm: 30}} alignItems={"end"}>
          <Typography
            fontSize={{ xs: 10, sm: 13, md: 16 }}
            color={"white"}
          >
            {dictionary("home.subtitle")}
          </Typography>

          <Button
            size={"large"}
            color={"secondary"}
            sx={{
              minWidth: { xs: "auto", sm: 280 },
              fontSize: { xs: 10, sm: 13, md: 20 },
              fontWeight: 700,
              display: "flex",
              gap: 2,
            }}
          >
            {dictionary("home.showProducts")}
            <Box width={{ xs: 20, sm: 32 }} height={{ xs: 20, sm: 32 }}>
              <SvgArrowLeft isRtl={lang === 'fa'} width={"auto"} height={"auto"} />
            </Box>
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;

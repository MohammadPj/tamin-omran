import SvgArrowLeft from "~/components/icons/final/ArrowLeft";
import React, { FC } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HeroSectionImage from "../../../../../public/images/home/hero-image.webp";
import { getDictionary } from "~/i18n";
import { useCommon } from "~/store/common/commonSlice";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const dictionary = getDictionary();
  const { isRtl } = useCommon();

  return (
    <Stack
      width={"100%"}
      sx={{
        background: `linear-gradient(0deg, #00002B -5.37%, rgba(0, 0, 43, 0.00) 100%), url(${HeroSectionImage.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "round",
        aspectRatio: 2,
        maxHeight: 700,
      }}
      justifyContent={"end"}
    >
      <Container>
        <Typography fontWeight={700} fontSize={{xs: 12, sm: 20, md: 28}} color={"white"}>
          {dictionary("home.title")}
        </Typography>

        <Box display={{ md: 'flex' }} my={6} gap={30}>
          <Typography fontSize={{xs: 10, sm: 13, md: 16}} color={"white"} mb={{xs: 10, md: 0}}>
            {dictionary("home.subtitle")}
          </Typography>

          <Button
            size={"large"}
            color={"secondary"}
            sx={{
              minWidth: 280,
              fontSize: {xs: 10, sm: 13, md: 20},
              fontWeight: 700,
              display: "flex",
              gap: 2,
            }}
          >
            {dictionary("home.showProducts")}
            <SvgArrowLeft isRtl={isRtl} />
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;

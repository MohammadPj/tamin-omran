import SvgArrowLeft from "~/components/icons/final/ArrowLeft";
import React, { FC } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HeroSectionImage from "../../../../../public/images/home/hero-image.webp";
import { getDictionary } from "~/i18n";
import {useCommon} from "~/store/common/commonSlice";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const translate = getDictionary();
  const {isRtl} = useCommon()

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
        <Typography fontWeight={700} fontSize={28} color={"white"}>
          {translate("home.title")}
        </Typography>

        <Box display={"flex"} my={6} gap={30}>
          <Typography fontSize={16} color={"white"}>
            {translate("home.subtitle")}
          </Typography>

          <Button
            size={"large"}
            color={"secondary"}
            sx={{
              minWidth: 280,
              fontSize: 20,
              fontWeight: 700,
              display: "flex",
              gap: 2,
            }}
          >
            {translate("home.showProducts")}
            <SvgArrowLeft isRtl={isRtl} />
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;

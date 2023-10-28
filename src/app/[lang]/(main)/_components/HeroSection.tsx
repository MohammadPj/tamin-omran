import SvgArrowLeft from "~/components/icons/final/ArrowLeft";
import React, { FC } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HeroSectionImage from "../../../../../public/images/home/hero-image.webp";

interface HeroSectionProps {
  name?: string
}

const HeroSection: FC<HeroSectionProps> = ({name}) => {
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
          در تامین عمران قطعه کیفیت را تضمین میکنیم
        </Typography>

        <Box display={"flex"} my={6} gap={30}>
          <Typography fontSize={16} color={"white"}>
            انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این
            بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته
            میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما
            بخواهید در این قسمت نوشته میشود
          </Typography>

          <Button
            size={"large"}
            color={"secondary"}
            sx={{
              minWidth: 260,
              fontSize: 20,
              fontWeight: 700,
              display: "flex",
              gap: 2,
            }}
          >
            مشاهده محصولات
            <SvgArrowLeft />
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;

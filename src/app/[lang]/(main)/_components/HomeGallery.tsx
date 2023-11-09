import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TruckImage1 from "../../../../../public/images/trucks/truck-1.webp";
import TruckImage2 from "@/public/images/trucks/truck-2.webp";
import TruckImage3 from "@/public/images/trucks/truck-3.webp";
import TruckImage4 from "@/public/images/trucks/truck-4.webp";

const HomeGallery = () => {
  const images = [TruckImage1, TruckImage2, TruckImage3, TruckImage4];

  const categories = [
    {
      image: TruckImage1,
      title: "گریدر",
      link: "",
    },
    {
      image: TruckImage2,
      title: "لودر",
      link: "",
    },
    {
      image: TruckImage3,
      title: "بولدوزر",
      link: "",
    },
    {
      image: TruckImage4,
      title: "دامپتراک",
      link: "",
    },
  ];

  return (
    <Box>
      <Box
        display={{ xs: "none", sm: "grid" }}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gridTemplateRows={"repeat(5, 1fr)"}
        gap={10}
        height={800}
      >
        <Box gridColumn={1} position={"relative"} gridRow={"1 / 3"}>
          <Image
            src={"/images/trucks/truck-4.webp"}
            alt={"truck"}
            fill={true}
          />
        </Box>

        <Box gridColumn={2} gridRow={"1 / 4"} position={"relative"}>
          <Image
            src={"/images/trucks/truck-1.webp"}
            alt={"truck"}
            fill={true}
          />
        </Box>

        <Box gridColumn={1} gridRow={"3 / 6"} position={"relative"}>
          <Image
            src={"/images/trucks/truck-2.webp"}
            alt={"truck"}
            fill={true}
          />
        </Box>

        <Box gridColumn={2} position={"relative"} gridRow={"4 / 6"}>
          <Image
            src={"/images/trucks/truck-3.webp"}
            alt={"truck"}
            fill={true}
          />
        </Box>
      </Box>

      <Stack display={{ xs: "flex", sm: "none" }} gap={3}>
        {categories.map((category, i) => (
          <Stack
            key={i}
            width={"100%"}
            height={200}
            position={"relative"}
            justifyContent={"end"}
            p={2}
            sx={{
              background: `linear-gradient(296deg, rgba(0, 0, 43, 0.80) 27.15%, rgba(0, 0, 0, 0.00) 83.75%), url(${category.image.src})`,
              backgroundSize: "auto",
              backgroundRepeat: "round",
            }}
          >
            <Typography
              fontSize={24}
              fontWeight={500}
              color={"white"}
              borderLeft={"3px solid"}
              borderColor={"secondary.main"}
              pl={2}
              mb={4}
            >
              {category.title}
            </Typography>
            <Button
              sx={{ width: 190, color: "primary.main" }}
              color={"inherit"}
            >
              مشاهده محصولات
            </Button>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default HomeGallery;

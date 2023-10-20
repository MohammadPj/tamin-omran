import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const HomeGallery = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      gridTemplateRows={"repeat(5, 1fr)"}
      gap={10}
      height={800}
    >
      <Box gridColumn={1} position={'relative'} gridRow={"1 / 3"} >
        <Image src={'/images/home/trucks/truck (4).webp'} alt={'truck'} fill={true} />
      </Box>

      <Box gridColumn={2} gridRow={"1 / 4"} position={'relative'} >
        <Image src={'/images/home/trucks/truck (1).webp'} alt={'truck'} fill={true} />
      </Box>

      <Box gridColumn={1} gridRow={"3 / 6"} position={'relative'} >
        <Image src={'/images/home/trucks/truck (2).webp'} alt={'truck'} fill={true} />
      </Box>

      <Box gridColumn={2} position={'relative'} gridRow={"4 / 6"} >
        <Image src={'/images/home/trucks/truck (3).webp'} alt={'truck'} fill={true} />
      </Box>
    </Box>
  );
};

export default HomeGallery;

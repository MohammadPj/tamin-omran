import React from "react";
import { Box } from "@mui/material";

const HomeGallery = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(2, 1fr)"}
      gridTemplateRows={"repeat(3, 1fr)"}
      gap={2}
    >
      <Box bgcolor={"red"} gridColumn={1}>a</Box>
      <Box bgcolor={"red"} gridColumn={2} gridRow={"1 / 3"}>b</Box>
      <Box bgcolor={"red"} gridColumn={1} gridRow={"2 / 4"}>c</Box>
      <Box bgcolor={"red"} gridColumn={2}>d</Box>
    </Box>
  );
};

export default HomeGallery;

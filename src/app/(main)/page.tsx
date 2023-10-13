"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/(main)/_components/HeroSection";
import NewProducts from "~/app/(main)/_components/NewProducts";
import InformationSection1 from "~/app/(main)/_components/InformationSection1";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Container>
        <Box mb={28}>
          <NewProducts />
        </Box>

        <Box>
        <InformationSection1 />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

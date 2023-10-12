"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/(main)/_components/HeroSection";
import NewProducts from "~/app/(main)/_components/NewProducts";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Container>
        <NewProducts />
      </Container>
    </Box>
  );
};

export default HomePage;

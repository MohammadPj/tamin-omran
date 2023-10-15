"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/(main)/_components/HeroSection";
import NewProducts from "~/app/(main)/_components/NewProducts";
import HomeSection2 from "~/app/(main)/_components/HomeSection2";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Container>
        <NewProducts />

        <HomeSection2 />
      </Container>
    </Box>
  );
};

export default HomePage;

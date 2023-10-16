"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/(main)/_components/HeroSection";
import NewProducts from "~/app/(main)/_components/NewProducts";
import HomeSection2 from "~/app/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/(main)/_components/ArticlesSectionHome";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Container>
        <Box mb={30}>
          <NewProducts />
        </Box>

        <Box mb={40}>
          <HomeSection2 />
        </Box>

        <Box>
          <ArticlesSectionHome />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

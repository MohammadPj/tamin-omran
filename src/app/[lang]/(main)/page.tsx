"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/[lang]/(main)/_components/HeroSection";
import NewProducts from "~/app/[lang]/(main)/_components/NewProducts";
import HomeSection2 from "~/app/[lang]/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/[lang]/(main)/_components/ArticlesSectionHome";
import InformationSection1 from "~/app/[lang]/(main)/_components/InformationSection1";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />

      <Container>
        <Box mb={{xs: 10, sm: 28}}>
          <NewProducts />
        </Box>

        <Box mb={{xs: 20, sm: 30}}>
          <InformationSection1 />
        </Box>

        <Box mb={{xs: 16, sm: 40}}>
          <HomeSection2 />
        </Box>

        <Box mb={{xs: 16, sm: 40}}>
          <ArticlesSectionHome />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

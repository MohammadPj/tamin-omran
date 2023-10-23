import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/[lang]/[country]/(main)/_components/HeroSection";
import NewProducts from "~/app/[lang]/[country]/(main)/_components/NewProducts";
import HomeSection2 from "~/app/[lang]/[country]/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/[lang]/[country]/(main)/_components/ArticlesSectionHome";
import InformationSection1 from "~/app/[lang]/[country]/(main)/_components/InformationSection1";
import { NextPage } from "next";

interface HomePageProps {
  params: { lang: string; country: string };
}

const HomePage: NextPage<HomePageProps> = ({
  params,
}) => {

  return (
    <Box>
      country:{params.country}
      lang:{params.lang}
      <HeroSection />

      <Container>
        <Box mb={28}>
          <NewProducts />
        </Box>

        <Box mb={30}>
          <InformationSection1 />
        </Box>

        <Box mb={40}>
          <HomeSection2 />
        </Box>

        <Box mb={40}>
          <ArticlesSectionHome />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

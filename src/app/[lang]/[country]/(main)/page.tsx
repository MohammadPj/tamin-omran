import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/[lang]/[country]/(main)/_components/HeroSection";
import NewProducts from "~/app/[lang]/[country]/(main)/_components/NewProducts";
import HomeSection2 from "~/app/[lang]/[country]/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/[lang]/[country]/(main)/_components/ArticlesSectionHome";
import InformationSection1 from "~/app/[lang]/[country]/(main)/_components/InformationSection1";
import { ValidLocale, getTranslator } from "~/i18n";

interface HomePageProps {
  params: { lang: string; country: string };
}

const HomePage = async ({ params }: HomePageProps) => {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale
  );

  return (
    <Box>
      <h1>{translate("welcome.helloWorld")}</h1>
      <h2>
        {translate("welcome.happyYear", {
          year: new Date().getFullYear(),
        })}
      </h2>
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

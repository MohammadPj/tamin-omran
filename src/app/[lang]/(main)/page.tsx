import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/[lang]/(main)/_components/HeroSection";
import NewProducts from "~/app/[lang]/(main)/_components/NewProducts";
import HomeSection2 from "~/app/[lang]/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/[lang]/(main)/_components/ArticlesSectionHome";
import InformationSection1 from "~/app/[lang]/(main)/_components/InformationSection1";
import { TLang } from "~/services/api/type";
import { IProduct } from "~/types/product";
import { baseURL } from "~/services/core/http";
import queryString from "querystring";
import axios from "axios";
import { IArticle } from "~/types/article";

interface HomePageProps {
  params: {
    lang: TLang
  }
}

async function getData(props: { lang: TLang }) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}article`);
  const query = {
    lang: props.lang,
    limit: 3
  };
  const normalizeQuery = queryString.stringify(query);

  const response = await axios.get(`${url}?${normalizeQuery}`);

  return await response.data;
}

async function getProducts(props: { lang: TLang }) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}product`);
  const query = {
    lang: props.lang,
    limit: 5
  };
  const normalizeQuery = queryString.stringify(query);

  const response = await axios.get(`${url}?${normalizeQuery}`);

  return await response.data;
}

const HomePage = async (props: HomePageProps) => {

  let articles: IArticle[] = []
  let products: IProduct[] = []

  try {
    articles = await getData({ lang: props.params.lang });
    products = await getProducts({ lang: props.params.lang });
  } catch (e) {

  }

  return (
    <Box>
      <HeroSection lang={props.params.lang} />

      <Container>
        <Box mb={{ xs: 10, sm: 28 }}>
          <NewProducts lang={props.params.lang} products={products} />
        </Box>

        <Box mb={{ xs: 20, sm: 30 }}>
          <InformationSection1 />
        </Box>

        <Box mb={{ xs: 16, sm: 40 }}>
          <HomeSection2 />
        </Box>

        <Box mb={{ xs: 16, sm: 40 }}>
          <ArticlesSectionHome articles={articles} lang={props.params.lang} />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

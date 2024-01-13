import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "~/app/[lang]/(main)/_components/HeroSection";
import NewProducts from "~/app/[lang]/(main)/_components/NewProducts";
import HomeSection2 from "~/app/[lang]/(main)/_components/HomeSection2";
import ArticlesSectionHome from "~/app/[lang]/(main)/_components/ArticlesSectionHome";
import InformationSection1 from "~/app/[lang]/(main)/_components/InformationSection1";
import { TLang } from "~/services/api/type";
import { IProduct } from "~/types/product";
import { http } from "~/services/core/http";
import queryString from "querystring";
import { IArticle } from "~/types/article";
import { IMeta } from "~/app/[lang]/(main)/articles/page";

interface HomePageProps {
  params: {
    lang: TLang;
  };
}

async function getData(props: {
  lang: TLang;
}): Promise<{ data: IArticle[]; meta: IMeta }> {

  const query = {
    lang: props.lang,
    limit: 3,
  };
  const normalizeQuery = queryString.stringify(query);

  return await http.get(`article?${normalizeQuery}`);
}

async function getProducts(): Promise<{ data: IProduct[]; meta: IMeta }> {

  const query = {
    limit: 5,
  };

  const normalizeQuery = queryString.stringify(query);

  return await http.get(`product?${normalizeQuery}`);
}

const HomePage = async (props: HomePageProps) => {
  let articles = undefined;
  let products = undefined;

  try {
    articles = await getData({ lang: props.params.lang });
    products = await getProducts();
  } catch (e: any) {
    console.log("error", e);
  }

  return (
    <Box>
      <HeroSection lang={props.params.lang} />

      <Container>
        <Box mb={{ xs: 10, sm: 28 }}>
          <NewProducts lang={props.params.lang} products={products?.data} />
        </Box>

        <Box mb={{ xs: 20, sm: 30 }}>
          <InformationSection1 lang={props.params.lang} />
        </Box>

        <Box mb={{ xs: 16, sm: 40 }}>
          <HomeSection2 lang={props.params.lang} />
        </Box>

        <Box mb={{ xs: 16, sm: 40 }}>
          <ArticlesSectionHome
            articles={articles?.data}
            lang={props.params.lang}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;

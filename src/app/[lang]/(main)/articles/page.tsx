import React from "react";
import {Box, Container} from "@mui/material";
import TruckImage from "../../../../../public/images/trucks/truck-5.webp";
import LastArticlesList from "~/app/[lang]/(main)/articles/_components/LastArticlesList";
import ArticlesList from "~/app/[lang]/(main)/articles/_components/ArticlesList";
import SvgLogo from "~/components/icons/final/Logo";
import {Metadata} from "next";
import {baseURL, http} from "~/services/core/http";
import queryString from "querystring";
import {TLang} from "~/services/api/type";
import {IArticle} from "~/types/article";
import {clearObject} from "~/helpers/methods";

export const metadata: Metadata = {
  title: "مقالات",
};

async function getLatestArticles({ lang }: { lang: TLang }): Promise<any> {

  const query = {
    lang,
    limit: 3,
  };
  const normalizeQuery = queryString.stringify(query);

  return await http.get(`/article?${normalizeQuery}`);
}

async function getArticles({ lang, page }: { lang: TLang; page: number }): Promise<any> {
  // Call the fetch method and passing
  // the pokeAPI link

  const query = clearObject({
    lang,
    page,
    limit: 10,
  })

  const normalizeQuery = queryString.stringify(query);

  return await http.get(`/article?${normalizeQuery}`);
}

export interface IMeta {
  count: number;
  page: number;
  limit: number;
  totalPages: number;
}

const ArticlesPage = async (props: any) => {
  let latestArticles: { data: IArticle[]; meta: IMeta } | undefined = undefined;

  let articles: { data: IArticle[]; meta: IMeta } | undefined = undefined;

  try {
    latestArticles = await getLatestArticles({ lang: props?.params?.lang });
    articles = await getArticles({
      lang: props?.params?.lang,
      page: props.searchParams.page,
    });

    console.log('articles', articles)
  } catch (e) {
    console.log('error', e)
  }

  return (
    <Container
      sx={{
        mt: 7,
        mb: 20,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LastArticlesList
        lang={props?.params?.lang}
        articles={latestArticles?.data}
      />

      <Box
        mb={20}
        position={"relative"}
        sx={{
          aspectRatio: 1300 / 400,
          background: `linear-gradient(0deg, rgba(0, 0, 43, 0.5) -5.37%, rgba(0, 0, 43, 0.5) 100%), url(${TruckImage.src})`,
        }}
      >
        <Box
          position={"absolute"}
          bottom={0}
          right={"50%"}
          sx={{ transform: "translateX(50%)" }}
        >
          <SvgLogo color1={"grey"} color3={"grey"} />
        </Box>
      </Box>

      <ArticlesList
        lang={props?.params?.lang}
        articles={articles?.data}
        totalPages={articles?.meta?.totalPages!}
      />
    </Container>
  );
};

export default ArticlesPage;

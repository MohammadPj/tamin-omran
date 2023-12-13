import React from "react";
import {Box, Container, Typography} from "@mui/material";
import { baseURL } from "~/services/core/http";
import queryString from "querystring";
import axios from "axios";
import Image from "next/image";
import parse from "html-react-parser";
import {IArticle} from "~/types/article";

async function getArticle(props: { articleId: string }) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}article/${props.articleId}`);
  const query = {};
  const normalizeQuery = queryString.stringify(query);

  const response = await axios.get(`${url}?${normalizeQuery}`);

  return await response.data;
}

const ArticlePage = async ({ params }: { params: { articleId: string } }) => {
  console.log("params", params);

  const article: IArticle = await getArticle({ articleId: params.articleId });

  console.log("article", article);

  return (
    <Container sx={{ mt: 7, mb: 20 }}>
      <Box position={"relative"} height={400}>
        <Image src={article?.image} alt={"article-image"} fill />
      </Box>

      <Typography mb={4} mt={8} fontWeight={700} fontSize={20} color={'text.primary'}>
        {article.title}
      </Typography>

      <Typography lineHeight={2} >
        {parse(article.content)}
      </Typography>
    </Container>
  );
};

export default ArticlePage;

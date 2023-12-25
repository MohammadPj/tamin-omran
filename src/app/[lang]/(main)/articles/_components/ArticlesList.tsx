"use client";
import React, { FC } from "react";
import { Divider, Stack } from "@mui/material";
import { IArticle } from "~/types/article";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ArticleCard from "~/components/common/article-card/ArticleCard";
import { getDictionary, TLanguages } from "~/i18n";
import CustomPagination from "~/components/common/custom-pagination/CustomPagination";

interface Props {
  lang: TLanguages;
  articles?: IArticle[];
  totalPages: number;
}

const ArticlesList: FC<Props> = ({ lang, articles, totalPages }) => {
  const dictionary = getDictionary(lang);

  return (
    <Stack flexGrow={1}>
      <CustomDivider title={dictionary("common.articlesAndNews")} mb={6} />

      <Stack gap={5} mb={12} flexGrow={1}>
        {articles?.map((article, i) => (
          <>
            <ArticleCard key={article._id} article={article} />
            {i !== articles.length - 1 && <Divider />}
          </>
        ))}
      </Stack>

      <CustomPagination count={totalPages} />

    </Stack>
  );
};

export default ArticlesList;

"use client";
import React, { FC } from "react";
import { Divider, Pagination, Stack } from "@mui/material";
import { IArticle } from "~/types/article";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ArticleCard from "~/components/common/article-card/ArticleCard";
import { getDictionary, TLanguages } from "~/i18n";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import queryString from "querystring";

interface Props {
  lang: TLanguages;
  articles: IArticle[];
}

const ArticlesList: FC<Props> = ({ lang, articles }) => {
  const dictionary = getDictionary(lang);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const handleChangePage = (e: any, page: any) => {

    const queries = queryString.stringify({
      ...queryString.parse(searchParams.toString()),
      page: page,
    });

    router.push(pathname + "?" + queries)
  };

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

      <Pagination
        count={10}
        variant={"outlined"}
        shape={"rounded"}
        onChange={handleChangePage}
      />
    </Stack>
  );
};

export default ArticlesList;

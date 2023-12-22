"use client";
import React, { FC } from "react";
import { Divider, Pagination, Stack } from "@mui/material";
import { IArticle } from "~/types/article";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ArticleCard from "~/components/common/article-card/ArticleCard";
import { getDictionary, TLanguages } from "~/i18n";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "querystring";
import {useQueryObject} from "~/utils/methods";

interface Props {
  lang: TLanguages;
  articles?: IArticle[];
  totalPages: number;
}

const ArticlesList: FC<Props> = ({ lang, articles, totalPages }) => {
  console.log('pageCount', totalPages)
  const dictionary = getDictionary(lang);
  const router = useRouter();
  const pathname = usePathname();

  const {query} = useQueryObject()

  const handleChangePage = (e: any, page: any) => {
    const newQuery = queryString.stringify({
      ...query,
      page: page,
    });

    router.push((pathname + "?" + newQuery) as any);
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
        page={Number(query?.page) || 1}
        count={totalPages}
        variant={"outlined"}
        shape={"rounded"}
        onChange={handleChangePage}
      />
    </Stack>
  );
};

export default ArticlesList;

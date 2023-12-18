import React, { FC } from "react";
import {Box, Divider, Stack, Typography} from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import { IArticle } from "~/types/article";
import ArticleCard from "~/components/common/article-card/ArticleCard";
import {getDictionary} from "~/i18n";
import CustomLink from "~/components/common/custom-link/CustomLink";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import {TLang} from "~/services/api/type";

interface ArticlesSectionHomeProps {
  articles?: IArticle[]
  lang: TLang
}

const ArticlesSectionHome: FC<ArticlesSectionHomeProps> = ({articles, lang}) => {

  const dictionary = getDictionary(lang)

  return (
    <Box>
      <CustomDivider mb={5} title={dictionary("common.articlesAndNews")} showMoreHref={'/articles'} />

      <Stack gap={4}>
        {articles?.map((article, i) => (
          <React.Fragment key={article._id}>
            <ArticleCard article={article} />
            {i < articles.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>

      <Box
        display={{xs: 'flex', sm: "none"}}
        justifyContent={'end'}
        gap={2}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <CustomLink href={"/articles"}>
          <Typography color={"primary"} fontSize={14} fontWeight={700}>
            {dictionary("common.showMore")}
          </Typography>
        </CustomLink>
        <SvgArrowCircleLeft width={24} isRtl={lang === 'fa'} />
      </Box>
    </Box>
  );
};

export default ArticlesSectionHome;

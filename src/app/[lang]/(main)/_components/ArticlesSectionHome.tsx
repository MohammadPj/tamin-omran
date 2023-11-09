import React, { FC } from "react";
import {Box, Divider, Stack, Typography} from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import { IArticle } from "~/types/article";
import ArticleCard from "~/components/common/article-card/ArticleCard";
import {getDictionary} from "~/i18n";
import CustomLink from "~/components/common/custom-link/CustomLink";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import {useCommon} from "~/store/common/commonSlice";

const ArticlesSectionHome: FC = () => {

  const {isRtl} = useCommon()
  const dictionary = getDictionary()
  const articles: IArticle[] = [
    {
      id: "1",
      image: "/images/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
    {
      id: "1",
      image: "/images/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
    {
      id: "1",
      image: "/images/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
  ];


  return (
    <Box>
      <CustomDivider mb={5} title={dictionary("common.articlesAndNews")} showMoreHref={'/articles'} />

      <Stack gap={4}>
        {articles.map((article, i) => (
          <React.Fragment key={article.id}>
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
        <SvgArrowCircleLeft width={24} isRtl={isRtl} />
      </Box>
    </Box>
  );
};

export default ArticlesSectionHome;

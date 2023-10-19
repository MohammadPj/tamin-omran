import React, { FC } from "react";
import { Box, Divider, Stack } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import { IArticle } from "~/types/article";
import ArticleCard from "~/components/common/article-card/ArticleCard";

const ArticlesSectionHome: FC = () => {
  const articles: IArticle[] = [
    {
      id: "1",
      image: "/images/home/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
    {
      id: "1",
      image: "/images/home/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
    {
      id: "1",
      image: "/images/home/articles/article (2).png",
      title: "آقایان با هم دست دادند",
      description:
        "انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ",
      lastUpdate: new Date(),
    },
  ];

  return (
    <Box>
      <CustomDivider mb={5} title={"اخبار و مقالات"} showMoreHref={'/articles'} />

      <Stack gap={4}>
        {articles.map((article, i) => (
          <React.Fragment key={article.id}>
            <ArticleCard article={article} />
            {i < articles.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default ArticlesSectionHome;

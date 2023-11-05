'use client'
import React, { FC } from 'react'
import ArticleCard from '~/components/common/article-card/ArticleCard'
import { Box, Divider, Stack } from '@mui/material'
import { IArticle } from '~/types/article'
import CustomDivider from '~/components/custom-mui/custom-divider/CustomDivider'

const LastArticlesList: FC = () => {
  const lastArticles: IArticle[] = [
    {
      title: 'آقایان با هم دست دادند',
      id: '1',
      lastUpdate: new Date(),
      description:
        'انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ',
      image: '/images/articles/article (2).png',
    },
    {
      title: 'هاشمی به نمایشگاه لودر رفت',
      id: '2',
      lastUpdate: new Date(),
      description:
        'انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ',
      image: '/images/articles/article (1).png',
    },
    {
      title: 'توقیف یک دامپتراک به علت بی حجابی',
      id: '3',
      lastUpdate: new Date(),
      description:
        'انواع قطعات ماشین آلات و نوشته هایی که شما مد نظر دارید تا در این بخش نوشته شود نوشته خواهد شد وموضوعات این چنینی که در حال حاضر نوشته میشودمثل یک لورم ایپسوم از پیش تعیین شده میباشد و هرچیزی که شما بخواهید در این قسمت نوشته میشود این متم تا انحایی مه باید ادامه میکند تا یه حد حساب شده داشته باشد از انجایی که این قسمت دچار تغییراتی میشود نوشته ان هم به صورت تغییر یافته اعمال میشود ',
      image: '/images/articles/article (3).png',
    },
  ]

  return (
    <Box>
      <CustomDivider title={'جدیدترین مقالات'} mb={6} />

      <Stack gap={5} mb={12}>
        {lastArticles?.map((article, i) => (
          <>
            <ArticleCard key={article.id} article={article} />
            {i !== lastArticles.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </Box>
  )
}

export default LastArticlesList

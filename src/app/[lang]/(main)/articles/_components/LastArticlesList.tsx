import React, { FC } from 'react'
import ArticleCard from '~/components/common/article-card/ArticleCard'
import { Box, Divider, Stack } from '@mui/material'
import { IArticle } from '~/types/article'
import CustomDivider from '~/components/custom-mui/custom-divider/CustomDivider'
import {getDictionary, TLanguages} from "~/i18n";

interface Props {
  lang: TLanguages
  articles?: IArticle[]
}

const LastArticlesList: FC<Props> = ({lang, articles}) => {
  const dictionary = getDictionary(lang)


  return (
    <Box>
      <CustomDivider title={dictionary("common.newestArticles")} mb={6} />

      <Stack gap={5} mb={12}>
        {articles?.map((article, i) => (
          <>
            <ArticleCard key={article._id} article={article} />
            {i !== articles.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </Box>
  )
}

export default LastArticlesList

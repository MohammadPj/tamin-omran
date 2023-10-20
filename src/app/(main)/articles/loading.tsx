import React from 'react'
import { Container, Skeleton, Stack } from '@mui/material'
import ArticleSkeleton from '~/components/common/article-card/ArticleSkeleton'

const ArticlesLoadingPage = () => {
  return (
    <Container sx={{mt: 7, mb: 20 }}>
      <Skeleton sx={{mb: 4}} />

      <Stack gap={5} width={'100%'} mb={10}>
        {Array.from({ length: 3 }, (x, i) => i).map((i) => (
          <ArticleSkeleton key={i} />
        ))}
      </Stack>

      <Skeleton variant={'rectangular'} width={'100%'} height={400} />
    </Container>
  )
}

export default ArticlesLoadingPage

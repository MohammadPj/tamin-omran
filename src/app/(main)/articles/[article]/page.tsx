import React from 'react'
import { Container } from '@mui/material'

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export const revalidate = 10

const ArticlePage = ({ params }: { params: { article: string } }) => {
  console.log('articleId', params.article)

  return (
    <Container sx={{ mt: 7, mb: 20 }}>
      single article page
    </Container>
  )
}

export default ArticlePage

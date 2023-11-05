import React from 'react'
import { Box, Container } from '@mui/material'
import TruckImage from '../../../../../public/images/trucks/truck-5.webp'
import LastArticlesList from "~/app/[lang]/(main)/articles/_components/LastArticlesList";
import ArticlesList from "~/app/[lang]/(main)/articles/_components/ArticlesList";
import SvgLogo from "~/components/icons/final/Logo";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'مقالات',
}

const ArticlesPage = ({params}: any) => {

  return (
    <Container sx={{ mt: 7, mb: 20, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

      <LastArticlesList lang={params.lang} />

      <Box
        mb={20}
        position={'relative'}
        sx={{
          aspectRatio: 1300 / 400,
          background: `linear-gradient(0deg, rgba(0, 0, 43, 0.5) -5.37%, rgba(0, 0, 43, 0.5) 100%), url(${TruckImage.src})`,
        }}
      >
        <Box position={'absolute'} bottom={0} right={'50%'} sx={{transform: 'translateX(50%)'}}>
          <SvgLogo color1={'grey'} color3={'grey'} />
        </Box>
      </Box>

      <ArticlesList lang={params.lang} />
    </Container>
  )
}

export default ArticlesPage

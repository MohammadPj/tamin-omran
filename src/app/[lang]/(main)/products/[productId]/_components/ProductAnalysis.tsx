import React, {FC} from 'react'
import { Box, Typography } from '@mui/material'
import CustomDivider from '~/components/custom-mui/custom-divider/CustomDivider'
import parse from 'html-react-parser';
import {getDictionary} from "~/i18n";
import {TLang} from "~/services/api/type";

interface ProductAnalysisProps {
  review: string
  lang: TLang
}

const ProductAnalysis: FC<ProductAnalysisProps> = ({review, lang}) => {
  const dictionary = getDictionary(lang)

  return (
    <Box>
      <CustomDivider title={dictionary('common.review')} mb={6} />

      <Typography
        lineHeight={'32px'}
        color={'text.secondary'}
        textAlign={'justify'}
      >
        {parse(review)}
      </Typography>
    </Box>
  )
}

export default ProductAnalysis

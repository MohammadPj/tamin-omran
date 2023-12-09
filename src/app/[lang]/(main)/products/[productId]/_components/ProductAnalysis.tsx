import React, {FC} from 'react'
import { Box, Typography } from '@mui/material'
import CustomDivider from '~/components/custom-mui/custom-divider/CustomDivider'
import parse from 'html-react-parser';

interface ProductAnalysisProps {
  review: string
}

const ProductAnalysis: FC<ProductAnalysisProps> = ({review}) => {
  return (
    <Box>
      <CustomDivider title={'نقد و بررسی'} mb={6} />

      <Typography
        fontWeight={400}
        fontSize={14}
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

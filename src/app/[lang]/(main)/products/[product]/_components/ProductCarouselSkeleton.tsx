import React, { FC } from 'react'
import { Box, Skeleton, Stack } from '@mui/material'

interface ProductCarouselSkeletonProps {}

const ProductCarouselSkeleton: FC<ProductCarouselSkeletonProps> = () => {
  return (
    <Stack gap={2} height={'100%'}>
      <Skeleton
        variant={'rectangular'}
        width={'100%'}
        height={'100%'}
        sx={{ aspectRatio: 1 }}
      />

      <Box>
        <Box display={'flex'} gap={2} height={'auto'}>
          {Array.from({ length: 4 }, (v, i) => i).map((i) => (
            <Skeleton
              key={i}
              variant={'rectangular'}
              height={'100%'}
              width={'100%'}
              sx={{ aspectRatio: 1 }}
            />
          ))}
        </Box>
      </Box>
    </Stack>
  )
}

export default ProductCarouselSkeleton

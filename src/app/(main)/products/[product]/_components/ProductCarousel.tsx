'use client'
import React, { FC, useEffect, useState } from 'react'
import {Box, Skeleton, Stack} from '@mui/material'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ProductCarouselProps {
  images?: string[] | undefined
}

const ProductCarousel: FC<ProductCarouselProps> = ({images}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState<string>(images?.[0] || '')

  useEffect(() => {
    setIsLoading(false)
  }, [])


  const handleChangeThumb = (index: number) => {
    setImage(images?.[index]!)
  }

  return (
    <Stack gap={2} height={'100%'}>
      {isLoading ? (
        <Skeleton variant={'rectangular'} width={'100%'} height={'100%'} sx={{aspectRatio: 1}} />
      ) : (
        <Box position={'relative'} width={'100%'} height={'100%'} sx={{aspectRatio: 1}}>
          <Image
            src={image}
            alt={'product'}
            fill
          />
        </Box>

      )}

      <Box>
        {isLoading ? (
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
        ) : (
          <Swiper className="mySwiper" slidesPerView={4} spaceBetween={8}>
            {images?.map((image, i) => (
              <SwiperSlide key={i} style={{display: 'flex', cursor: 'pointer'}} onClick={() => handleChangeThumb(i)}>
                <Image
                  src={image}
                  width={110}
                  height={110}
                  layout={'responsive'}
                  alt={'product'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Stack>
  )
}

export default ProductCarousel

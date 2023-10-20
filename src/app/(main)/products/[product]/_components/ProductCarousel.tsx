'use client'
import React, { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCarouselSkeleton from '~/app/(main)/products/[product]/_components/ProductCarouselSkeleton'

interface ProductCarouselProps {
  images?: string[] | undefined
}

const ProductCarousel: FC<ProductCarouselProps> = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState<string>(images?.[0] || '')

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handleChangeThumb = (index: number) => {
    setImage(images?.[index]!)
  }

  if (isLoading) return <ProductCarouselSkeleton />
  else
    return (
      <Stack gap={2} height={'100%'}>
        <Box
          position={'relative'}
          width={'100%'}
          height={'100%'}
          sx={{ aspectRatio: 1 }}
        >
          <Image src={image} alt={'product'} fill />
        </Box>

        <Box>
          <Swiper className="mySwiper" slidesPerView={4} spaceBetween={8}>
            {images?.map((image, i) => (
              <SwiperSlide
                key={i}
                style={{ display: 'flex', cursor: 'pointer' }}
                onClick={() => handleChangeThumb(i)}
              >
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
        </Box>
      </Stack>
    )
}

export default ProductCarousel

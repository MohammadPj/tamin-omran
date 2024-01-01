"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ProductCarouselSkeleton from "~/app/[lang]/(main)/products/[productId]/_components/ProductCarouselSkeleton";

interface ProductCarouselProps {
  images?: string[] | undefined;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainSwiper, setMainSwiper] = useState<any>();

  console.log('images', images)
  let swiperImages =
    (images && images.length > 0)
      ? images
      : ["/images/default/product-default.png"];

  console.log('swiperImages', swiperImages)

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleChangeThumb = (index: number) => {
    mainSwiper.slideTo(index);
  };

  if (isLoading) return <ProductCarouselSkeleton />;
  else
    return (
      <Stack gap={2} height={"100%"}>
        <Box
          position={"relative"}
          width={"100%"}
          height={"100%"}
          sx={{ aspectRatio: 1 }}
        >
          <Swiper
            style={{ height: "100%" }}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={8}
            onBeforeInit={(swipper: any) => setMainSwiper(swipper)}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {swiperImages?.map((image, i) => (
              <SwiperSlide
                key={i}
                style={{ display: "flex", cursor: "pointer" }}
              >
                <Image
                  src={image}
                  width={110}
                  height={110}
                  layout={"responsive"}
                  alt={"product"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box display={{ xs: "none", sm: "block" }}>
          <Swiper
            className="mySwiper"
            slidesPerView={4}
            spaceBetween={8}
            style={{ height: 100 }}
          >
            {swiperImages?.map((image, i) => (
              <SwiperSlide
                key={i}
                style={{ display: "flex", cursor: "pointer" }}
                onClick={() => handleChangeThumb(i)}
              >
                <Image
                  src={image}
                  onError={() => "/images/default/product-default.png"}
                  width={110}
                  height={110}
                  layout={"responsive"}
                  alt={"product"}
                  loading={"lazy"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    );
};

export default ProductCarousel;

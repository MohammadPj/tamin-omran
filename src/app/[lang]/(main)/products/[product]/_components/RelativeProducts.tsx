"use client";
import React, { FC, useEffect, useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "~/components/common/product-card/ProductCard";
import Link from "next/link";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";

interface RelativeProductsProps {}

const RelativeProducts: FC<RelativeProductsProps> = () => {
  const relativeProducts = [
    {
      id: 1,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (1).jpg",
    },
    {
      id: 2,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (2).jpg",
    },
    {
      id: 3,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (3).jpg",
    },
    {
      id: 4,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (4).jpg",
    },
    {
      id: 5,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (5).jpg",
    },
    {
      id: 4,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (4).jpg",
    },
    {
      id: 5,
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (5).jpg",
    },
  ];

  const [swiper, setSwiper] = useState<any>();
  const [swiperProgress, setSwiperProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleSlideNext = () => {
    swiper?.slideNext();
  };
  const handleSlidePrev = () => {
    swiper?.slidePrev();
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleChange = (e: any) => {
    setSwiperProgress(e.progress);
  };

  return (
    <Box mb={20}>
      <CustomDivider title={"محصولات مشابه"} mb={7} />

      {isLoading ? (
        <Box
          display={"flex"}
          gap={4}
          flexWrap={"nowrap"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {Array.from({ length: 5 }, (x, i) => i).map((i) => (
            <Skeleton
              key={i}
              variant={"rectangular"}
              height={300}
              width={240}
              sx={{ minWidth: 240 }}
            />
          ))}
        </Box>
      ) : (
        <Box>
          <Box position={"relative"} display={{ xs: "none", sm: "block" }}>
            <Swiper
              onSlideChange={handleChange}
              onBeforeInit={(swipper: any) => setSwiper(swipper)}
              className="mySwiper"
              slidesPerView={5}
              spaceBetween={8}
            >
              {relativeProducts?.map((product, i) => (
                <SwiperSlide
                  key={i}
                  style={{ display: "flex", cursor: "pointer" }}
                >
                  <Link
                    href={`/products/${product.id}` as any}
                    style={{ width: "100%" }}
                  >
                    <ProductCard
                      title={product.title}
                      subtitle={product.subtitle}
                      image={product.image}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <SvgArrowCircleLeft
              onClick={handleSlidePrev}
              primarycolor={swiperProgress === 0 ? "grey" : "#262262"}
              width={48}
              height={48}
              style={{
                position: "absolute",
                top: "50%",
                right: "-20px",
                transform: "scaleX(-1) translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
              }}
            />

            <SvgArrowCircleLeft
              onClick={handleSlideNext}
              primarycolor={swiperProgress === 1 ? "grey" : "#262262"}
              width={48}
              height={48}
              style={{
                position: "absolute",
                top: "50%",
                left: "-20px",
                transform: "translateY(-50%)",
                zIndex: 10,
                cursor: "pointer",
              }}
            />
          </Box>

          <Stack display={{ xs: "flex", sm: "none" }} gap={4}>
            {relativeProducts?.map((product, i) => (
              <Link
                key={i}
                href={`/products/${product.id}` as any}
                style={{ width: "100%" }}
              >
                <ProductCard
                  title={product.title}
                  subtitle={product.subtitle}
                  image={product.image}
                />
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default RelativeProducts;

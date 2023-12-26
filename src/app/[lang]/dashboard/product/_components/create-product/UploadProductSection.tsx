"use client";
import React, { FC, useEffect, useState } from "react";
import UploadProduct from "~/components/common/uploader/UploadProduct";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Stack } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface UploadProductSectionProps {
  onChangeMainImage: (files: FileList) => void;
  onChangeImages: (files: FileList) => void;
  mainImage?: string;
  images?: string[];
}

const UploadProductSection: FC<UploadProductSectionProps> = ({
  onChangeMainImage,
  onChangeImages,
  mainImage,
  images,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainSwiper, setMainSwiper] = useState<any>();

  const handleChangeThumb = (index: number) => {
    mainSwiper.slideTo(index);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Stack height={"100%"}>
      {mainImage ? (
        <Box position={"relative"} width={"100%"} flexGrow={1}>
          <Image fill src={mainImage} alt={"main-product-image"} />
        </Box>
      ) : (
        <UploadProduct
          id={"mainImageUploader"}
          title={"برای بارگذاری عکس محصول کلیک کنید"}
          handleImageUpload={onChangeMainImage}
          multiple={false}
        />
      )}

      <Box mt={2}>
        {!isLoading && (
          <Swiper
            className="mySwiper"
            slidesPerView={3.5}
            spaceBetween={8}
            onBeforeInit={(swipper: any) => setMainSwiper(swipper)}
            style={{height: '100%'}}
          >
            <SwiperSlide style={{ display: "flex", cursor: "pointer" }}>
              <Box width={130}>
                <UploadProduct
                  id={"imagesUploader"}
                  handleImageUpload={onChangeImages}
                />
              </Box>
            </SwiperSlide>

            {images?.map((image, i) => (
              <SwiperSlide
                key={i}
                style={{ display: "flex", cursor: "pointer" }}
                onClick={() => handleChangeThumb(i)}
              >
                <Box height={'100%'} width={'100%'} position={'relative'}>
                  <Image
                    src={image}
                    fill
                    alt={"product"}
                  />
                </Box>

              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>

    </Stack>
  );
};

export default UploadProductSection;

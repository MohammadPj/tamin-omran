import React, { FC } from "react";
import {Box, Grid, Typography} from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ProductCard from "~/components/common/product-card/ProductCard";
import {getDictionary} from "~/i18n";
import CustomLink from "~/components/common/custom-link/CustomLink";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import {useCommon} from "~/store/common/commonSlice";

const NewProducts: FC = () => {

  const dictionary = getDictionary();
  const {isRtl} = useCommon()

  const products = [
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (1).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (2).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (3).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (4).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/products/product (5).jpg",
    },
  ];

  return (
    <Box mt={11}>
      <CustomDivider title={dictionary("home.newProducts") as string} showMoreHref={"/products"} />

      <Grid container spacing={4} mt={6} mb={{xs: 2, sm: 0}}>
        {products.map((product, i) => (
          <Grid key={i} item xs={12} sm={2.4}>
          <ProductCard
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
          />
          </Grid>
        ))}
      </Grid>

      <Box
        display={{xs: 'flex', sm: "none"}}
        justifyContent={'end'}
        gap={2}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <CustomLink href={"/products"}>
          <Typography color={"primary"} fontSize={14} fontWeight={700}>
            {dictionary("common.showMore")}
          </Typography>
        </CustomLink>
        <SvgArrowCircleLeft width={24} isRtl={isRtl} />
      </Box>
    </Box>
  );
};

export default NewProducts;

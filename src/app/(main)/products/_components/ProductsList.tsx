import React, {FC} from 'react';
import ProductCard from "~/components/common/product-card/ProductCard";
import {Box, Grid} from "@mui/material";

const ProductsList: FC = () => {
  const products = [
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/home/products/product (1).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/home/products/product (2).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/home/products/product (3).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/home/products/product (4).jpg",
    },
    {
      title: "این نام محصول است",
      subtitle: "این برند است",
      image: "/images/home/products/product (5).jpg",
    },
  ];

  const productList = [...products, ...products, ...products]

  return (
    <Grid container spacing={4}>
      {productList.map((product, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
        <ProductCard
          key={i}
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
        />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;

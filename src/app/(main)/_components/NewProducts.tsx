import React, { FC } from "react";
import { Box } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ProductCard from "~/components/common/product-card/ProductCard";

const NewProducts: FC = () => {

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

  return (
    <Box mt={11}>
      <CustomDivider title={"محصولات جدید"} showMoreHref={"/products"} />

      <Box display={"flex"} gap={4} mt={6}>
        {products.map((product, i) => (
          <ProductCard
            key={i}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NewProducts;

import React, { FC } from "react";
import { Box } from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ProductCard from "~/components/common/product-card/ProductCard";
import {getDictionary} from "~/i18n";

const NewProducts: FC = () => {

  const dictionary = getDictionary();

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

import React from "react";
import {Box, Container, Grid} from "@mui/material";
import ProductCarousel from "~/app/[lang]/(main)/products/[productId]/_components/ProductCarousel";
import ProductInfo from "~/app/[lang]/(main)/products/[productId]/_components/ProductInfo";
import {IProduct} from "~/types/product";
import ProductAnalysis from "~/app/[lang]/(main)/products/[productId]/_components/ProductAnalysis";
import RelativeProducts from "~/app/[lang]/(main)/products/[productId]/_components/RelativeProducts";
import {TLang} from "~/services/api/type";
import {http} from "~/services/core/http";
import * as queryString from "querystring";

interface ProductsPageProps {
  params: { lang: TLang; productId: string };
  searchParams: {};
}

async function getData(productId: string): Promise<IProduct> {
  // Call the fetch method and passing
  // the pokeAPI link

  const query = {};
  const normalizeQuery = queryString.stringify(query);

  return await http.get(`product/${productId}?${normalizeQuery}`)
}

export default async function SingleProductPage(props: {params: {productId: string, lang: TLang}}) {
  const product = await getData(props.params.productId);

  const images = [...product.images]
  if (product.image) images.unshift(product.image)

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCarousel images={images} />
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <ProductInfo product={product} lang={props.params.lang} />
        </Grid>
      </Grid>

      <Box mt={6} mb={10}>
        <ProductAnalysis review={product.review[props.params.lang]} lang={props.params.lang} />
      </Box>

      <Box>
        <RelativeProducts product={product} lang={props.params.lang} />
      </Box>
    </Container>
  );
}

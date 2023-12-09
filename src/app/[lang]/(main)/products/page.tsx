import React from "react";
import { Suspense } from "react";
import { Box, Container, Pagination, Stack } from "@mui/material";
import ProductsFilter from "~/app/[lang]/(main)/products/_components/products-filter/ProductsFilter";
import ProductsList from "~/app/[lang]/(main)/products/_components/ProductsList";
import { Metadata } from "next";
import ProductsBar from "~/app/[lang]/(main)/products/_components/ProductsBar";
import { getDeviceType } from "~/helpers/methods";
import {baseURL} from "~/services/core/http";
import queryString from "querystring";
import {IProduct} from "~/types/product";
import {TLang} from "~/services/api/type";

export const metadata: Metadata = {
  title: "محصولات",
};

async function getData(props: {lang: TLang}) {
  // Call the fetch method and passing
  // the pokeAPI link
  const url = new URL(`${baseURL}product`);
  const query = {
    lang: props.lang
  };
  const normalizeQuery = queryString.stringify(query);

  const response = await fetch(`${url}?${normalizeQuery}`);
  console.log('response', response)

  return await response.json();
}

export default async function ProductPage(props: {
  params: { lang: TLang };
  searchParams: {};
}) {

  const products: IProduct[] = await getData({lang: props.params.lang});

  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7, flexGrow: 1 }}>
      <Box
        minWidth={{ sm: 200, md: 254 }}
        height={350}
        display={{ xs: "none", sm: "block" }}
      >
        <Suspense fallback={"loading filter-produts"}>
          <ProductsFilter />
        </Suspense>
      </Box>

      <Stack flexGrow={1}>
        <Box mb={4}>
          <ProductsBar />
        </Box>

        <Box mb={10} flexGrow={1}>
          <Suspense fallback={"loading product list"}>
            <ProductsList products={products} />
          </Suspense>
        </Box>

        <Pagination count={10} shape={"rounded"} variant="outlined" />
      </Stack>
    </Container>
  );
};


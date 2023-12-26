import React, {Suspense} from "react";
import {Box, Container, Stack} from "@mui/material";
import ProductsFilter from "~/app/[lang]/(main)/products/_components/products-filter/ProductsFilter";
import ProductsList from "~/app/[lang]/(main)/products/_components/ProductsList";
import {Metadata} from "next";
import ProductsBar from "~/app/[lang]/(main)/products/_components/ProductsBar";
import {http} from "~/services/core/http";
import queryString from "querystring";
import {IProduct} from "~/types/product";
import {TLang} from "~/services/api/type";
import {IMeta} from "~/app/[lang]/(main)/articles/page";
import CustomPagination from "~/components/common/custom-pagination/CustomPagination";
import {clearObject} from "~/helpers/methods";

export const metadata: Metadata = {
  title: "محصولات",
};

async function getData(props: { lang: TLang; page: number }): Promise<{ data: IProduct[]; meta: IMeta }> {
  // Call the fetch method and passing
  // the pokeAPI link
  const query = clearObject({
    lang: props.lang,
    limit: 15,
    page: props.page
  }) ;

  const normalizeQuery = queryString.stringify(query);

  return await http.get(`product?${normalizeQuery}`);
}

export default async function ProductPage(props: {
  params: { lang: TLang };
  searchParams: {
    page: number;
  };
}) {
  let products = undefined;

  try {
    products = await getData({
      lang: props.params.lang,
      page: props?.searchParams?.page,
    });
  } catch (e) {}

  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7, flexGrow: 1 }}>
      <Box
        minWidth={{ sm: 200, md: 254 }}
        height={'fit-content'}
        minHeight={350}
        display={{ xs: "none", sm: "block" }}
      >
        <Suspense fallback={"loading filter-products"}>
          <ProductsFilter />
        </Suspense>
      </Box>

      <Stack flexGrow={1}>
        <Box mb={4}>
          <ProductsBar />
        </Box>

        <Box mb={10} flexGrow={1}>
          <Suspense fallback={"loading product list"}>
            <ProductsList products={products?.data!} />
          </Suspense>
        </Box>

        <CustomPagination
          count={products?.meta?.totalPages}
          shape={"rounded"}
          variant="outlined"
        />
      </Stack>
    </Container>
  );
}

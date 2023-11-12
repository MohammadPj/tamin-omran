import React from "react";
import { Suspense } from "react";
import { Box, Container, Pagination, Stack } from "@mui/material";
import ProductsFilter from "~/app/[lang]/(main)/products/_components/products-filter/ProductsFilter";
import ProductsList from "~/app/[lang]/(main)/products/_components/ProductsList";
import { Metadata } from "next";
import ProductsBar from "~/app/[lang]/(main)/products/_components/ProductsBar";
import { getDeviceType } from "~/helpers/methods";

export const metadata: Metadata = {
  title: "محصولات",
};

const ProductsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();

  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7, flexGrow: 1 }}>
      <Box
        minWidth={{ sm: 200, md: 254 }}
        height={350}
        display={{ xs: "none", sm: "block" }}
      >
        <Suspense fallback={"loading filter"}>
          <ProductsFilter />
        </Suspense>
      </Box>

      <Stack flexGrow={1}>
        <Box mb={4}>
          <ProductsBar />
        </Box>

        <Box mb={10} flexGrow={1}>
          <Suspense fallback={"loading product list"}>
            <ProductsList />
          </Suspense>
        </Box>

        <Pagination
          count={10}
          shape={"rounded"}
          variant="outlined"
        />
      </Stack>
    </Container>
  );
};

export default ProductsPage;

import React from "react";
import {Box, Container, Pagination, Stack} from "@mui/material";
import ProductsFilter from "~/app/(main)/products/_components/products-filter/ProductsFilter";
import ProductsSort from "~/app/(main)/products/_components/ProductsSort";
import ProductsList from "~/app/(main)/products/_components/ProductsList";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'محصولات',
}

const ProductsPage = async () => {

  return (

    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7, flexGrow: 1 }}>
      <Box minWidth={254} height={350}>
        <ProductsFilter />
      </Box>

      <Stack flexGrow={1}>
        <Box mb={4}>
          <ProductsSort />
        </Box>

        <Box mb={10} flexGrow={1}>
          <ProductsList />
        </Box>

        <Pagination count={10} shape={"rounded"} variant="outlined" />
      </Stack>
    </Container>
  );
};

export default ProductsPage;

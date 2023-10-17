import React from "react";
import {Box, Container, Pagination} from "@mui/material";
import ProductsFilter from "~/app/(main)/products/_components/products-filter/ProductsFilter";
import ProductsSort from "~/app/(main)/products/_components/ProductsSort";
import ProductsList from "~/app/(main)/products/_components/ProductsList";

const ProductsPage = () => {

  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7 }}>
      <Box minWidth={254} height={350}>
        <ProductsFilter />
      </Box>

      <Box flexGrow={1}>
        <Box mb={4}>
          <ProductsSort />
        </Box>

        <Box mb={10}>
        <ProductsList />
        </Box>

        <Pagination count={10} shape={'rounded'} variant="outlined" />
      </Box>
    </Container>
  );
};

export default ProductsPage;
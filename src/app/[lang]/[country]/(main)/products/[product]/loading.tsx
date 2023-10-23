import React from 'react';
import {Box, Container, Grid, Skeleton} from "@mui/material";
import ProductCarouselSkeleton from "~/app/[lang]/[country]/(main)/products/[product]/_components/ProductCarouselSkeleton";

const ProductsLoadingPage = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCarouselSkeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Skeleton variant={'rectangular'} width={'100%'} height={'100%'} />
        </Grid>
      </Grid>

      <Box mt={6} mb={10} height={300}>
        <Skeleton variant={'rectangular'} width={'100%'} height={'100%'} />
      </Box>
    </Container>
  );
};

export default ProductsLoadingPage;

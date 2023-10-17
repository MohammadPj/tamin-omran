import React from "react";
import { Box, Container, Grid, Skeleton } from "@mui/material";

const ProductsLoadingPage = () => {
  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7 }}>
      <Skeleton variant={'rectangular'} height={350} width={254} />

      <Box flexGrow={1}>
        <Box mb={4}>
          <Skeleton variant={'rectangular'} height={41} width={'100%'} />
        </Box>

        <Box mb={10}>
          <Grid container spacing={4}>
            {Array.from({length: 8}).map((product, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Skeleton variant={'rectangular'} width={'100%'} height={'auto'} sx={{aspectRatio: 2.4 / 3}} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductsLoadingPage;

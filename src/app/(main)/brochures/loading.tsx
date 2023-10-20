import React from "react";
import {Container, Skeleton, Stack} from "@mui/material";

const BrochuresLoadingPage = () => {
  return (
    <Container sx={{ mt: 7, mb: 15, display: "flex", gap: 7 }}>
      <Stack gap={5} width={'100%'}>
        {Array.from({length: 3}, (x, i) => i).map(i => (
          <Skeleton key={i} variant={'rectangular'} width={'100%'} height={100} />
        ))}
      </Stack>
    </Container>
  );
};

export default BrochuresLoadingPage;

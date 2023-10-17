import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

const ProductCard: FC<Props> = ({ subtitle, title, image }) => {

  return (
    <Stack
      px={4}
      py={3.5}
      gap={3}
      width={"100%"}
      sx={{ cursor: 'pointer' }}
      bgcolor={'background.1'}
      borderRadius={1}
      border={'1px solid'}
      borderColor={'grey.3'}
    >
      <Box position={"relative"} width={"100%"} sx={{ aspectRatio: 1 }}>
        <Image src={image} alt={"product"} fill={true} />
      </Box>
      <Typography>{title}</Typography>
      <Typography color={'secondary'}>{subtitle}</Typography>
    </Stack>
  );
};

export default ProductCard;

import React, { FC } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "~/theme/theme";

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
      flexDirection={{ xs: "row", sm: "column" }}
      sx={{ cursor: "pointer" }}
      bgcolor={"background.1"}
      borderRadius={1}
      border={"1px solid"}
      borderColor={"grey.3"}
    >
      <Box
        position={"relative"}
        width={{ xs: 80, sm: "100%" }}
        sx={{ aspectRatio: 1 }}
      >
        <Image src={image} alt={"product"} fill={true} />
      </Box>

      <Stack gap={2}>
        <Typography
          fontSize={{ xs: 16, sm: 18 }}
          fontWeight={500}
        >
          {title}
        </Typography>

        <Typography
          fontSize={{ xs: 12, sm: 14 }}
          color={"text.secondary"}
        >
          {subtitle}
        </Typography>

        <Chip label={"موجود"} sx={{ display: { sm: "none" }, width: 'fit-content', color: 'white' }} color={"secondary"} />
      </Stack>
    </Stack>
  );
};

export default ProductCard;

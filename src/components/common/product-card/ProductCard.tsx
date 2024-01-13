"use client";
import React, { FC } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "~/theme/theme";
import Link from "next/link";
import CustomLink from "~/components/common/custom-link/CustomLink";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  isAvailable?: boolean;
  id: string;
}

const ProductCard: FC<Props> = ({
  subtitle,
  title,
  image,
  isAvailable,
  id,
}) => {

  return (
    <CustomLink href={`/products/${id}` as any} style={{ width: "100%" }}>
      <Stack
        px={4}
        py={3.5}
        gap={3}
        width={"auto"}
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
          {/*<img src={image || "/images/default/product-default.png"} />*/}
          <Image
            src={image || "/images/default/product-default.png"}
            onError={() => {}}
            alt={"product"}
            fill={true}
          />
        </Box>

        <Stack gap={2}>
          <Typography fontSize={{ xs: 16, sm: 18 }} fontWeight={500}>
            {title}
          </Typography>

          <Typography
            fontSize={{ xs: 12, sm: 14 }}
            color={"text.secondary"}
            noWrap
            title={subtitle}
            maxWidth={200}
          >
            {subtitle}
          </Typography>

          <Chip
            label={isAvailable ? "موجود" : "نا موجود"}
            sx={{
              display: { sm: "none", md: "block" },
              width: "fit-content",
              color: "white",
            }}
            color={isAvailable ? "primary" : "secondary"}
          />
        </Stack>
      </Stack>
    </CustomLink>
  );
};

export default ProductCard;

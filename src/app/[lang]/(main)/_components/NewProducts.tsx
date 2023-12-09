import React, { FC } from "react";
import {Box, Grid, Typography} from "@mui/material";
import CustomDivider from "~/components/custom-mui/custom-divider/CustomDivider";
import ProductCard from "~/components/common/product-card/ProductCard";
import {getDictionary} from "~/i18n";
import CustomLink from "~/components/common/custom-link/CustomLink";
import SvgArrowCircleLeft from "~/components/icons/final/ArrowCircleLeft";
import {useCommon} from "~/store/common/commonSlice";
import {useGetProducts} from "~/services/api/hooks";

const NewProducts: FC = () => {

  const dictionary = getDictionary();
  const {isRtl} = useCommon()
  const {data: products} = useGetProducts({lang: 'fa', limit: 5, page: 1})

  return (
    <Box mt={11}>
      <CustomDivider title={dictionary("home.newProducts") as string} showMoreHref={"/products"} />

      <Grid container spacing={4} mt={6} mb={{xs: 2, sm: 0}}>
        {products?.map((product, i) => (
          <Grid key={i} item xs={12} sm={2.4}>
          <ProductCard
            title={product?.title}
            subtitle={product?.description}
            image={product?.images[0]}
            isAvailable={product.isAvailable}
            id={product._id}
          />
          </Grid>
        ))}
      </Grid>

      <Box
        display={{xs: 'flex', sm: "none"}}
        justifyContent={'end'}
        gap={2}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <CustomLink href={"/products"}>
          <Typography color={"primary"} fontSize={14} fontWeight={700}>
            {dictionary("common.showMore")}
          </Typography>
        </CustomLink>
        <SvgArrowCircleLeft width={24} isRtl={isRtl} />
      </Box>
    </Box>
  );
};

export default NewProducts;

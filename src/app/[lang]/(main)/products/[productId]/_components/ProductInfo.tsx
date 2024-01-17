import React, { FC } from 'react'
import {Box, Button, Divider, Grid, Stack, Typography} from '@mui/material'
import { IProduct } from '~/types/product'
import SvgArrowLeft from "~/components/icons/final/ArrowLeft";
import {TLang} from "~/services/api/type";
import {getDictionary} from "~/i18n";

interface ProductInfoProps {
  product: IProduct
  lang: TLang
}

const ProductInfo: FC<ProductInfoProps> = ({ product, lang }) => {

  const dictionary = getDictionary(lang)

  const specifications = [
    {title: dictionary("common.technicalNumber"), value: product?.technicalNumber},
    {title: dictionary("common.enginNumber"), value: product?.engineNumber?.title},
    {title: dictionary("common.brand"), value: product?.brand?.title},
    {title: dictionary("common.category"), value: product?.category?.title?.[lang]},
  ]

  return (
    <Stack
      bgcolor={'background.1'}
      height={'100%'}
      borderRadius={1}
      py={4}
      px={8}
    >
      <Box mb={12}>
        <Typography fontWeight={700} fontSize={18} mb={2}>
          {product?.title[lang]}
        </Typography>
        <Typography fontWeight={400} fontSize={14} color={'text.secondary'}>
          {dictionary("common.productCode")}:{product._id}
        </Typography>
      </Box>

      <Grid container spacing={4} mb={6}>
        {specifications?.map((spec, i) => (
          <Grid item xs={12} md={6} display={'flex'} key={i} gap={2}>
            <Typography fontWeight={500} fontSize={16}>
              {spec.title}:
            </Typography>
            <Typography fontWeight={400} fontSize={16} color={'text.secondary'}>
              {spec.value}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box mb={6}>
        <Typography fontWeight={500} fontSize={16}>
          {dictionary("common.description")}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={14}
          color={'text.secondary'}
          lineHeight={'32px'}
          textAlign={'justify'}
        >
          {product.description[lang]}
        </Typography>
      </Box>

      <Box flexGrow={1} />
      <Divider />

      <Box display={'flex'} mt={4} justifyContent={'space-between'} flexDirection={{xs: 'column', sm: 'row'}} gap={4}>
        <Box>
          <Typography fontWeight={500} fontSize={14}>{dictionary("common.phoneNumber")}</Typography>
          <Typography fontWeight={400} fontSize={14} color={'text.secondary'}>۸۸۲۴۵۶۷۸-۸۸۳۴۶۷۸</Typography>
        </Box>

        <Button size={'small'} sx={{display: 'flex', gap: 2}} disabled={true}>
          {dictionary("products.chatWithSupport")}
          <SvgArrowLeft primarycolor={'white'} width={24} height={24}  />
        </Button>
      </Box>
    </Stack>
  )
}

export default ProductInfo

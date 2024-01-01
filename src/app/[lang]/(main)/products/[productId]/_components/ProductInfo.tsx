import React, { FC } from 'react'
import {Box, Button, Divider, Grid, Stack, Typography} from '@mui/material'
import { IProduct } from '~/types/product'
import SvgArrowLeft from "~/components/icons/final/ArrowLeft";

interface ProductInfoProps {
  product: IProduct
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {

  const specifications = [
    {title: 'شماره فنی', value: product.technicalNumber},
    {title: 'شماره موتور', value: product.engineNumber},
    {title: 'برند', value: product.brand.title},
    {title: 'دسته بندی', value: product.category.title},
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
          {product?.title}
        </Typography>
        <Typography fontWeight={400} fontSize={14} color={'text.secondary'}>
          کد کالا:{product._id}
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
          توضیحات:
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={14}
          color={'text.secondary'}
          lineHeight={'32px'}
          textAlign={'justify'}
        >
          {product.description}
        </Typography>
      </Box>

      <Box flexGrow={1} />
      <Divider />

      <Box display={'flex'} mt={4} justifyContent={'space-between'} flexDirection={{xs: 'column', sm: 'row'}} gap={4}>
        <Box>
          <Typography fontWeight={500} fontSize={14}>تلفن تماس:</Typography>
          <Typography fontWeight={400} fontSize={14} color={'text.secondary'}>۸۸۲۴۵۶۷۸-۸۸۳۴۶۷۸</Typography>
        </Box>

        <Button size={'small'} sx={{display: 'flex', gap: 2}} disabled={true}>
          گفتگو با پشتیبانی
          <SvgArrowLeft primarycolor={'white'} width={24} height={24}  />
        </Button>
      </Box>
    </Stack>
  )
}

export default ProductInfo

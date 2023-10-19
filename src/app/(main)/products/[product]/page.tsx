import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import ProductCarousel from '~/app/(main)/products/[product]/_components/ProductCarousel'
import ProductInfo from '~/app/(main)/products/[product]/_components/ProductInfo'
import { IProduct } from '~/types/product'
import ProductAnalysis from '~/app/(main)/products/[product]/_components/ProductAnalysis'

const ProductsPage = () => {
  const product: IProduct = {
    name: 'نام محصول',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود.',
    uniqueCode: '۱۲۴۵۷۷',
    images: [
      '/images/home/products/product (1).jpg',
      '/images/home/products/product (2).jpg',
      '/images/home/products/product (3).jpg',
      '/images/home/products/product (4).jpg',
      '/images/home/products/product (5).jpg',
    ],
    specifications: [
      { title: 'ویژگی محصول', value: 'ویژگی اول' },
      { title: 'ویژگی محصول', value: 'ویژگی دوم' },
      { title: 'ویژگی محصول', value: 'ویژگی سوم' },
    ],
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCarousel images={product?.images} />
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <ProductInfo product={product} />
        </Grid>
      </Grid>

      <Box mt={6} mb={10}>
        <ProductAnalysis />
      </Box>
    </Container>
  )
}

export default ProductsPage

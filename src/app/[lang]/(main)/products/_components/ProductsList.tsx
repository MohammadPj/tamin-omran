'use client'
import React, {FC} from 'react'
import ProductCard from '~/components/common/product-card/ProductCard'
import {Grid} from '@mui/material'
import Link from 'next/link'

const ProductsList: FC = () => {
  const products = [
    {
      id: 1,
      title: 'این نام محصول است',
      subtitle: 'این برند است',
      image: '/images/products/product (1).jpg',
    },
    {
      id: 2,
      title: 'این نام محصول است',
      subtitle: 'این برند است',
      image: '/images/products/product (2).jpg',
    },
    {
      id: 3,
      title: 'این نام محصول است',
      subtitle: 'این برند است',
      image: '/images/products/product (3).jpg',
    },
    {
      id: 4,
      title: 'این نام محصول است',
      subtitle: 'این برند است',
      image: '/images/products/product (4).jpg',
    },
    {
      id: 5,
      title: 'این نام محصول است',
      subtitle: 'این برند است',
      image: '/images/products/product (5).jpg',
    },
  ]

  const productList = [...products, ...products, ...products]

  return (
    <Grid container spacing={4}>
      {productList.map((product, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <Link href={`/products/${product.id}` as any}>
            <ProductCard
              key={i}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsList

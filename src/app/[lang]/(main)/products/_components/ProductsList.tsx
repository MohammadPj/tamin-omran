import React, {FC} from 'react'
import ProductCard from '~/components/common/product-card/ProductCard'
import {Grid} from '@mui/material'
import Link from 'next/link'
import {IProduct} from "~/types/product";

interface ProductsListProps {
  products: IProduct[]
}

const ProductsList: FC<ProductsListProps> = ({products}) => {

  console.log('products', products)
  return (
    <Grid container spacing={4}>
      {products.map((product, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              key={i}
              title={product.title}
              subtitle={product.description}
              image={product?.image}
              id={product._id}
              isAvailable={product.isAvailable}
            />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsList

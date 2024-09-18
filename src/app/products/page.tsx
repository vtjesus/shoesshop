
import React from 'react'


import Products from '@/components/products/products'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
  description: string
}

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: 'no-store', // Ensure the data is fresh (equivalent to SSR)
  })
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export default async function Page() {
  const products: Product[] = await fetchProducts()

  return (
    <main className=''>
      <Products products={products}/>
    </main>
  )
}

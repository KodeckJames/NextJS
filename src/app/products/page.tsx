import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  const productID = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>
        <Link href={`/products/${productID}`} replace>Product {productID}</Link>
      </h2>
    </>
  )
}

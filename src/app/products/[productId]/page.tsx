import React from 'react'
import { Metadata } from 'next'

type Props = {
  params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`)
    })
  })
  return {
    title: `Product ${title}`,
  }
}

export default async function ProductDetails({ params }: Props) {
    const productId=(await params).productId
  return (
      <div>Details about product {productId}</div>
  )
}

import { notFound } from 'next/navigation';

import React from 'react'

function getRandomInt(count: number) {
  return Math.floor(Math.random()*count)
}

export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review")
  }
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
      <h1>Review {reviewId} for product {productId}</h1>
  )
}

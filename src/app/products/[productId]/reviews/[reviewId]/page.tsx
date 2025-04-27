import { notFound } from 'next/navigation';

import React from 'react'

export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
      <div>Review {reviewId} for product {productId}</div>
  )
}

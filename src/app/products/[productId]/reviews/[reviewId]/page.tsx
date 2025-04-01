import React from 'react'

export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    const { reviewId, productId } = await params;
  return (
      <div>Review {reviewId} for product {productId}</div>
  )
}

"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/")
    }
  return (
    <>
          <h1>Order Product</h1>
          <button onClick={handleClick}>Place order</button>
    </>
  )
}
// Other router methods: ,replace(),.forward(), .refresh(), .back() etc


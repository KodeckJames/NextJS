import Link from "next/link";

import React from 'react'

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products" className=" block">products</Link>
    </>
  )
}

import Link from "next/link"

export default function ProductsNewPage() {
  return (
      <>
          <h1>Featured Products</h1>
          <Link href={'/productsnew/1'}>Product 1</Link>
          <Link href={'/productsnew/2'}>Product 2</Link>
          <Link href={'/productsnew/3'}>Product 3</Link>
      </>
  )
}

import Link from 'next/link'
import React from 'react'

export default function InnerF2() {
  return (
      <>
          <h1>Inner F2 Page</h1>
          <div>
              <Link href={'/f5'}>F5</Link>
          </div>
      </>
  )
}

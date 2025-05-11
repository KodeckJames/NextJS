import React from 'react'

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 3000);
  })
  return (
    <div>My Blog</div>
  )
}

import { cookies } from "next/headers"



export const metadata = {
  title: "About me",
}

import React from 'react'

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  
  return (
    <div>AboutPage</div>
  )
}

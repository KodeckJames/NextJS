import { Card } from '@/components/card'
import React from 'react'
import Link from 'next/link'

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <br />
      <div>
        <Link href="/complex-dashboard/archived"> Archived</Link>
      </div>
    </Card>
  )
}

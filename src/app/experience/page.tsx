import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      this is test
      <Link href={"/connect"}>Go to connect</Link>
    </div>
  )
}

export default page

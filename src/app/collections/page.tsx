import React from 'react'
import Link from 'next/link'
import { All } from '@/components'

const Collections = () => {

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL || 'Failed';

  return (
    <>
      <All  STRAPI_APP_BASE_URL={baseUrl}/>
    </>

  )
}

export default Collections
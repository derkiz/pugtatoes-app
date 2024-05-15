import React from 'react'
import Link from 'next/link'
import { All } from '@/components'

const Collections = () => {

  const STRAPI_APP_BASE_URL = process.env.STRAPI_APP_BASE_URL || 'failed';

  return (
    <>
      <All  STRAPI_APP_BASE_URL={STRAPI_APP_BASE_URL}/>
    </>

  )
}

export default Collections
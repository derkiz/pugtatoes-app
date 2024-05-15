import { Cta, Bestsellers } from "@/components"

const page = () => {

  const STRAPI_APP_BASE_URL = process.env.STRAPI_APP_BASE_URL || 'failed';

  return (
    <>
      <Cta />
      <Bestsellers STRAPI_APP_BASE_URL={STRAPI_APP_BASE_URL}/>
    </>
  )
}

export default page
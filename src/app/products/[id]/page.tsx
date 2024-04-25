import { Metadata } from "next";
import { Product } from "@/components";

type Props = {
  params: {
    id: string;
    STRAPI_APP_BASE_URL: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { id } = params;
  const slug = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `Product ${slug}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  const paramId = params.id;
  const STRAPI_APP_BASE_URL = process.env.STRAPI_APP_BASE_URL || '';
  return (
    <>
      <Product paramId={paramId} STRAPI_APP_BASE_URL={STRAPI_APP_BASE_URL} />
    </>
  );
};

export default ProductDetails;

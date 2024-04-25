import { Metadata } from "next";
import { Product } from "@/components";

type Props = {
  params: {
    id: string;
    STRAPI_APP_BASE_URL: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.id}`,
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

//[id]/page.tsx

import { Metadata } from "next";
import { Product } from "@/components";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const { id } = params;
  const title = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  const paramId = params.id;
  return (
    <>
      <Product paramId={paramId} />
    </>
  );
};

export default ProductDetails;

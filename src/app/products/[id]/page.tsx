import { Metadata } from "next";
import { Product } from "@/components";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.id}`,
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

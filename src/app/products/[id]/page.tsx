import { Metadata } from "next";
type Props = {
  params: {
    id: string;
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.id}`,
  };
};

export default function productDetails({ 
  params,
}: Props) {
  return <div>Product Details: { params.id }</div>
}
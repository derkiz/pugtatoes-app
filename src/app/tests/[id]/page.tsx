import { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const newArr = ['jeff', 'mitch', 'joe']
  return (
    <div>
      {!newArr.includes(params.id) ? (
      <>{notFound()}</>
      ) : (
      <>In</>
      )}
    </div>
  );
}

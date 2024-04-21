import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetails = async ({ params }: Props) => {
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const { data } = await response.json();
    const slugs = data.map((product: { attributes: { slug: any } }) => product.attributes.slug);
      
    return (
      <div>
        Product Details: {params.id}
        <br />
        type of params id: {typeof(params.id)}
        <br />
        Slugs array: {JSON.stringify(slugs)}
        <br />
        type of slug i0 {typeof(slugs[0])}
        <br />

        {!slugs.includes(params.id) ? (
          <>notFound()</>
          ) : (
           <>In</>
          )}

      </div>
    );
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.id}`,
  };
};

export default function ProductPage({ params }: Props) {
  return <ProductDetails params={params} />;
}

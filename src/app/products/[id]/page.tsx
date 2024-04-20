import { Metadata } from "next";
import { notFound } from "next/navigation";

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

const ProductDetails = async ({ params }: Props) => {
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const { data } = await response.json();
    const slugs = data.map((product: { attributes: { slug: any } }) => product.attributes.slug);

    if (!slugs.includes(params.id)) {
      console.log(`ID "${params.id}" not found in slugs array`); // Log a message
      return (
        <>
        "{params.id}" Not found in slugs array
        <br />
        Slugs array: {JSON.stringify(slugs)}
        </>
      )
    }

    return (
      <div>
        Product Details: {params.id}
        <br />
        Slugs array: {JSON.stringify(slugs)}
      </div>
    );
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function ProductPage({ params }: Props) {
  return <ProductDetails params={params} />;
}

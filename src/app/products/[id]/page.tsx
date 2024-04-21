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

const getProductDetails = async (): Promise<string[]> => {
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const { data } = await response.json();
    const slugs = data.map((product: { attributes: { slug: any } }) => product.attributes.slug);
    return slugs;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
};

const ProductDetails = async ({ params }: Props) => {
  const slugs = await getProductDetails(); // Await the result of getProductDetails

  // Render the component once the slugs array is fetched
  return (
    <div>
      Product Details: {params.id}
      <br />
      {!slugs.includes(params.id) ? (
        notFound()
      ) : (
        <>In</>
      )}
    </div>
  );
};

export default ProductDetails;

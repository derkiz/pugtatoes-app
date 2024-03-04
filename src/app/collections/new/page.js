import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'products' });

  return {
    props: {
      products: res.items
    }
  }

}

const New = ({ products }) => {
  console.log(products);
  return (
    <div>New Products</div>
  )
}

export default New
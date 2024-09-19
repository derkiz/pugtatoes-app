// apiService.js
const fetchProducts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_APP_BASE_URL;  // Use the env variable here
    const response = await fetch(`${baseUrl}/api/products?populate=image`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export { fetchProducts };
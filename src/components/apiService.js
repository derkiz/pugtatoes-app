// apiService.js
const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image', {
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
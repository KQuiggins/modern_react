import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className="text-3xl font-bold mb-6">🛒 Product Catalog</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">❌ Error: {error}</p>}

      <ProductList products={products}/>
    </div>);
};

export default App;
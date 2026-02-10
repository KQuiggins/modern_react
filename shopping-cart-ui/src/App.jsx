import { useState, useEffect } from 'react';

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
        console.log(data);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow flex flex-col">
          <img src={product.image} alt={product.name} className="object-cover mb-4 h-40 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>);
};

export default App;
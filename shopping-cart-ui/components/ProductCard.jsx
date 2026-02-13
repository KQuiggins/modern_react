const ProductCard = ({product}) => {
  return (
    <div
      
      className="bg-white p-4 rounded-lg shadow flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover mb-4 h-40 rounded"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700 text-sm mb-4">{product.description}</p>
      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

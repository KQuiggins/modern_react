import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products, error, loading } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">❌ Error: {error}</p>}
      {products.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductList;

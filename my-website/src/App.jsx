// App.jsx
import { useEffect, useState } from "react";
import ProductCard from "./components/cards/ProductCard";
import { getAllProduct } from "./store/feature/product/gitAllProduct";

export default function App() {
  const [products, setProducts] = useState([]);  // Changed from product to products

  useEffect(() => {
    async function fetchAllProduct() {
      try {
        let products = await getAllProduct();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchAllProduct();
  }, []);

  return (
    <>
    <main className="max-w-screen-xl mx-auto p-5">
    <sectio>
      <h1 className="text-blue-800 font-bold text-4xl text-center mt-5">List Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {products.map((product) => (
          <ProductCard 
            key={product.id}              // Add a unique key (assuming product.id exists)
            title={product.title} 
            image={product.images[0]}      // Updated to access images array
            price={product.price} 
            brand={product.brand}
          />
        ))}
      </div>
      </sectio>
      </main>
    </>
  );
}

import { useEffect, useState } from "react";
import ProductCard from "./components/cards/ProductCard";
import { getAllProduct } from "./store/feature/product/getAllproduct";  // Correct import

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProduct() {
      try {
        const products = await getAllProduct();  // Fetch products from API
        setProducts(products);  // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);  // Error handling
      }
    }
    fetchAllProduct();  // Call the async function
  }, []);

  return (
    <main className="max-w-screen-1xl mx-auto p-1">
      <section>
        <h1 className="text-blue-800 font-bold text-4xl text-center mt-5">List Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {products.map((product) => {
            const imageUrl = product.images?.[0] || '/fallback-image-url.jpg';  // Add fallback image URL
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                image={imageUrl}  // Ensure image is valid
                price={product.price}
                brand={product.brand}
                rating={product.rating}
                discount={product.discount}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

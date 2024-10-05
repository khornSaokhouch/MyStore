import { base_url } from "../../api/base_url";  // Ensure this URL is correctly set

// Fetch all products from the API
export async function getAllProduct() {
  try {
    const response = await fetch(`${base_url}products`);  // Fetch all products
    const data = await response.json();  // Parse the JSON data
    console.log("Fetched products:", data.products);  // Log the products
    return data.products;  // Return the products array
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Fetch a single product by ID
export async function getSingleProduct(id) {
  try {
    const response = await fetch(`${base_url}/products/${id}`);  // Dynamic URL for product
    const data = await response.json();
    console.log("Fetched product:", data.product);
    return data?.product || null;  // Ensure null is returned if no product
  } catch (error) {
    console.error("Error fetching single product:", error);
    return null;  // Return null on error
  }
}

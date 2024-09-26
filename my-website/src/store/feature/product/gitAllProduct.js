// gitAllProduct.js
import { base_url } from "../../api/base_url";

export async function getAllProduct() {
  try {
    const response = await fetch(`${base_url}products`);  // Use backticks for template literals and updated URL endpoint.
    const data = await response.json();
    console.log("data", data.products); // Assuming the data contains a 'products' array
    return data?.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

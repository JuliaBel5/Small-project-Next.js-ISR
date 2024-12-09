import { Product } from "@/app/types/product";
import { urls } from "@/constants/urls";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(urls.products.getProducts, {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function createProduct(
  newProduct: Omit<Product, "id">
): Promise<Product> {
  const response = await fetch(urls.products.getProducts, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error("Failed to create product");
  }
  return response.json();
}

export async function updateProduct(
  id: string,
  updatedProduct: Partial<Product>
): Promise<Product> {
  const response = await fetch(`${urls.products.getProducts}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });
  if (!response.ok) {
    throw new Error("Failed to update product");
  }
  return response.json();
}

export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(`${urls.products.getProducts}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
}

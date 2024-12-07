import { urls } from "@/constants/urls";
import { ProductList } from "./components/ProductList";
import { Product } from "./types/product";
import { Box, Title } from "@mantine/core";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(urls.products.getProducts);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <Box
      display="flex"
      style={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title c="#7c6660" order={1} my={20} style={{ textAlign: "center" }}>
        Product List
      </Title>
      <ProductList products={products} />
    </Box>
  );
}

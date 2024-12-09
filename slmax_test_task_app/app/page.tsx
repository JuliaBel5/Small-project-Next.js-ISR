import { ProductList } from "./components/ProductList";
import { Box, Title } from "@mantine/core";
import { fetchProducts } from "./services/productService";

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

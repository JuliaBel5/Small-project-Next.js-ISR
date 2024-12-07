"use client";
import { Box, Grid } from "@mantine/core";
import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Box display="flex" style={{ justifyContent: "center" }}>
      <Grid mb="lg" w="90%" px={10} gutter={3}>
        {products.map((product) => (
          <Grid.Col key={product.id} span={{ base: 6, lg: 4, xl: 3 }}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

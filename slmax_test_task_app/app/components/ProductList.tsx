"use client";
import { Box, Grid } from "@mantine/core";
import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Box
      display="flex"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        mb="lg"
        mx="lg"
        w="100%"
        px={10}
        gutter={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.map((product) => (
          <Grid.Col
            key={product.id}
            span={{ base: 6, lg: 4, xl: 3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

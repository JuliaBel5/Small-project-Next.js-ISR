import { Card, Image, Text, Button, Flex, Box } from "@mantine/core";
import Link from "next/link";
import { Product } from "../types/product";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      shadow="sm"
      radius={15}
      style={{
        maxWidth: 280,
      }}
      className="product-card"
    >
      <Link href={`/products/${product.id}`} passHref>
        <Box display={"flex"} style={{ justifyContent: "center" }}>
          <Image
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            src={product.pictureUrl}
            alt={product.name}
          />
        </Box>
      </Link>
      <Flex justify="space-between" style={{ marginTop: 15 }}>
        <Text w={500} c="#7c6660">
          {product.name}
        </Text>
        <Text size="sm" c="gray">
          ${product.price}
        </Text>
      </Flex>

      <Text size="sm" style={{ marginTop: 10 }} c="dimmed">
        {product.description}
      </Text>

      <Button
        component={Link}
        href={`/products/${product.id}`}
        style={{
          marginTop: 15,
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        color="#c4dda4"
      >
        View Details
      </Button>
    </Card>
  );
};

import { Product } from "@/app/types/product";
import { Box, Image, Title, Text, Flex, Button } from "@mantine/core";

interface ProductPageProps {
  product: Product;
}

export const ProductItemPage = ({ product }: ProductPageProps) => {
  return (
    <Flex
      gap={30}
      align="center"
      justify="center"
      style={{ marginTop: "20px" }}
    >
      <Box style={{ maxWidth: "300px", marginRight: "20px" }}>
        {product.pictureUrl ? (
          <Image
            src={product.pictureUrl}
            alt={product.name}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
            radius={15}
          />
        ) : (
          <div>Image not available</div>
        )}
      </Box>

      <Box
        h={500}
        display="flex"
        style={{
          maxWidth: "400px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Title order={1} style={{ color: "#7c6660" }}>
          {product.name}
        </Title>
        {product.details && (
          <Text
            size="18px"
            style={{
              marginTop: "20px",
              textAlign: "justify",
              color: "#7c6660",
            }}
          >
            {product.details}
          </Text>
        )}
        <Text style={{ marginTop: "20px", fontSize: "22px", color: "#7c6660" }}>
          Price: €{product.price}
        </Text>

        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "#c0cee8",
            color: "#fff",
            width: "100%",
            fontSize: "18px",
            padding: "10px",
            height: "45px",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Flex>
  );
};

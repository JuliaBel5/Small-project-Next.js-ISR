import { Box, Title, Text } from "@mantine/core";

export default function AboutPage() {
  return (
    <Box p="lg">
      <Title order={1} c="#7c6660">
        About Us
      </Title>
      <Text mt="sm" c="dimmed">
        This is a simple music store project showcasing musical instruments.
      </Text>
    </Box>
  );
}

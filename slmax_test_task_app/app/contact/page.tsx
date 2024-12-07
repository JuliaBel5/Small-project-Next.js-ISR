import { Box, Title, Text } from "@mantine/core";

export default function ContactPage() {
  return (
    <Box p="lg">
      <Title order={1} c="#7c6660">
        Contact Us
      </Title>
      <Text mt="sm" c="dimmed">
        You can reach me at juliabel5@gmail.com.
      </Text>
    </Box>
  );
}

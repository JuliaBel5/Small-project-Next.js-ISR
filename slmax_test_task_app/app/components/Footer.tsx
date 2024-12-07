"use client";

import { Box, Text, Flex, Anchor, Image } from "@mantine/core";

export const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(176, 199, 148, 1)",
        padding: "10px 20px",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        marginTop: "auto",
      }}
    >
      <Flex justify="space-between" align="center">
        <Text c="#7c6660">© December 2024</Text>

        <Anchor
          href="https://github.com/JuliaBel5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#7c6660",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            transition: "font-size 0.2s ease",
          }}
          className="footer-link"
        >
          <Image
            src="github.png"
            alt="GitHub"
            width={20}
            height={20}
            style={{ marginRight: "8px" }}
          />
          GitHub
        </Anchor>
      </Flex>
    </Box>
  );
};

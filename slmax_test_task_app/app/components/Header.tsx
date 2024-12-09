import { Box, Image, Flex, Title } from "@mantine/core";
import Link from "next/link";
import NavItem from "./NavItem";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(176, 199, 148, 1)",
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="md">
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <Image
              src="music-logo2.png"
              alt="Music Store Logo"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <Title order={2} c="#7c6660" className="header-logo">
              Music Store
            </Title>
          </Link>
        </Flex>
        <Flex gap="md">
          <NavItem label="Home" href="/" />
          <NavItem label="About" href="/about" />
          <NavItem label="Contact" href="/contact" />
          <NavItem label="Cart" href="/cart" icon={<FiShoppingCart />} />
        </Flex>
      </Flex>
    </Box>
  );
};

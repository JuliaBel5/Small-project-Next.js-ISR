import { NavLink } from "@mantine/core";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <NavLink
      label={label}
      component={Link}
      href={href}
      style={{
        color: "#7c6660",
        textDecoration: "none",
        "&hover": {
          fontSize: "18px",
          textDecoration: "underline",
        },
      }}
      className={"nav-item"}
    />
  );
};

export default NavItem;

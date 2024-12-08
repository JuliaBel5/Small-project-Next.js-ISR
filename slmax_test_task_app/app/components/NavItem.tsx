import { NavLink } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
  label: string;
  href: string;
  icon?: ReactNode;
}

const NavItem = ({ label, href, icon }: NavItemProps) => {
  return (
    <NavLink
      label={label}
      component={Link}
      href={href}
      leftSection={icon}
      style={{
        color: "#7c6660",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      }}
      className={"nav-item"}
    />
  );
};

export default NavItem;

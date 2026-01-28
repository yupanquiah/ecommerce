import type { TablerIcon } from "@tabler/icons-react";
import type { LinkProps } from "react-router";

export type BreadcrumbItem = {
  title: string;
  href: string;
};

export type NavItem = {
  title: string;
  href: NonNullable<LinkProps["to"]>;
  icon?: TablerIcon | null;
  isActive?: boolean;
};

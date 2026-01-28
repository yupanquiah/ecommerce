import type { BreadcrumbItem } from "./navigation";
import type { ReactNode } from "react";

export type AuthLayoutProps = {
  children?: React.ReactNode;
  name?: string;
  title: string;
  description?: string;
};

export type AppLayoutProps = {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  openMenu?: () => void;
};

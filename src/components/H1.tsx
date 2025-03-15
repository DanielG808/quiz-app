import { cn } from "@/utils/cn";
import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return <h1 className={cn("", className)}>{children}</h1>;
}

import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  className?: string;
}
const Typography: React.FC<TypographyProps> = ({
  size,
  children,
  className,
}) => {
  return React.createElement(
    size,
    {
      className: cn(
        "text-slate-900 dark:text-slate-50",
        size === "h1" && "text-4xl font-bold sm:text-5xl",
        size === "h2" && "text-3xl font-bold sm:text-4xl",
        size === "h3" && "text-2xl font-bold sm:text-3xl",
        size === "h4" && "text-xl font-bold sm:text-2xl",
        size === "h5" && "text-lg font-bold sm:text-xl",
        size === "h6" && "text-base font-bold sm:text-lg",
        size === "p" && "text-sm sm:text-base",
        className
      ),
    },
    children
  );
};

export default Typography;

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "text";
  children: React.ReactNode;
}

export default function Button({
  variant = "outline",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden px-8 py-4 text-xs font-mono uppercase tracking-widest transition-colors duration-500 hover-target",
        variant === "outline" &&
          "border border-neutral-800 text-white hover:text-black",
        variant === "solid" &&
          "bg-white text-black border border-white hover:bg-transparent hover:text-white",
        variant === "text" &&
          "px-0 py-2 border-b border-transparent hover:border-white text-neutral-400 hover:text-white",
        className
      )}
      {...props}
    >
      {variant === "outline" && (
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
      )}
      {variant === "solid" && (
        <span className="absolute inset-0 bg-[#050505] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

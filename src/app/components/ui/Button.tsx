import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "neutral";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "neutral",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium shadow transition-all duration-300 ease-in-out";

  const variants = {
    primary: clsx(
      base,
      "text-white bg-[image:var(--gradient-primary)] bg-[length:150%_150%] hover:bg-[position:100%_0]"
    ),
    neutral: clsx(
      base,
      "text-foreground bg-surface border border-border hover:bg-muted/10"
    ),
  };

  return (
    <button className={clsx(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

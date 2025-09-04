import clsx from "clsx";

import { type LucideIcon } from 'lucide-react';

export type ButtonProps = {
  variant?: "primary" | "neutral";
  size?: "default" | "small";
  children: React.ReactNode;
  className?: string;
  StartIcon?: LucideIcon;
  EndIcon?: LucideIcon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "neutral",
  size = "default",
  children,
  className,
  StartIcon,
  EndIcon,
  ...props
}: ButtonProps) {
  const baseClassNames = "inline-flex items-center justify-center shadow transition-all duration-300 ease-in-out";

  const variants = {
    primary: clsx(
      baseClassNames,
      "text-white bg-[image:var(--gradient-primary)] bg-[length:160%_150%] hover:bg-[position:100%_0]"
    ),
    neutral: clsx(
      baseClassNames,
      "text-foreground bg-surface border border-border hover:bg-muted/10"
    ),
  };
  const sizes = {
    default: "px-4 py-1 xs:px-6 xs:py-2 font-medium rounded-lg",
    small: "px-2 py-[2px] text-sm xs:px-3 xs:py-1 font-medium rounded",
  };
  const startIconSizes = {
    default: "-ml-1 xs:-ml-3 mr-2 size-5",
    small: "xs:-ml-1 mr-2 size-4",
  };
  const endIconSizes = {
    default: "-mr-1 xs:-mr-3 ml-2 size-5",
    small: "xs:-mr-1 ml-2 size-4",
  };

  return (
    <button className={clsx(variants[variant], sizes[size], className)} {...props}>
      {StartIcon ? <StartIcon className={startIconSizes[size]} /> : null}
      {children}
      {EndIcon ? <EndIcon className={endIconSizes[size]} /> : null}
    </button>
  );
}

import clsx from "clsx";

import { type LucideIcon } from 'lucide-react';

export type ButtonProps = {
  variant?: "primary" | "neutral";
  size?: "default" | "small";
  children: React.ReactNode;
  className?: string;
  StartIcon?: LucideIcon;
  EndIcon?: LucideIcon;
  animatePing?: boolean;
  tooltip?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "neutral",
  size = "default",
  children,
  className,
  StartIcon,
  EndIcon,
  animatePing,
  disabled,
  ...props
}: ButtonProps) {
  const baseClassNames = "inline-flex items-center justify-center shadow transition-all duration-300 ease-in-out relative group";

  const variants = {
    primary: clsx(
      "bg-[image:var(--gradient-primary)] bg-[length:160%_150%]",
      disabled ? "opacity-70 text-gray-100" : "text-white hover:bg-[position:100%_0]"
    ),
    neutral: clsx(
      "border border-border",
      disabled ? "text-muted bg-muted/20" : "text-foreground bg-surface hover:bg-muted/10"
    )
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
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        baseClassNames,
        variants[variant],
        sizes[size],
        className,
        disabled ? "cursor-not-allowed" : null,
      )}
    >
      {StartIcon ? <StartIcon className={startIconSizes[size]} /> : null}
      {children}
      {EndIcon ? <EndIcon className={endIconSizes[size]} /> : null}
      {animatePing ? <span className="animate-ping absolute inline-flex size-full rounded bg-[var(--color-primary)] opacity-15 group-hover:hidden"></span> : null}
    </button>
  );
}

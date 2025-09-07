import { clsx } from "clsx";
import Link from "next/link";

import { type LucideIcon } from 'lucide-react';

import { Button, type ButtonProps } from "@/app/components/ui/Button";

export type NavMenuItemProps = {
  path: string;
  className?: string;
  active?: boolean;
  label: string;
  Icon: LucideIcon;
  count?: number;
  secondaryAction?: ButtonProps;
  onClick?: () => void;
}

export function NavMenuItem({
  path,
  className,
  active,
  label,
  Icon,
  count,
  secondaryAction,
  onClick
}: NavMenuItemProps) {
  const baseClassNames = "flex items-center justify-between py-1 px-5 xs:py-2 xs:px-6 lg:py-3 font-semibold overflow-hidden relative hover:bg-muted/10 transition-all duration-300";
  return (
    <li>
      <Link href={path} className={clsx(baseClassNames, className)}>
      <span  className={clsx("flex flex-1 items-center gap-2", active ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]")} onClick={onClick}>
        <Icon className={clsx("size-5", active && "text-[var(--color-primary)]")} />
        {label}
      </span>
      {count !== undefined ? (
        <span className={clsx("text-sm font-bold rounded px-1 text-white", active ? "bg-[var(--color-secondary)]" : "bg-gray-200")}>{count}</span>
      ) : null}
      {secondaryAction ? (
        <Button {...secondaryAction} />
      ) : null}
      <span className={clsx("absolute top-0 end-0 h-full w-1 bg-[var(--color-primary)]", active ? "opacity-100" : "opacity-0")} />
      </Link>
    </li>
  );
}

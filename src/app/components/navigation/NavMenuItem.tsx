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
}

export function NavMenuItem({
  path,
  className,
  label,
  Icon,
  count,
  secondaryAction
}: NavMenuItemProps) {
  const baseClassNames = "flex items-center justify-between py-1 px-5 xs:py-2 xs:px-6 lg:py-3 font-semibold text-[var(--color-muted)] overflow-hidden";
  return (
    <li className={clsx(baseClassNames, className)}>
      <Link href={path} className="flex flex-1 items-center gap-2">
        <Icon className="size-5" />
        {label}
      </Link>
      {count !== undefined ? <span className="text-sm font-bold bg-gray-200 rounded px-1 text-white">{count}</span> : null}
      {secondaryAction ? <Button {...secondaryAction} /> : null}
    </li>
  );
}

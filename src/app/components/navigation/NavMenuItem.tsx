import { clsx } from "clsx";

import { type LucideIcon } from 'lucide-react';

import { Button, type ButtonProps } from "@/app/components/ui/Button";

export type NavMenuItemProps = {
  className?: string;
  active?: boolean;
  label: string;
  Icon: LucideIcon;
  secondaryAction?: ButtonProps;
}

export function NavMenuItem({
  className,
  label,
  Icon,
  secondaryAction
}: NavMenuItemProps) {
  const baseClassNames = "flex items-center justify-between py-1 px-5 xs:py-2 xs:px-6 lg:py-3 font-semibold text-[var(--color-muted)]";
  return (
    <li className={clsx(baseClassNames, className)}>
      <a href="#" className="flex items-center gap-2">
        <Icon className="size-5" />
        {label}
      </a>
      {secondaryAction ? <Button {...secondaryAction} /> : null}
    </li>
  );
}

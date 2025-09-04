import { clsx } from "clsx";

import {
  FoldersIcon,
  FileTextIcon,
  BriefcaseBusinessIcon,
  HandCoinsIcon,
  CpuIcon,
  ShieldCheckIcon,
  BadgeQuestionMarkIcon,
  PlusIcon,
  CrownIcon,
} from 'lucide-react'

import { Button } from "@/app/components/ui/Button";
import { NavMenuItem, type NavMenuItemProps } from "@/app/components/navigation/NavMenuItem";

const primaryMenuItems: NavMenuItemProps[] = [
  {
    label: "Projects",
    Icon: FoldersIcon,
  },
  {
    label: "CVs",
    Icon: FileTextIcon,
  },
  {
    label: "Jobs",
    Icon: BriefcaseBusinessIcon,
  },
];

const secondaryMenuItems: NavMenuItemProps[] = [
  {
    label: "How it works",
    Icon: CpuIcon,
  },
  {
    label: "Billing",
    Icon: HandCoinsIcon,
    secondaryAction: {
      variant: "primary",
      size: "small",
      children: "Upgrade",
      EndIcon: CrownIcon
    }
  },
  {
    label: "Privacy Policy",
    Icon: ShieldCheckIcon,
  },
  {
    label: "FAQ's",
    Icon: BadgeQuestionMarkIcon,
  },
];

type NavMenuProps = {
  className?: string
}

export function NavMenu({
  className
}: NavMenuProps) {

  return (
    <nav className={clsx("w-full min-h-full flex flex-col justify-between gap-8", className)}>
      <div className="flex flex-col gap-4">
        <ul className="space-y-1">
          {primaryMenuItems.map((item, index) => (
            <NavMenuItem
              key={index}
              active={index === 0}
              {...item}
            />
          ))}
        </ul>
        <Button
          className="self-center"
          variant="primary"
          StartIcon={PlusIcon}
        >
          New Project
        </Button>
      </div>
      <ul className="space-y-1">
        {secondaryMenuItems.map((item, index) => (
          <NavMenuItem
            key={index}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
}

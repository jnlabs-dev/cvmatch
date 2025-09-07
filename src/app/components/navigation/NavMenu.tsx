"use client";
import { clsx } from "clsx";

import { useRouter } from "next/navigation";

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

type NavMenuProps = {
  className?: string
}

export function NavMenu({
  className
}: NavMenuProps) {
  const router = useRouter();

  const primaryMenuItems: NavMenuItemProps[] = [
    {
      label: "Projects",
      path: "/projects",
      Icon: FoldersIcon,
      count: 0
    },
    {
      label: "CVs",
      path: "/resumes",
      Icon: FileTextIcon,
      count: 0
    },
    {
      label: "Jobs",
      path: "/jobs",
      Icon: BriefcaseBusinessIcon,
      count: 0
    },
  ];

  const secondaryMenuItems: NavMenuItemProps[] = [
    {
      label: "How it works",
      path: "/how-it-works",
      Icon: CpuIcon,
    },
    {
      label: "Billing",
      path: "/billing",
      Icon: HandCoinsIcon,
      secondaryAction: {
        variant: "primary",
        size: "small",
        children: "Upgrade",
        EndIcon: CrownIcon,
        animatePing: true,
        onClick: () => router.push("/billing")
      }
    },
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
      Icon: ShieldCheckIcon,
    },
    {
      label: "FAQ's",
      path: "/faq",
      Icon: BadgeQuestionMarkIcon,
    },
  ];

  return (
    <nav className={clsx("w-full min-h-full flex flex-col justify-between gap-8 overflow-hidden", className)}>
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
          onClick={() => router.push("/projects/new")}
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

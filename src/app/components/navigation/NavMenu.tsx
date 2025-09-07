"use client";

import { clsx } from "clsx";

import { useRouter, usePathname } from "next/navigation";

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

import { SIDEBAR_SELECTOR } from "@/app/constants/layout.constants";

type NavMenuProps = {
  className?: string
}

export function NavMenu({
  className
}: NavMenuProps) {
  const pathname = usePathname();
  console.log("🚀 ~ NavMenu ~ pathname:", pathname)
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
        animatePing: true
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

  const isActiveMenuItem = (item: NavMenuItemProps) => pathname.startsWith(item.path);

  const handleCloseHSOverlay = () => {
    if (typeof window !== "undefined" && window.HSOverlay) {
      window.HSOverlay.close(SIDEBAR_SELECTOR);
    }
  };

  return (
    <nav className={clsx("w-full min-h-full flex flex-col justify-between gap-8 overflow-hidden", className)}>
      <div className="flex flex-col gap-4">
        <ul className="space-y-1">
          {primaryMenuItems.map((item, index) => (
            <NavMenuItem
              key={index}
              active={isActiveMenuItem(item)}
              {...item}
              onClick={handleCloseHSOverlay}
            />
          ))}
        </ul>
        <Button
          className="self-center"
          variant="primary"
          StartIcon={PlusIcon}
          onClick={() => {
            router.push("/projects/new");
            handleCloseHSOverlay();
          }}
        >
          New Project
        </Button>
      </div>
      <ul className="space-y-1">
        {secondaryMenuItems.map((item, index) => (
          <NavMenuItem
            key={index}
            {...item}
            active={isActiveMenuItem(item)}
            onClick={handleCloseHSOverlay}
          />
        ))}
      </ul>
    </nav>
  );
}

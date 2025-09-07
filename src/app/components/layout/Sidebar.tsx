import clsx from "clsx";
import { XIcon } from 'lucide-react'

import { SIDEBAR_ID, SIDEBAR_SELECTOR } from '@/app/constants/layout.constants';
import { Logo } from "@/app/components/ui/Logo";
import { IconButton } from "@/app/components/ui/IconButton";
import { ScrollableArea } from "@/app/components/ui/ScrollableArea";
import { NavMenu } from '@/app/components/navigation/NavMenu';
import { UserMenu } from '@/app/components/user/UserMenu';

export function Sidebar() {
  return (
    <div
      id={SIDEBAR_ID}
      className={clsx(
        "hs-overlay hs-overlay-open:translate-x-0 hs-overlay-backdrop-open:bg-gray-800/20",
        "w-[280px]",
        "[--auto-close:md] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0",
        "-translate-x-full transition-all duration-300 transform",
        "h-full hidden overflow-hidden fixed top-0 start-0 bottom-0 z-60",
        "bg-white border-r border-gray-200"
      )}
      role="dialog"
      tab-index="-1"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="p-3 xs:p-4 lg:px-6 lg:py-8 flex justify-between items-center gap-x-2">
          <div className="lg:hidden">
            <IconButton data-hs-overlay={SIDEBAR_SELECTOR}>
              <XIcon className="shrink-0 size-6 stroke-[var(--color-foreground)]" />
              <span className="sr-only">Close</span>
            </IconButton>
          </div>
          <div className="hidden lg:block">
            <Logo />
          </div>
        </div>
        <ScrollableArea className="h-full">
          <NavMenu className="pb-12 lg:pb-6" />
        </ScrollableArea>
        <div className="hidden lg:block p-6 pb-16 border-t border-gray-200">
          <UserMenu />
        </div>
      </div>
    </div>
  );
}

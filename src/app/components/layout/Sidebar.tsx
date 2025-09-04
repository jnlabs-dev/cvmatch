import clsx from "clsx";
import { X as CloseIcon } from 'lucide-react'

import { SIDEBAR_ID, SIDEBAR_SELECTOR } from '@/app/constants/layout.constants';
import { Logo } from "@/app/components/ui/Logo";
import { IconButton } from "@/app/components/ui/IconButton";
import { UserMenu } from '@/app/components/navigation/UserMenu';

export function Sidebar() {
  return (
    <div
      id={SIDEBAR_ID}
      className={clsx(
        "hs-overlay hs-overlay-open:translate-x-0",
        "w-[320px]",
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
        <div className="p-3 xs:p-4 lg:p-6 flex justify-between items-center gap-x-2">
          <div className="lg:hidden">
            <IconButton data-hs-overlay={SIDEBAR_SELECTOR}>
              <CloseIcon className="shrink-0 size-6 stroke-[var(--color-foreground)]" />
              <span className="sr-only">Close</span>
            </IconButton>
          </div>
          <div className="hidden lg:block">
            <Logo />
          </div>
        </div>

        <nav className="flex flex-col flex-1 overflow-y-auto">

        </nav>
        <div className="hidden lg:block p-6 border-t border-gray-200">
          <UserMenu />
        </div>
      </div>
    </div>
  );
}

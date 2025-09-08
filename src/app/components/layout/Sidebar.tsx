import clsx from "clsx";
import { XIcon, PanelLeftCloseIcon, PanelLeftOpenIcon } from 'lucide-react'

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
        "w-[280px] hs-overlay-minified:w-[82px]",
        "[--auto-close:md] xl:block xl:translate-x-0 xl:end-auto xl:bottom-0",
        "-translate-x-full transition-all duration-300 transform",
        "h-full hidden overflow-hidden fixed top-0 start-0 bottom-0 z-60",
        "bg-white border-r border-gray-200"
      )}
      role="dialog"
      tab-index="-1"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="p-3 xs:p-4 xl:px-6 xl:px-6 xl:py-8 flex justify-between items-center gap-x-2 relative">
          <div className="xl:hidden">
            <IconButton data-hs-overlay={SIDEBAR_SELECTOR}>
              <XIcon className="shrink-0 size-6 stroke-[var(--color-foreground)]" />
              <span className="sr-only">Close</span>
            </IconButton>
          </div>
          <button
            type="button"
            className="hidden xl:block absolute end-0 top-1/2 transform -translate-y-1/2 text-gray-300 p-[20px] hover:text-gray-500 -mr-[22px] -mt-[2px]"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={SIDEBAR_ID}
            aria-label="Minify navigation"
            data-hs-overlay-minifier={SIDEBAR_SELECTOR}
          >
            <PanelLeftOpenIcon className="hidden hs-overlay-minified:block shrink-0 size-4" />
            <PanelLeftCloseIcon className="hs-overlay-minified:hidden shrink-0 size-4" />
            <span className="sr-only">Navigation Toggle</span>
          </button>
          <div className="hidden xl:block">
            <div className="hs-overlay-minified:hidden">
              <Logo />
            </div>
            <div className="hidden hs-overlay-minified:inline-block">
              <Logo variant="condensed" />
            </div>
          </div>
        </div>
        <ScrollableArea className="h-full">
          <NavMenu className="pb-12 lg:pb-6" />
        </ScrollableArea>
        <div className="hidden lg:block border-t pb-16 border-gray-200">
          <div className="hs-overlay-minified:hidden p-6">
            <UserMenu />
          </div>
          <div className="hidden hs-overlay-minified:inline-block p-4 flex items-center justify-center">
            <UserMenu variant="condensed" />
          </div>
        </div>
      </div>
    </div>
  );
}

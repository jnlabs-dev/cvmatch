import clsx from "clsx";
import { MenuIcon } from 'lucide-react'


import { SIDEBAR_ID, SIDEBAR_SELECTOR, MOBILE_LAYOUT_BREAKPOINT } from '@/app/constants/layout.constants';

import { Button } from '@/app/components/ui/Button';

export function Header() {
  return (
    <header
      className={clsx(
        `${MOBILE_LAYOUT_BREAKPOINT}:hidden`,
        "flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800"
      )}
    >
      <div className="px-16 text-center">
        <Button
          variant="neutral"
          type="button"
          className="px-0 py-0"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls={SIDEBAR_ID}
          aria-label="Toggle navigation"
          data-hs-overlay={SIDEBAR_SELECTOR}
        >
          <MenuIcon />
        </Button>
      </div>
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <a className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white" href="#" aria-label="Brand">CVMatch</a>
      </nav>
    </header>
  );
}

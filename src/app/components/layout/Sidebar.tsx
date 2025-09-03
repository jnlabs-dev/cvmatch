import clsx from "clsx";
import { X as CloseIcon } from 'lucide-react'

import { SIDEBAR_ID, SIDEBAR_SELECTOR, SIDEBAR_WIDTH, MOBILE_LAYOUT_BREAKPOINT } from '@/app/constants/layout.constants';

export function Sidebar() {
  return (
    <div
      id={SIDEBAR_ID}
      className={clsx(
        "hs-overlay hs-overlay-open:translate-x-0",
        `w-[${SIDEBAR_WIDTH}] hs-overlay-minified:w-[${SIDEBAR_WIDTH}]`,
        `[--auto-close:${MOBILE_LAYOUT_BREAKPOINT}]`,
        `${MOBILE_LAYOUT_BREAKPOINT}:block`,
        `${MOBILE_LAYOUT_BREAKPOINT}:translate-x-0`,
        `${MOBILE_LAYOUT_BREAKPOINT}:end-auto`,
        `${MOBILE_LAYOUT_BREAKPOINT}:bottom-0`,
        "-translate-x-full transition-all duration-300 transform",
        "h-full hidden overflow-x-hidden fixed top-0 start-0 bottom-0 z-60",
        "bg-white border-e border-gray-200"
      )}
      role="dialog"
      tab-index="-1"
      aria-label="Sidebar" >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="py-4 px-2  flex justify-between items-center gap-x-2">

          <a className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white hs-overlay-minified:hidden" href="#" aria-label="Brand">CVMatch</a>

          <div className={`${MOBILE_LAYOUT_BREAKPOINT}:hidden`}>
            <button type="button" className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay={SIDEBAR_SELECTOR}>
              <CloseIcon className="shrink-0 size-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

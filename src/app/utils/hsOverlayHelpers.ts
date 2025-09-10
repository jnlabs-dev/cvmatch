import { SIDEBAR_SELECTOR } from "@/app/constants/layout.constants";

export const closeSidebar = () => {
  if (typeof window !== "undefined" && window.HSOverlay) {
    window.HSOverlay.close(SIDEBAR_SELECTOR);
  }
};

export const openSidebar = () => {
  if (typeof window !== "undefined" && window.HSOverlay) {
    window.HSOverlay.open(SIDEBAR_SELECTOR);
  }
};

export const toggleSidebarMinified = (isMinified: boolean) => {
  if (typeof window !== "undefined" && window.HSOverlay) {
    window.HSOverlay.minify(SIDEBAR_SELECTOR, isMinified);
  }
};

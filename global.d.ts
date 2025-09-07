import type { IStaticMethods } from "preline/dist";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: {
      open: (selector: string) => void;
      close: (selector: string) => void;
    } | undefined;
  }
}
export {};

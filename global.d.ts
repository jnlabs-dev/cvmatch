import type { IStaticMethods } from "preline/dist";
import type { ICollectionItem } from "@preline/overlay";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: {
      open: (selector: string) => void;
      close: (selector: string) => void;
      getInstance<T>(target: HTMLElement | string, isInstance?: boolean): ICollectionItem<T>;
    } | undefined;
  }
}
export {};

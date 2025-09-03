import { Header } from "@/app/components/layout/Header";
import { Sidebar } from "@/app/components/layout/Sidebar";

import { MOBILE_LAYOUT_BREAKPOINT } from '@/app/constants/layout.constants';

type LayoutProps = {
  children: React.ReactNode
};

export function Layout({
  children
}: LayoutProps) {

  return (
    <div className="hs-overlay-body-open hs-overlay-body-open:overflow-hidden">
      <Header />
      <Sidebar />
      <main className={`min-h-screen flex items-center justify-center ${MOBILE_LAYOUT_BREAKPOINT}:hs-overlay-layout-open:ms-64 transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}

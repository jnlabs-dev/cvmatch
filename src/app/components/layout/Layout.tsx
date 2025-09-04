import { Header } from "@/app/components/layout/Header";
import { Sidebar } from "@/app/components/layout/Sidebar";

type LayoutProps = {
  children: React.ReactNode
};

export function Layout({
  children
}: LayoutProps) {

  return (
    <div className="hs-overlay-body-open hs-overlay-body-open:overflow-hidden min-h-screen">
      <Sidebar />
      <div className="h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="flex flex-1 flex-col lg:hs-overlay-layout-open:ms-64 transition-all duration-300 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

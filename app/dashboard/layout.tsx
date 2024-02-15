
import { DashboardNavigation } from "./dashboard-nav"
import { redirect } from "next/navigation";
import { ReactNode } from "react";


export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col space-y-6 mt-10">
        <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNavigation />
          </aside>
          <main>{children}</main>
        </div>
      </div>
        );
}
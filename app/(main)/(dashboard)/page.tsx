
import { AlertsTable } from "@/components/tables/alerts-table";
import { MaintenanceTable } from "@/components/tables/maintenance-table";
import { SubLocationView } from "@/components/tables/sublocation-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | EL-EXE",
  keywords: ["home", "dashboard", "analytics", "alerts", "maintenance"],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Home | EL-EXE",
    description: "Home page of EL-EXE",
    siteName: "EL-EXE",
    images: [{ url: "https://example.com/og.png" }],
  },
};

export default function Home() {
  return (
    <div className=" h-full flex flex-col w-full space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SubLocationView/>
        <div className="flex flex-col space-y-4">
          <AlertsTable />
          <MaintenanceTable />
        </div>
      </div>
    </div>
  );
}
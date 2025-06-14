import { EnergyConsumptionChart } from "@/components/charts/consumption-chart";
import { PanelPowerDistributionTable } from "@/components/tables/panel-power-distribution-table";
import { TopKwhConsumptionTable } from "@/components/tables/top-kws-consumption-table";
import { AssetsTable } from "@/components/tables/assets-table";
import { PanelTable } from "@/components/tables/panel-table";
import { DownloadReport } from "@/components/dialogs/download-report";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | EL-EXE",
  keywords: ["dashboard", "analytics", "energy consumption", "power distribution"],
  description: "View your dashboard overview and analytics",
  openGraph: {
     type: "website",
     url: "https://example.com",
     title: "Dashboard | EL-EXE",
     description: "My Website Description",
     siteName: "Dashboard | EL-EXE",
     images: [{ url: "https://example.com/og.png" }],
  },
};

export default function Dashboard() {
  return (
    <div className=" h-full flex flex-col w-full space-y-4">
      <div className="flex items-center justify-between bg-card p-4 rounded-lg border shadow">
        <h2 className="text-xl font-semibold">Dashboard Overview</h2>
        <DownloadReport/>
      </div>
      {/* <Separator/> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <EnergyConsumptionChart />
          <PanelPowerDistributionTable />
          <TopKwhConsumptionTable />
        </div>
        <div className="flex flex-col space-y-4">
          <PanelTable />
          <AssetsTable />
        </div>
      </div>
    </div>
  );
}

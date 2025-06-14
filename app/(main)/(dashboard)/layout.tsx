import { StatsGrid } from "@/components/layouts/stats-grid";
import { MapPin, Package, AlertTriangle, AlertCircle } from "lucide-react";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-full flex flex-col w-full space-y-4">
      <StatsGrid
        stats={[
          {
            title: "Sub Locations",
            value: "21",
            description: "Total no. of sub locations",
            icon: MapPin,
          },
          {
            title: "Assets",
            value: "8",
            description: "Total no. of assets",
            icon: Package,
          },
          {
            title: "Warnings",
            value: "3",
            description: "Total no. of warnings",
            icon: AlertTriangle,
          },
          {
            title: "Alerts",
            value: "5",
            description: "Total no. of alerts",
            icon: AlertCircle,
          },
        ]}
      />

      <div>
  {children}
      </div>
    </div>
  );
}
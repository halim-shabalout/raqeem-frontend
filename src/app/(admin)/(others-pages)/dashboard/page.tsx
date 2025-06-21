import type { Metadata } from "next";
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function AdminDashboard() {
  return (
    <>
        <DashboardMetrics />
    </>
  );
}

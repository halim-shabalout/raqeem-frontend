import type { Metadata } from "next";
import { OriginalPermissionsComponent } from "@/components/permissions/original-permissions/OriginalPermissionsComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function OriginalPermissions() {
  return (
    <>
        <OriginalPermissionsComponent/>
    </>
  );
}

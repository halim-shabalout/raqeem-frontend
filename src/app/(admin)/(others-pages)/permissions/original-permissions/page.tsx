import { OriginalPermissionsComponent } from "@/components/permissions/original-permissions/OriginalPermissionsComponent";
import type { Metadata } from "next";

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

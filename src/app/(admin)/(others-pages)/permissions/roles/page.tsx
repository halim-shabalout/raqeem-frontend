import type { Metadata } from "next";
import { RolesComponent } from "@/components/permissions/roles/RolesComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function Roles() {
  return (
    <>
        <RolesComponent/>
    </>
  );
}

import type { Metadata } from "next";
import RoleComponent from "@/components/permissions/roles/RoleComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function Roles() {
  return (
    <>
        <RoleComponent/>
    </>
  );
}

import type { Metadata } from "next";
import { OriginalUsersComponent } from "@/components/users/original-users/OriginalUsersComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function OriginalUsers() {
  return (
    <>
        <OriginalUsersComponent/>
    </>
  );
}

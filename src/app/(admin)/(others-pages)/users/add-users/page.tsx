import type { Metadata } from "next";
import { AddUsersComponent } from "@/components/users/add-users/AddUsersComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function AddUsers() {
  return (
    <>
        <AddUsersComponent/>
    </>
  );
}

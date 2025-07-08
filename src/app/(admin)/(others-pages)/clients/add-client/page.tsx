import { AddClientComponent } from "@/components/clients/add-client/AddClientComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function Addclient() {
  return (
    <>
        <AddClientComponent/>
    </>
  );
}

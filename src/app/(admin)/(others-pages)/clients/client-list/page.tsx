import { ClientListComopnent } from "@/components/clients/client-list/ClientListComopnent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function ClientList() {
  return (
    <>
        <ClientListComopnent/>
    </>
  );
}

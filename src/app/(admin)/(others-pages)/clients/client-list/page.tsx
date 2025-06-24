import { CustomerListComopnent } from "@/components/clients/customer-list/CustomerListComopnent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function CustomerList() {
  return (
    <>
        <CustomerListComopnent/>
    </>
  );
}

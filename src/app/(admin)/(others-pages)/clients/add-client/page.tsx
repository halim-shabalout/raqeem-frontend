import { AddCustomerComponent } from "@/components/clients/add-customer/AddCustomerComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function AddCustomer() {
  return (
    <>
        <AddCustomerComponent/>
    </>
  );
}

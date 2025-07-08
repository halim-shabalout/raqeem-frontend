import type { Metadata } from "next";
import { QuotationsListComponent } from "@/components/quotations/quotations-list/QuotationsListComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function QuotationsList() {
  return (
    <>
        <QuotationsListComponent/>
    </>
  );
}

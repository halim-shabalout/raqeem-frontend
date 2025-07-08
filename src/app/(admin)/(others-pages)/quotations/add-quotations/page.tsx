import type { Metadata } from "next";
import { AddQuotationsComponent } from "@/components/quotations/add-quotations/AddQuotationsComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function AddQuotations() {
  return (
    <>
        <AddQuotationsComponent/>
    </>
  );
}

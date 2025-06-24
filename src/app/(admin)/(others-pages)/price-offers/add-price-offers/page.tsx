import type { Metadata } from "next";
import { AddPriceOffersComponent } from "@/components/price-offers/add-price-offers/AddPriceOffersComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function AddPriceOffers() {
  return (
    <>
        <AddPriceOffersComponent/>
    </>
  );
}

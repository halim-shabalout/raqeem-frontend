import type { Metadata } from "next";
import { PriceOffersListComponent } from "@/components/price-offers/price-offers-list/PriceOffersListComponent";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};

export default function PriceOffersList() {
  return (
    <>
        <PriceOffersListComponent/>
    </>
  );
}

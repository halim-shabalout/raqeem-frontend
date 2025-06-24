"use client";
import { useLocale } from "@/context/LocaleContext";

export const AddPriceOffersComponent = () => {
  const { messages } = useLocale();
  return (
        <>
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
                {messages["nav_add_price_offers"] || "Add"}
            </h3>
        </>
  );
};

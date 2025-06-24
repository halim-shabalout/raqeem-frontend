"use client";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import Link from "next/link";

export default function AuthSection() {
  const { messages } = useLocale();

  return (
   <div className="flex flex-col items-center max-w-xs">
                <Link href="/" className="block">
                  <Image
                    width={800}
                    height={80}
                    src="/images/logo/dark-theme-logo.png"
                    alt="Logo"
                  />
                </Link>
                <p className="text-center text-xlg text-gray-400 dark:text-white/80">
                {messages["register_sentence"] || "Create Quotes Fast. Close Deals Faster."}
                {/* Create Quotes Fast. Close Deals Faster. */}
                </p>
              </div>
  );
}

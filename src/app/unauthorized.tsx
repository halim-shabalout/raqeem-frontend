import GridShape from "@/components/common/GridShape";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UnauthorizedPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-10">
      <GridShape />

      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
          Access Denied
        </h1>

        <Image
          src="/images/error/401.svg"
          alt="Unauthorized"
          className="dark:hidden"
          width={300}
          height={120}
        />
        <Image
          src="/images/error/401.svg"
          alt="Unauthorized"
          className="hidden dark:block"
          width={300}
          height={120}
        />

        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          You do not have permission to view this page. Please log in to continue.
        </p>

        <Link
          href="/signin"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          Go to Sign In
        </Link>
      </div>

      <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} – Raqeme
      </p>
    </div>
  );
}

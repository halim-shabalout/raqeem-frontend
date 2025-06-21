"use client";

import { useLocale } from "@/context/LocaleContext";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";

export default function ProfilePage() {
    const { messages } = useLocale();


    return (
        <>
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
                {messages["p_profile"] || "Profile"}
            </h3>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                    <div className="space-y-6">
                        <UserMetaCard  />
                        <UserInfoCard />
                    </div>
                </div>
        </>
    );
}

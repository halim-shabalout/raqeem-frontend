"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import { HorizontaLDots } from "@/icons";
import { useLocale } from "@/context/LocaleContext";
import AddRoleForm from "./AddRoleForm";
import RoleCard from "@/components/common/RoleCard";

const roles = [
  {
    name: "Administrator",
    users: 4,
    team: [
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
    ],
  },
  {
    name: "Editor",
    users: 2,
    team: [
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
    ],
  },
    {
    name: "Moderator",
    users: 2,
    team: [
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
    ],
  },
    {
    name: "Contributor",
    users: 2,
    team: [
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
      "/images/user/user-2.png",
    ],
  },
  
];
 const RolesList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { messages } = useLocale();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {messages[""] || "Roles List"}
        </h3>
        <AddRoleForm />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <RoleCard key={index} title="">
            <div className="relative">
              <div className="absolute top-0 right-0">
                <button
                  className="dropdown-toggle p-1"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <HorizontaLDots />
                </button>

                <Dropdown
                  isOpen={openIndex === index}
                  onClose={() => setOpenIndex(null)}
                >
                  <DropdownItem onClick={() => alert("Edit Clicked")}>
                    Edit
                  </DropdownItem>
                </Dropdown>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {role.team.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-900"
                  >
                    <Image
                      src={img}
                      width={32}
                      height={32}
                      alt={`User ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-base font-semibold text-gray-800 dark:text-white/90">
                {role.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Total {role.users} users
              </p>
            </div>
          </RoleCard>
        ))}
      </div>
    </>
  );
};

export default RolesList;
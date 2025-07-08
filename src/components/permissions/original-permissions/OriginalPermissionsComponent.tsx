"use client";
import { useLocale } from "@/context/LocaleContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { stat } from "fs";
import Badge from "@/components/ui/badge/Badge";


export const OriginalPermissionsComponent = () => {
  const { messages } = useLocale();
 
const rolesData = [
  {
    id: 1,
    name: "Manager",
    assignedTo: {
      name: "Ali Hussein"
    },
    createdAt: "2024-06-12",
    status: "manager",
  },
  {
    id: 2,
    name: "Add & Remove users",
    assignedTo: {
      name: "Sara Khaled"
    },
    createdAt: "2024-06-28",
    status: "users"
  },
  {
    id: 3,
    name: "Moderator",
    assignedTo: {
      name: "Mohammed Said"
    },
    createdAt: "2024-07-03",
    status: "Administrator",
  },
  {
    id: 4,
    name: "super admin",
    assignedTo: {
      name: "Mohammed Said"
    },
    createdAt: "2024-07-03",
    status: "super admin",
  },
  {
    id: 5,
    name: "quick",
    assignedTo: {
      name: "Mohammed Said"
    },
    createdAt: "2024-07-03",
    status: "worker",
  },
];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-6 py-3 text-start font-medium text-gray-500 text-theme-xs dark:text-gray-400"
                >
                  {messages["role_name"] || "Name"}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-6 py-3 text-start font-medium text-gray-500 text-theme-xs dark:text-gray-400"
                >
                  {messages["assigned_to"] || "Assigned To"}
                </TableCell>
                <TableCell
                  isHeader
                  className="px-6 py-3 text-start font-medium text-gray-500 text-theme-xs dark:text-gray-400"
                >
                  {messages["created_date"] || "Created Date"}
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {rolesData.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="px-6 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                    {role.name}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                    <div className="flex items-center gap-3">
                      <Badge
                       size="sm"
                          color={
                            role.status === "manager"
                              ? "success"
                              : role.status === "users"
                              ? "warning"
                              : "error"
                          }
                      >
                        {role.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                    {role.createdAt}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
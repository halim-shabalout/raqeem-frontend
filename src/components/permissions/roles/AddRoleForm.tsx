import { useModal } from '@/hooks/useModal';
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import React, { useState } from 'react';
import Checkbox from "@/components/form/input/Checkbox";
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { useLocale } from '@/context/LocaleContext';

const AddRoleForm = () => {
      const { messages } = useLocale();
  const permissionsList = [
    "User Management",
    "Content Management",
    "Disputes Management",
    "Database Management",
    "Financial Management",
    "Reporting",
    "API Control",
    "Repository Management",
    "Payroll",
  ];

  const { openModal, closeModal, isOpen } = useModal();

  type PermissionActions = {
    read: boolean;
    write: boolean;
    create: boolean;
  };

  type PermissionsState = {
    [key: string]: PermissionActions;
  };

  const [permissions, setPermissions] = useState<PermissionsState>({
    "User Management": { read: false, write: false, create: false },
    "Content Management": { read: false, write: false, create: false },
    "Disputes Management": { read: false, write: false, create: false },
    "Database Management": { read: false, write: false, create: false },
    "Financial Management": { read: false, write: false, create: false },
    "Reporting": { read: false, write: false, create: false },
    "API Control": { read: false, write: false, create: false },
    "Repository Management": { read: false, write: false, create: false },
    "Payroll": { read: false, write: false, create: false },
  });

  const handlePermissionChange = (
    permissionName: string,
    action: "read" | "write" | "create",
    value: boolean
  ) => {
    setPermissions((prev) => ({
      ...prev,
      [permissionName]: {
        ...prev[permissionName],
        [action]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Saving changes...");
    console.log("Permissions: ", permissions);
    closeModal();
  };

  return (
    <div>
    <Button size="sm" onClick={openModal}>
  {messages["add_role"] || "Add Role"}
</Button>


      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form>
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90 text-center">
  {messages["add_role_title"] || "Add Role"}
</h4>


          <div className="grid grid-cols-1 gap-y-5">
            <div>
             <Label>{messages["role_name_label"] || "Name"}</Label>
<Input type="text" placeholder={messages["role_name_placeholder"] || "Role Name"} className="w-full" />
            </div>
          </div>

          <div className="mt-6">
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
<TableCell isHeader>{messages["permission"] || "Permission"}</TableCell>
<TableCell isHeader>{messages["read"] || "Read"}</TableCell>
<TableCell isHeader>{messages["write"] || "Write"}</TableCell>
<TableCell isHeader>{messages["create"] || "Create"}</TableCell>

                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {permissionsList.map((permission, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-5 py-3 text-gray-800 text-theme-sm dark:text-white/90">
                      {permission}
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      <Checkbox
                        checked={permissions[permission].read}
                        onChange={(value) =>
                          handlePermissionChange(permission, "read", value)
                        }
                      />
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      <Checkbox
                        checked={permissions[permission].write}
                        onChange={(value) =>
                          handlePermissionChange(permission, "write", value)
                        }
                      />
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      <Checkbox
                        checked={permissions[permission].create}
                        onChange={(value) =>
                          handlePermissionChange(permission, "create", value)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
  {messages["close"] || "Close"}
</Button>
<Button size="sm" onClick={handleSave}>
  {messages["submit"] || "Submit"}
</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddRoleForm;

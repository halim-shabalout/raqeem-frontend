"use client";

import { useLocale } from "@/context/LocaleContext";
import React, { useState } from "react";
import InputField from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";

export const AddUsersComponent = () => {
  const { messages } = useLocale();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "",
    company: "",
    country: "",
    phone: "",
  });

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "author", label: "Author" },
    { value: "editor", label: "Editor" },
    { value: "subscriber", label: "Subscriber" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          {messages["nav_add_users"] || "Add"}
        </h3>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <InputField
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={form.fullName}
            onChange={handleChange}
             
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="user@example.com"
            value={form.email}
            onChange={handleChange}
             
          />
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role">Role</Label>
          <div className="relative">
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
               
              className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700"
            >
              <option value="" disabled>
                Select Role
              </option>
              {roleOptions.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Company Name */}
        <div>
          <Label htmlFor="company">Company Name</Label>
          <InputField
            id="company"
            name="company"
            type="text"
            placeholder="Company Inc."
            value={form.company}
            onChange={handleChange}
             
          />
        </div>

        {/* Country Name */}
        <div>
          <Label htmlFor="country">Country Name</Label>
          <InputField
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
             
          />
        </div>

        {/* Phone Number */}
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <InputField
            id="phone"
            name="phone"
            type="text"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={handleChange}
             
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
        <Button variant="primary">
            {messages["submit"] || "Submit"}
        </Button>

          <button
            type="button"
            onClick={() =>
              setForm({
                fullName: "",
                email: "",
                role: "",
                company: "",
                country: "",
                phone: "",
              })
            }
            className="bg-error-500 text-white px-4 py-2 rounded-lg hover:bg-error-400 transition-colors"
          >
            {messages["cancel"] || "Cancel"}
          </button>
        </div>
      </form>
    </>
  );
};

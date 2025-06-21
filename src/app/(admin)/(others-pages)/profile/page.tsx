import ProfilePage from "@/components/user-profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raqeem",
  description: "Quotations",
};
export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}

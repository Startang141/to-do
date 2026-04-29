"use client";

import { useAuth } from "@/src/context/AuthContext";
import { CircleUserRound } from "lucide-react";

const NavItem = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex items-center gap-2">
        <p>{user?.name}</p>
        <CircleUserRound className="text-green-700" />
      </div>
    </>
  );
};

export default NavItem;

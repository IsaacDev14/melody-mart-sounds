// src/components/Navbar.tsx
import { Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;

// src/components/Sidebar.tsx
import { Home, Users, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Melody Mart
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Home size={18} /> Dashboard
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Users size={18} /> Employees
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Settings size={18} /> Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

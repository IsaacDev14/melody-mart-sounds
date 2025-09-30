// src/components/Sidebar.tsx
import { Home, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Melody Mart
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <Home size={18} /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <Users size={18} /> Employees
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <Settings size={18} /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

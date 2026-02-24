<<<<<<< HEAD
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Code, User, Wallet, FileText, Globe, LayoutDashboard } from "lucide-react";
import { Avatar } from "./Avatar";
=======
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Code, User, Wallet, FileText, Globe, Activity } from 'lucide-react';
import { Avatar } from './Avatar';
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5

const AppNav: React.FC = () => {
  // Mock user data - replace with actual user context
  const currentUser = {
    email: 'user@example.com',
    name: 'John Doe',
    imageUrl: undefined,
  };

  return (
    <nav className="flex items-center gap-8">
      <NavLink
        to="/payroll"
        className={({ isActive }) =>
<<<<<<< HEAD
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${isActive
            ? "text-(--accent) bg-white/5"
            : "text-(--muted) hover:bg-white/10 hover:text-white"
=======
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white'
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
          }`
        }
      >
        <span className="opacity-70">
          <Wallet className="w-4 h-4" />
        </span>
        Payroll
      </NavLink>

      <NavLink
        to="/employee"
        className={({ isActive }) =>
<<<<<<< HEAD
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${isActive
            ? "text-(--accent) bg-white/5"
            : "text-(--muted) hover:bg-white/10 hover:text-white"
=======
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white'
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
          }`
        }
      >
        <span className="opacity-70">
          <User className="w-4 h-4" />
        </span>
        Employees
      </NavLink>

      <NavLink
        to="/portal"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${isActive
            ? "text-(--accent) bg-white/5"
            : "text-(--muted) hover:bg-white/10 hover:text-white"
          }`
        }
      >
        <span className="opacity-70">
          <LayoutDashboard className="w-4 h-4" />
        </span>
        My Portal
      </NavLink>

      <NavLink
        to="/reports"
        className={({ isActive }) =>
<<<<<<< HEAD
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${isActive
            ? "text-(--accent) bg-white/5"
            : "text-(--muted) hover:bg-white/10 hover:text-white"
=======
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white'
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
          }`
        }
      >
        <span className="opacity-70">
          <FileText className="w-4 h-4" />
        </span>
        Reports
      </NavLink>

      <NavLink
        to="/cross-asset-payment"
        className={({ isActive }) =>
<<<<<<< HEAD
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${isActive
            ? "text-(--accent) bg-white/5"
            : "text-(--muted) hover:bg-white/10 hover:text-white"
=======
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white'
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
          }`
        }
      >
        <span className="opacity-70">
          <Globe className="w-4 h-4" />
        </span>
        Cross-Asset
      </NavLink>

<<<<<<< HEAD
=======
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white'
          }`
        }
      >
        <span className="opacity-70">
          <Activity className="w-4 h-4" />
        </span>
        History
      </NavLink>

>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
      <div className="w-px h-5 bg-(--border-hi) mx-2" />

      <NavLink
        to="/debug"
        className={({ isActive }) =>
<<<<<<< HEAD
          `flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide border transition ${isActive
            ? "text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)]"
            : "text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)] hover:bg-[rgba(124,111,247,0.12)]"
=======
          `flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide border transition ${
            isActive
              ? 'text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)]'
              : 'text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)] hover:bg-[rgba(124,111,247,0.12)]'
>>>>>>> 3b0f1227ba025061b1766c030caf0ed16f32d9d5
          }`
        }
      >
        <Code className="w-4 h-4" />
        debugger
      </NavLink>

      <Link to="/help" className="text-blue-500 text-xs underline ml-2">
        Need help?
      </Link>

      <div className="p-1 bg-gray-50 rounded-lg flex items-center gap-2">
        <Avatar
          email={currentUser.email}
          name={currentUser.name}
          imageUrl={currentUser.imageUrl}
          size="sm"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-gray-800 truncate">{currentUser.name}</p>
          <p className="text-[10px] text-gray-500 truncate">{currentUser.email}</p>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;

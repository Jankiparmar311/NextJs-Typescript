"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface SidebarProps {
  links: { label: string; href: string; icon: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Force sidebar open

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full bg-gray-800 text-white w-64 p-5 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Sidebar</h2>
          <button className="text-white text-2xl" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="mt-6 space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex items-center no-underline text-white text-lg p-2 hover:text-gray-300"
              >
                <span className="text-xl mr-3">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 text-black text-2xl bg-gray-300 p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Sidebar;

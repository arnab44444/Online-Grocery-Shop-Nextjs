"use client";
import React from "react";
import Link from "next/link";

const menu = [
  { label: "Home", href: "/dashboard" },
  { label: "Add Product", href: "/dashboard/add-product" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-400 shadow-md min-h-screen">
      <div className="p-6 text-xl font-bold border-b">Admin</div>
      <nav className="mt-4 flex flex-col">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-6 py-3 hover:bg-gray-100 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

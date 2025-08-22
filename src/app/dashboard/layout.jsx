"use client";
import React from "react";
import Sidebar from "../components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-blue-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

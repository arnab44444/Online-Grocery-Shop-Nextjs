"use client";
import React from "react";
import UserCard from "../components/cards"; // import your updated card
import { motion } from "framer-motion";

export default function DashboardHome() {
  return (
    <div className="p-6 min-h-screen bg-blue-200 flex flex-col items-center gap-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-blue-800 mb-6"
      >
        Dashboard
      </motion.h1>

      {/* User Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <UserCard />
      </motion.div>

      {/* Future Stats / Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
        {/* You can add more cards here like Products, Orders, Revenue, etc. */}
      </div>
    </div>
  );
}

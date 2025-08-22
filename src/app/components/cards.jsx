"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function UserCard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="p-6 max-w-sm mx-auto animate-pulse bg-white rounded-xl shadow-md">
        <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md text-center">
        <p className="text-gray-600">You are not logged in.</p>
      </div>
    );
  }

  const { user, provider } = session;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
    >
      <img
        src={user.image || "/placeholder.png"}
        alt={user.name}
        className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 object-cover"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="mt-2 text-sm text-gray-500 capitalize">Provider: {provider}</p>
    </motion.div>
  );
}

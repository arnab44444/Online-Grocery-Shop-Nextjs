"use client";
import React from "react";
import { motion } from "framer-motion";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    await registerUser({ name, email, password });
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Full Name"
        name="name"
        className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
      >
        Register
      </motion.button>
    </form>
  );
}

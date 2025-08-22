"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;
    toast("Submitting your login...");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if(!response.error){
        toast.success("Login successful!");
        router.push("/");
        formData.reset();
      }
      else {
        // alert("Login failed. Please check your credentials.");
        toast.error("Login failed. Please check your credentials.");
      }
      // console.log(email, password);
    } catch (error) {
      console.log(error);
      // alert("Login failed. Please check your credentials.");
      toast.error("Login failed. Please check your credentials.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Input */}
      <motion.input
        type="email"
        placeholder="Email Address"
        name="email"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.02] transition"
        whileFocus={{ scale: 1.02 }}
      />

      {/* Password Input */}
      <motion.input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.02] transition"
        whileFocus={{ scale: 1.02 }}
      />

      {/* Login Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-lg font-semibold transition"
      >
        Login
      </motion.button>
    </form>
  );
}

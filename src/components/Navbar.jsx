"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBasketShopping } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const MotionLink = motion(Link);

  const navMenu = () => (
    <>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">Home</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/products">Products</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/blogs">Blogs</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/contactUs">Contact Us</Link>
      </motion.li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-md px-4 sticky top-0 z-50"
    >
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-100  text-black rounded-box z-[999] mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaBasketShopping className="w-10 h-10 text-blue-900" />
            </motion.div>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="font-bold text-lg md:text-xl text-blue-900"
            >
              Grocery Shop
            </motion.h1>
          </motion.div>
        </Link>
      </div>

      {/* Center Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium text-blue-900">
          {navMenu()}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex gap-2 relative">
        {status === "authenticated" ? (
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {/* Avatar */}
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-blue-900 shadow-md"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-blue-900" />
              )}
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50"
                >
                  <ul className="flex flex-col p-2">
                    <motion.li
                      whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
                      className="px-4 py-2  rounded-md cursor-pointer text-blue-900"
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.05, backgroundColor: "#fee2e2" }}
                      className="px-4 py-2 rounded-md cursor-pointer text-red-600"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <>
            <MotionLink
              href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline rounded-lg border-2 border-blue-900 text-blue-900 hover:bg-blue-200 hover:text-blue-900 transition-all duration-300"
            >
              Register
            </MotionLink>
            <MotionLink
              href="/login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn rounded-lg bg-blue-900 text-white hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Login
            </MotionLink>
          </>
        )}
      </div>
    </motion.div>
  );
}

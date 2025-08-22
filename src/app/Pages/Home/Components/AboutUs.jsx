"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://i.ibb.co.com/vrcHGRk/fikri-rasyid-eze-C8-cl-ZSs-unsplash.jpg"
            alt="Grocery Shop"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg font-medium">
            Since 2015
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-blue-900"
          >
            Who We Are
          </motion.h2>

          <p className="text-gray-600 leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-700">GroceryShop</span>, we believe
            fresh and healthy living should be accessible to everyone. Since 2015, 
            we’ve been delivering farm-fresh fruits, organic vegetables, and daily 
            essentials to thousands of happy families — quickly, affordably, and with care.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-blue-600 text-xl" />
              Handpicked Farm-Fresh Products
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-blue-600 text-xl" />
              Same-Day Doorstep Delivery
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-blue-600 text-xl" />
              10,000+ Satisfied Customers
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-blue-600 text-xl" />
              Affordable Prices & Great Value
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

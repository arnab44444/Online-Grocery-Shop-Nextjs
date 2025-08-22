"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaSmile, FaAppleAlt, FaTruck, FaCrown } from "react-icons/fa";

export default function Ratings() {
  const stats = [
    {
      id: 1,
      label: "Happy Customers",
      value: 10000,
      suffix: "+",
      icon: <FaSmile className="w-10 h-10 text-yellow-500" />,
    },
    {
      id: 2,
      label: "Fresh Products",
      value: 2500,
      suffix: "+",
      icon: <FaAppleAlt className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      label: "Orders Delivered",
      value: 50000,
      suffix: "+",
      icon: <FaTruck className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 4,
      label: "Years of Excellence",
      value: 12,
      suffix: "+",
      icon: <FaCrown className="w-10 h-10 text-purple-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why People <span className="text-blue-600">Trust Us</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          From farm-fresh quality to doorstep delivery — here’s why thousands
          choose us every day.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                <CountUp
                  end={stat.value}
                  duration={3}
                  suffix={stat.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

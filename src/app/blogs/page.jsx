"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "5 Fresh Vegetables You Should Eat Daily",
      desc: "Discover the healthiest vegetables to include in your daily meals for better immunity and energy.",
      img: "https://i.ibb.co.com/WNKLyF7V/inigo-de-la-maza-s285s-Dw5-Ikc-unsplash.jpg",
      date: "August 20, 2025",
      fullDesc: `Eating fresh vegetables daily ...`,
    },
    {
      id: 2,
      title: "Why Organic Fruits Are Worth It",
      desc: "Organic fruits may cost more, but here’s why they’re better for your health and the environment.",
      img: "https://i.ibb.co.com/ZpKrVw3Z/jacopo-maiarelli-g-OUx23-DNks-unsplash.jpg",
      date: "August 15, 2025",
      fullDesc: `Organic fruits are grown ...`,
    },
    {
      id: 3,
      title: "Top 10 Grocery Shopping Tips",
      desc: "Save money and shop smarter with these practical tips for your weekly grocery run.",
      img: "https://i.ibb.co.com/gLbKyv9V/eiliv-aceron-Yl-Amh-X-Ss-E-unsplash.jpg",
      date: "August 10, 2025",
      fullDesc: `Grocery shopping can be stressful ...`,
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds fake delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10"
      >
        Our Latest Blogs
      </motion.h1>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {loading
          ? // Skeleton Loader
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse flex flex-col"
                >
                  <div className="h-48 w-full bg-gray-300" />
                  <div className="p-5 space-y-3 flex-grow">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="mt-4 h-10 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              ))
          : blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <h2 className="text-xl font-semibold text-blue-900 mt-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 mt-2 flex-grow">{blog.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center px-4 z-50"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedBlog.img}
                alt={selectedBlog.title}
                className="h-56 w-full object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-blue-900 mt-4">
                {selectedBlog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {selectedBlog.date}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedBlog.fullDesc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

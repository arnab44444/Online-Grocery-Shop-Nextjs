"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //   useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("/api/products");
  //       const data = await res.json();

  //       // এখানে check করো
  //       if (Array.isArray(data)) {
  //         setProducts(data);
  //       } else if (Array.isArray(data.products)) {
  //         setProducts(data.products); // object হলে ভেতরের array ধরো
  //       } else {
  //         setProducts([]); // fallback
  //       }
  //     } catch (err) {
  //       console.error("Error fetching products:", err);
  //       setProducts([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // S9bH9hY0EDd7hKET

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {loading
        ? [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-white border border-gray-200 rounded-2xl shadow-lg animate-pulse flex flex-col"
            >
              <div className="h-48 bg-gray-300 rounded-xl mb-4" />
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
              <div className="h-10 bg-gray-300 rounded w-24 self-start" />
            </div>
          ))
        : products.map((product) => (
            <motion.div
              key={product._id}
              className="p-4 bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col hover:shadow-2xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.photo_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                {/* Badge */}
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                  New
                </span>
              </div>

              {/* Product Info */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="text-blue-600 font-bold text-lg mt-3">
                ৳ {product.price}
              </p>

              {/* Button */}
              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-shadow shadow-md text-center"
              >
                View Details
              </Link>
            </motion.div>
          ))}
    </div>
  );
}

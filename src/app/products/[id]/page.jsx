"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center animate-pulse bg-blue-50">
        <div className="w-3/4 h-64 bg-blue-200 rounded-xl mb-4" />
        <div className="w-1/2 h-8 bg-blue-200 rounded mb-2" />
        <div className="w-2/3 h-4 bg-blue-200 rounded mb-2" />
      </div>
    );
  }

  if (!product || product.error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
        <p className="text-red-600 text-lg">Product not found.</p>
        <Link
          href="/products"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen pt-24 pb-24 px-4 flex flex-col items-center bg-blue-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        {/* Product Card */}
        <motion.div className="bg-white rounded-3xl shadow-2xl p-6 max-w-3xl w-full flex flex-col md:flex-row gap-8">
          <motion.img
            src={product.photo_url}
            alt={product.name}
            className="w-full md:w-1/2 h-80 md:h-auto object-cover rounded-xl shadow-lg"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div className="flex-1 flex flex-col justify-between space-y-4">
            <div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-blue-700 mb-2"
                layout
              >
                {product.name}
              </motion.h1>
              <motion.p className="text-gray-700 text-lg mb-2" layout>
                {product.description}
              </motion.p>
              <motion.p className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-4" layout>
                ৳ {product.price}
              </motion.p>

              <motion.div className="space-y-2" layout>
                {Object.entries(product).map(([key, value]) => {
                  if (["_id", "name", "description", "price", "photo_url"].includes(key))
                    return null;
                  return (
                    <motion.p key={key} className="text-gray-600 text-sm md:text-base" layout>
                      <span className="font-semibold capitalize">{key.replace("_", " ")}:</span> {String(value)}
                    </motion.p>
                  );
                })}
              </motion.div>
            </div>

            <Link
              href="/products"
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md self-start"
            >
              ← Back to Products
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

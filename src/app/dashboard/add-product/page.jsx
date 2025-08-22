"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    expiry_date: "",
    packaging: "",
    photo_url: "",
  });

  const [loading, setLoading] = useState(false);

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        brand: "",
        expiry_date: "",
        packaging: "",
        photo_url: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-start pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border border-blue-200"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <input
            type="date"
            name="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <input
            type="text"
            name="packaging"
            placeholder="Packaging (e.g., Box / Tetra Pak)"
            value={formData.packaging}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <input
            type="text"
            name="photo_url"
            placeholder="Photo URL"
            value={formData.photo_url}
            onChange={handleChange}
            required
            className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />

          {/* Live image preview */}
          {formData.photo_url && (
            <motion.img
              src={formData.photo_url}
              alt="Preview"
              className="w-full h-60 object-cover rounded-lg shadow-md mt-2 border border-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.png";
              }}
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

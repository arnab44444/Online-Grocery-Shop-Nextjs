"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_swielk5",
        "template_1hwj6gf",
        form.current,
        "nwG4mBCHFcJQKq_Xr"
      )
      .then(
        () => {
          setLoading(false);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      {/* Heading */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-8"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have questions about our grocery shop, products, or services? We’re
            here to help! Reach out to us anytime, and we’ll get back to you as
            soon as possible.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> arnabbiswas661@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +8801731531449
            </li>
            <li>
              <strong>Address:</strong> DewanBazer, Chittagong, Bangladesh
            </li>
          </ul>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full text-black px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {isSent && (
            <p className="text-blue-600 text-center font-semibold mt-2">
              Your message has been sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

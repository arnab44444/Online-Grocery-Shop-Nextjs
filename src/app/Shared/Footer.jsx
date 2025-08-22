"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBasketShopping } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import SupportModal from "./SupportModal";

// Social links data
const socialLinks = [
  {
    icon: FaFacebook,
    color: "#1877f2",
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    color: "#E1306C",
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedin,
    color: "#0A66C2",
    href: "https://linkedin.com",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 pt-12 pb-8 px-6 md:px-20 shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-2"
          >
            <FaBasketShopping className="w-8 h-8 text-green-900" />
            <h1 className="text-2xl font-bold text-green-950">Grocery Shop</h1>
          </motion.div>
          <p className="text-sm text-gray-800">
            Fresh groceries delivered to your doorstep. Eat healthy, shop smart, and enjoy premium quality every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-green-950">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><Link href="/" className="hover:text-green-700 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-700 transition-colors">Products</Link></li>
            <li><Link href="/blogs" className="hover:text-green-700 transition-colors">Blogs</Link></li>
            <li><Link href="/contactUs" className="hover:text-green-700 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-green-950">Customer Support</h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>
              <SupportModal
                title="FAQs"
                triggerText="FAQs"
                content="Find answers to the most frequently asked questions about our services."
              />
            </li>
            <li>
              <SupportModal
                title="Shipping & Returns"
                triggerText="Shipping & Returns"
                content="Fast delivery across Bangladesh. Returns accepted within 7 days."
              />
            </li>
            <li>
              <SupportModal
                title="Privacy Policy"
                triggerText="Privacy Policy"
                content="We respect your privacy. Your personal data is safe and secure."
              />
            </li>
            <li>
              <SupportModal
                title="Terms & Conditions"
                triggerText="Terms & Conditions"
                content="By using our services, you agree to follow our terms responsibly."
              />
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-green-950">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, color: social.color }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer text-green-900"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t mt-10 pt-4 text-center text-sm text-gray-700"
      >
        © {new Date().getFullYear()} Grocery Shop. All rights reserved by{" "}
        <motion.span
          animate={{ color: ["#16a34a", "#eab308", "#ef4444", "#3b82f6", "#16a34a"] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          className="font-semibold"
        >
          Arnab Biswas
        </motion.span>
        .
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

"use client";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin =  (providerName) => {
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success("Logged in Successfully");
    } else {
      toast.error("Failed to login");
    }
  }, [session?.status]);
  return (
    <div className="flex gap-4 justify-center">
      <motion.button
        onClick={() => handleSocialLogin("google")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
      >
        <FaGoogle className="text-lg" />
        Google
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSocialLogin("github")}
        className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-black transition"
      >
        <FaGithub className="text-lg" />
        GitHub
      </motion.button>
    </div>
  );
}

"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success(`Logged in Successfully`);
    } else {
      toast.error(`Failed to login`);
    }
  }, [session?.status]);
  return (
    <div className="flex flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSocialLogin("google")}
        className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition"
      >
        <FcGoogle size={22} />
        <span className="font-medium">Continue with Google</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSocialLogin("github")}
        className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition"
      >
        <FaGithub size={22} className="text-gray-800" />
        <span className="font-medium">Continue with GitHub</span>
      </motion.button>
    </div>
  );
}

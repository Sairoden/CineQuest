"use client";

// STYLES
import { motion } from "framer-motion";
import { FaFilm, FaGoogle } from "react-icons/fa";

// HOOKS
import { useLoginWithGoogle } from "@/hooks";

export default function Login() {
  const { loginWithGoogle, isPending } = useLoginWithGoogle();

  const handleGoogleSignIn = () => {
    loginWithGoogle();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2A2E3F] bg-opacity-60 rounded-3xl shadow-2xl p-12 max-w-md w-full backdrop-filter backdrop-blur-xl relative border border-white/10"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />

        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-24 h-24 bg-gradient-to-r from-[#F76641] to-[#FF8A6A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <FaFilm className="text-white text-4xl" />
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#F76641] to-[#FF9F59] text-transparent bg-clip-text">
              CineQuest
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg mb-12"
          >
            Your journey through cinema begins here
          </motion.p>

          <motion.button
            disabled={isPending}
            onClick={handleGoogleSignIn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white bg-opacity-95 hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <FaGoogle className="text-xl text-[#F76641]" />
            <span className="text-lg">Continue with Google</span>
          </motion.button>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-gray-400 text-sm px-4"
          >
            By continuing, you agree to our{" "}
            <span className="text-[#F76641] hover:text-[#FF8A6A] underline decoration-solid">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-[#F76641] hover:text-[#FF8A6A] underline decoration-solid">
              Privacy Policy
            </span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

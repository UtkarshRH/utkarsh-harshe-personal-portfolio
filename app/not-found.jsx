"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Ghost, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-center px-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 text-6xl font-bold text-gray-800"
      >
        <Ghost className="w-10 h-10 text-gray-700" />
        404
      </motion.div>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-xl text-gray-600"
      >
        Oops! The page you're looking for isn't here.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-white bg-black hover:bg-gray-900 transition-colors rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}

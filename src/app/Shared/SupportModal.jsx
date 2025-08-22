"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SupportModal = ({ title, content, triggerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button / Link */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm hover:text-primary transition-colors"
      >
        {triggerText}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // click backdrop to close
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-base-100 w-[90%] md:w-[500px] rounded-2xl shadow-xl p-6 relative"
              onClick={(e) => e.stopPropagation()} // prevent backdrop close
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-3">{title}</h2>

              {/* Content */}
              <p className="text-sm text-gray-600 leading-relaxed">{content}</p>

              {/* Footer */}
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary btn-sm text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportModal;

"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto mt-20 px-4 sm:px-6 font-mono"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8 text-center"
      >
        Contact Info
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Phone */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative bg-black/40 backdrop-blur-md border border-slate-800 rounded-xl
                     p-5 sm:p-6 shadow-xl transition will-change-transform
                     hover:border-cyan-400 hover:shadow-cyan-500/20"
        >
          <div className="absolute inset-0 rounded-xl bg-cyan-500/10 blur-xl opacity-0 hover:opacity-100 transition" />
          <p className="relative text-slate-400 text-xs sm:text-sm mb-2">
            📞 Phone
          </p>
          <a
            href="tel:9398768187"
            className="relative text-cyan-400 text-sm sm:text-base hover:underline"
          >
            9398768187
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative bg-black/40 backdrop-blur-md border border-slate-800 rounded-xl
                     p-5 sm:p-6 shadow-xl transition will-change-transform
                     hover:border-purple-400 hover:shadow-purple-500/20"
        >
          <div className="absolute inset-0 rounded-xl bg-purple-500/10 blur-xl opacity-0 hover:opacity-100 transition" />
          <p className="relative text-slate-400 text-xs sm:text-sm mb-2">
            📧 Email
          </p>
          <a
            href="mailto:chikka.nishanth007@gmail.com"
            className="relative text-purple-400 text-sm sm:text-base break-all hover:underline"
          >
            chikka.nishanth007@gmail.com
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative bg-black/40 backdrop-blur-md border border-slate-800 rounded-xl
                     p-5 sm:p-6 shadow-xl transition will-change-transform
                     hover:border-emerald-400 hover:shadow-emerald-500/20"
        >
          <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-xl opacity-0 hover:opacity-100 transition" />
          <p className="relative text-slate-400 text-xs sm:text-sm mb-2">
            📍 Location
          </p>
          <p className="relative text-slate-300 text-sm sm:text-base">
            Cherlapalli, Hyderabad
          </p>
        </motion.div>
      </div>
    </section>
  );
}

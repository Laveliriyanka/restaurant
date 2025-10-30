import { motion } from "framer-motion";
import heroImgDark from "../api/assets/download.png"; // 

export default function Hero({ theme }) {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#01101D]">
      <img
        src={heroImgDark}
        alt="Hero Image"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700
          ${theme === "dark" ? "brightness-90" : ""}`}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-white drop-shadow-md">
          Discover Exquisite Taste
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto font-bold leading-relaxed text-white">
          Experience culinary artistry in an atmosphere of timeless elegance.
        </p>
        <a
          href="#reservation"
          className="px-6 py-3 rounded-full font-semibold transition bg-[#F4C73F] text-black hover:opacity-85"
        >
          Book a Table
        </a>
      </motion.div>
    </section>
  );
}


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA({ theme }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="reservation"
      className={`relative z-10 py-24 text-center px-6 transition-colors duration-700
        ${theme === "dark" ? "bg-[#05131F] text-white" : "bg-[#FDFDFD] text-black"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold mb-6"
      >
        Ready for an unforgettable evening?
      </motion.h2>
      <motion.a
        href="/reservation"
        whileHover={{ scale: 1.1 }}
        className={`inline-block border px-8 py-3 rounded-full font-semibold transition
          ${theme === "dark"
            ? "border-white hover:bg-white hover:text-black"
            : "border-black hover:bg-black hover:text-white"}`}
      >
        Reserve Your Table
      </motion.a>
    </section>
  );
}

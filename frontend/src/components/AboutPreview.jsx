import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutPreview({ theme }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative z-10 py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-[#01101D] text-white transition-colors duration-700"
    >
      <div className="absolute left-0 top-0 h-full w-24 bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-white/10 blur-3xl pointer-events-none"></div>

      <motion.img
        src="https://i.pinimg.com/1200x/68/1d/6c/681d6cf257560d18ba1109b3db2eaacc.jpg"
        alt="Chef cooking"
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover relative z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="md:w-1/2 relative z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-white">Our Story</h2>
        <p className="leading-relaxed mb-4">
          Founded in 1998, we bring together tradition and innovation to create
          unforgettable culinary experiences. Each dish tells a story of taste,
          craft, and passion.
        </p>
        <a
          href="/our-story"
          className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
}

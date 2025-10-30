import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import photo3 from "../api/assets/pexels-szymon-shields-1503561-29033148.jpg";
import photo4 from "../api/assets/pexels-anna-belousova-130658517-10132214.jpg";
const photos = [
  "https://gcdn.tomesto.ru/img/place/000/032/643/restoran-park-na-mantulinskoy_c6266_full-380027.jpg",
  "https://gcdn.tomesto.ru/img/place/000/032/643/restoran-park-na-mantulinskoy_4bc1e_full-380020.jpg",
  photo3,
  photo4
];

export default function Gallery({ theme }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative z-10 py-24 px-6 md:px-20 text-center bg-[#01101D] text-white transition-colors duration-700"
    >
      <div className="absolute left-0 top-0 h-full w-24 bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-white/10 blur-3xl pointer-events-none"></div>

      <h2 className="text-3xl font-semibold mb-12 relative z-10">The Ambience</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {photos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Restaurant view"
            className="rounded-xl object-cover w-full h-56 md:h-72 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}

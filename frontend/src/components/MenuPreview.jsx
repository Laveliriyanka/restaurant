import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const menuItems = [
  {
    title: "Truffle Pasta",
    img: "/src/api/assets/паста.png",
    price: "$24",
  },
  {
    title: "Tartare",
    img: "https://eat-cook.ru/wp-content/uploads/2023/12/shutterstock_1459419983-scaled-1.webp",
    price: "$19",
  },
  {
    title: "Chocolate Lava Cake",
    img: "https://i.pinimg.com/originals/46/46/ec/4646ec84f071bf4e26fe55369d74276f.jpg",
    price: "$14",
  },
];

export default function MenuPreview({ theme }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`relative z-10 py-24 px-6 md:px-20 transition-colors duration-700
        ${theme === "dark" ? "bg-[#05131F] text-white" : "bg-[#FDFDFD] text-black"}`}
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">Signature Dishes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 bg-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:opacity-70 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                {item.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/menu"
          className={`inline-block border px-6 py-2 rounded-full transition
            ${theme === "dark"
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"}`}
        >
          View Full Menu
        </a>
      </div>
    </section>
  );
}

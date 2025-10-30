import React, { useState } from "react";
import Hero from "../components/Hero";
import { motion, AnimatePresence } from "framer-motion";
import tomatoSoup from "../api/assets/roasted-tomato-soup-4-682x887.jpg"
const menuItems = [
  { title: "Truffle Pasta", category: "Hot", desc: "Creamy pasta with truffle oil", price: "$24", img: "/src/api/assets/паста.png" },
  { title: "Tartare", category: "Hot", desc: "Fresh salmon with avocado", price: "$19", img: "https://eat-cook.ru/wp-content/uploads/2023/12/shutterstock_1459419983-scaled-1.webp" },
  { title: "Chocolate Lava Cake", category: "Desserts", desc: "Rich chocolate cake with molten center", price: "$14", img: "https://i.pinimg.com/originals/46/46/ec/4646ec84f071bf4e26fe55369d74276f.jpg" },
  { title: "Mushroom Soup", category: "Soups", desc: "Creamy mushroom soup with herbs", price: "$12", img: "https://avatars.mds.yandex.net/get-entity_search/2028178/1212683149/S600xU_2x" },
  { title: "Beef Steak", category: "Hot", desc: "Grilled steak with sauce", price: "$28", img: "https://t4.ftcdn.net/jpg/03/29/64/59/360_F_329645970_ynbmXxiU7f5Ia7ygcPnYGTUtLi38fvNT.jpg" },
  { title: "Lemonade", category: "Drinks", desc: "Homemade lemonades in the assortment", price: "$6", img: "https://www.restoran.ru/upload/resize_cache/iblock/171/1920_1080_1/otkryvalo.jpg" },
  { title: "Cheesecake", category: "Desserts", desc: "Classic cheesecake with berries", price: "$10", img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1FkWmC.img?w=1919&h=1080&m=4&q=89" },
  { title: "Tomato Soup", category: "Soups", desc: "Fresh tomato soup with basil", price: "$11", img:  tomatoSoup},
  { title: "Iced Tea", category: "Drinks", desc: "Refreshing iced tea with lemon", price: "$5", img: "https://avatars.mds.yandex.net/i?id=e6f83016ddc430c365313be37b6585a4_l-4461053-images-thumbs&n=13" },
  { title: "Grilled Chicken", category: "Hot", desc: "Chicken breast with vegetables", price: "$20", img: "https://ak.picdn.net/shutterstock/videos/1103073545/thumb/1.jpg" },
  { title: "Fruit Salad", category: "Desserts", desc: "Seasonal fruit with mint", price: "$8", img: "https://i.pinimg.com/736x/6e/75/3e/6e753e181488b02ad561618399dff247.jpg" },
  { title: "Espresso", category: "Drinks", desc: "Rich espresso shot", price: "$4", img: "https://i.ytimg.com/vi/S4mEeQuK2vI/maxresdefault.jpg" },
];

const categories = ["All", "Desserts", "Hot", "Drinks", "Soups"];

export default function Menu({ theme }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Hero theme={theme} />
      <section className={`relative py-20 px-6 md:px-20 transition-colors duration-700 ${theme === "dark" ? "bg-[#01101D] text-white" : "bg-[#FDFDFD] text-black"} rounded-2xl overflow-hidden`}>
        <span className={`absolute top-0 left-10 w-40 h-full pointer-events-none ${theme === "dark" ? "bg-white/10" : "bg-[#01101D]/30"} blur-3xl`} />
        <span className={`absolute top-0 right-0 w-40 h-full pointer-events-none ${theme === "dark" ? "bg-white/10" : "bg-[#01101D]/30"} blur-3xl`} />
        <h2 className="relative z-10 text-center text-[58px] font-bold uppercase mb-12">MENU</h2>
        <div className="relative z-10 text-center mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition
                ${activeCategory === cat
                  ? "bg-[#F4C73F] text-black"
                  : theme === "dark"
                    ? "bg-[#01101D] text-white border border-white hover:bg-[#F4C73F] hover:text-black"
                    : "bg-white text-black border border-black hover:bg-[#F4C73F] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
<div className="relative z-10 grid md:grid-cols-3 gap-8">
  <AnimatePresence>
    {filteredItems.map((item, i) => (
      <motion.div
        key={item.title}
        layout
        className={`rounded-2xl overflow-hidden transition transform hover:-translate-y-2
          ${theme === "dark"
            ? "bg-[#01101D] shadow-[0_0_25px_rgba(0,0,0,0.05)] hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]"
            : "bg-[#FDFDFD] shadow-lg hover:shadow-2xl"
          }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="mb-2">{item.desc}</p>
          <p
            className={`font-bold ${
              theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {item.price}
          </p>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

      </section>
<section
  className={`py-20 px-6 md:px-20 transition-colors duration-700 ${
    theme === "dark"
      ? "bg-[#01101D] text-white"
      : "bg-[#FDFDFD] text-black"
  }`}
>
  <h2 className="text-3xl font-semibold mb-6 text-center">Signature Dishes</h2>
  <div className="relative">
    <div className="flex gap-8 overflow-x-auto pr-6 pb-8">
      {menuItems.slice(0, 6).map((item, i) => (
        <motion.div
          key={i}
          className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<style>
  {`
    .overflow-x-auto::-webkit-scrollbar {
      height: 8px;
      margin-top: 20px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
      background: ${theme === "dark" ? "#01101D" : "#FDFDFD"};
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
      background-color: #F4C73F;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb:hover {
      box-shadow: 0 0 8px #F4C73F;
      background-color: #FFD84C;
    }
  `}
</style>

</> 
); 
}
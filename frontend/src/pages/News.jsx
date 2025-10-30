import { motion } from "framer-motion";
import SubscribeForm from "../components/SubscribeForm";
import eventRestaurant from "../api/assets/9966.jpg"
import ctaNews from "../api/assets/CTA_News.jpg"
const newsPosts = [
  {
    title: "Hosting Events at the Restaurant: What You Need to Know",
    date: "April 22, 2025",
    desc: "From intimate dinners to corporate gatherings...",
    img: eventRestaurant,
    link: "https://www.google.com",
  },
  {
    title: "How We Support Local Farmers and Ingredients",
    date: "April 17, 2025",
    desc: "We take pride in local ingredient sourcing...",
    img: "https://img.freepik.com/free-photo/healthy-food-ingredients-white-wooden-table_144627-30535.jpg?size=626&ext=jpg",
    link: "https://www.google.com",
  },
  {
    title: "Tips for Choosing the Right Dinner Menu at the Restaurant",
    date: "April 18, 2025",
    desc: "Confused about what to order?",
    img: "https://ak.picdn.net/shutterstock/videos/1103073545/thumb/1.jpg", 
    link: "https://www.google.com",
  },
];


export default function News({ theme }) {
  return (
    <div
      className={`min-h-screen pt-20 pb-20 px-6 md:px-24 transition-colors duration-700 
      ${theme === "dark" ? "bg-[#01101D] text-white" : "bg-[#FDFDFD] text-black"}`}
    >
      <div className="mb-14">
       <h1 className="font-cormorant text-4xl md:text-5xl mt-[-8] mb-4">
        Fresh Stories from the Kitchen
      </h1>
        <p className="font-lora mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
          Discover the stories behind our kitchen, culinary tips and flavor inspirations.
        </p>
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className={`w-full py-2 pl-10 rounded-full outline-none border
              ${theme === "dark" ? "bg-[#05131F] border-white/10 text-white" : "bg-white border-gray-300"}`}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.open("https://google.com", "_blank");
            }}
          />
          <span className="absolute left-3 top-2.5 opacity-60">🔍</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {newsPosts.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            target="_blank"
            className={`rounded-2xl overflow-hidden border shadow-lg transition
            ${theme === "dark" ? "bg-[#05131F] border-white/10" : "bg-white border-gray-200"}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img src={post.img} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">{post.date}</p>
              <h3 className="font-semibold mb-2 font-lora">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{post.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mb-20">
        <button className="px-6 py-2 rounded-full bg-[#EAB308] text-black font-semibold hover:opacity-85">
          Load More
        </button>
      </div>
      <section className="relative rounded-3xl overflow-hidden">
        <img
          ctaNews
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className="relative text-center py-28 px-4">
          <h2 className="font-cormorant text-4xl mb-4 text-white">
            Discover More Stories
          </h2>
          <p className="font-lora text-gray-200 max-w-xl mx-auto mb-8">
            Fresh stories are always waiting to be explored.
          </p>
          <SubscribeForm theme={theme} />
          
        </div>
      </section>
    </div>
  );
}


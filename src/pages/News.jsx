// src/pages/News.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ✅ Import sample images (replace with your actual school news images)
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsList = [
    {
      id: 1,
      title: "FGNMHS Celebrates Foundation Day 🎉",
      preview: "A fun-filled day with activities, programs, and awards...",
      full: "The Francisco G. Nepomuceno Memorial High School celebrated its Foundation Day with various activities including academic contests, sports, cultural showcases, and recognition ceremonies. Students, teachers, and alumni all joined the festivities.",
      date: "September 20, 2025",
      image: news1,
    },
    {
      id: 2,
      title: "New Computer Lab Opened 💻",
      preview:
        "The school inaugurated its new state-of-the-art computer lab...",
      full: "A new computer lab with 40 high-spec computers was officially opened to enhance ICT learning. This initiative aims to provide students with hands-on experience in technology, coding, and digital literacy.",
      date: "September 15, 2025",
      image: news2,
    },
    {
      id: 3,
      title: "Brigada Eskwela 2025 🏫",
      preview:
        "Parents, teachers, and students joined hands to prepare the school...",
      full: "The annual Brigada Eskwela saw active participation from the community. Classrooms were repainted, facilities were repaired, and the campus was cleaned in preparation for the new school year.",
      date: "September 10, 2025",
      image: news3,
    },
  ];

  return (
    <div className="w-full">
      {/* ✅ Header */}
      <section className="py-16 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">School News</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Stay updated with the latest announcements, events, and activities at
          Francisco G. Nepomuceno Memorial High School.
        </p>
      </section>

      {/* ✅ News Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            {/* Thumbnail */}
            <img
              src={news.image}
              alt={news.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {news.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{news.date}</p>
              <p className="text-gray-700 mb-4 flex-grow">{news.preview}</p>
              <button
                onClick={() => setSelectedNews(news)}
                className="mt-auto bg-blue-900 text-yellow-600 px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ✅ Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Full Page Content */}
            <div className="max-w-5xl mx-auto p-6 md:p-12">
              {/* Big Image */}
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full max-h-[60vh] object-cover rounded-xl mb-8"
              />

              {/* News Details */}
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                {selectedNews.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6">{selectedNews.date}</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedNews.full}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

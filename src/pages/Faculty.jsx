// src/pages/Faculty.jsx
import { motion } from "framer-motion";
import teacher1 from "../assets/teacher1.jpg"; // replace with your actual teacher images
import teacher2 from "../assets/teacher2.jpg";
import teacher3 from "../assets/teacher3.jpg";
import teacher4 from "../assets/teacher4.jpg";

export default function Faculty() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const facultyList = [
    { id: 1, name: "Dr. Maria Santos", role: "Principal", image: teacher1 },
    {
      id: 2,
      name: "Mr. Juan Dela Cruz",
      role: "Math Teacher",
      image: teacher2,
    },
    { id: 3, name: "Ms. Ana Reyes", role: "Science Teacher", image: teacher3 },
    {
      id: 4,
      name: "Mrs. Liza Gomez",
      role: "English Teacher",
      image: teacher4,
    },
  ];

  return (
    <div className="w-full">
      {/* ✅ Header */}
      <section className="py-16 px-6 bg-blue-900 text-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Our Faculty
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-200">
          Meet the dedicated educators of Francisco G. Nepomuceno Memorial High
          School who guide and inspire students every day.
        </p>
      </section>

      {/* ✅ Faculty Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facultyList.map((faculty) => (
          <motion.div
            key={faculty.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden text-center hover:shadow-xl transition"
          >
            {/* Faculty Image */}
            <img
              src={faculty.image}
              alt={faculty.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-blue-900">
                {faculty.name}
              </h3>
              <p className="text-gray-600">{faculty.role}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

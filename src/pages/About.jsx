// src/pages/About.jsx
import { motion } from "framer-motion";
import school2 from "../assets/school2.jpg"; // intro section image

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full">
      {/* ✅ Hero Section with Diagonal Striped Background */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 33.3%, #1E3A8A 33.3%, #1E3A8A 66.6%, #FACC15 66.6%, #FACC15 100%)",
        }}
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-4xl md:text-5xl font-extrabold drop-shadow-lg text-gray-900"
        >
          About Us
        </motion.h1>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.img
          src={school2}
          alt="Our School"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl shadow-lg object-cover"
        />

        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Francisco G. Nepomuceno Memorial High School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are committed to nurturing students with strong academic
            foundations, character, and values for a brighter future. Our
            community thrives on excellence, service, and leadership.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🌟 Excellence in Education</li>
            <li>👩‍🏫 Dedicated Faculty</li>
            <li>🏫 Safe & Inclusive Environment</li>
            <li>💡 Preparing Students for the Future</li>
          </ul>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-6"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Our mission is to provide quality education that fosters both
            intellectual and moral development. We envision graduates who are
            not only academically competent but also socially responsible
            citizens ready to lead and serve.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

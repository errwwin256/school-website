// src/pages/Home.jsx
import Slider from "react-slick";
import { motion } from "framer-motion"; // ✨ animations
import school1 from "../assets/school1.jpg";
import school2 from "../assets/school2.jpg";
import school3 from "../assets/school3.jpg";
import school4 from "../assets/school4.jpg";
import school5 from "../assets/school5.jpg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // 🔥 Animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <section className="w-full h-[70vh]">
        <Slider {...settings} className="h-full">
          {[school1, school2, school3, school4, school5].map((img, idx) => (
            <div key={idx} className="h-[70vh]">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* 2. Welcome Section */}
      <section className="relative py-24 px-6 text-center text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-blue-500 bg-opacity-40"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="text-yellow-300">
              Francisco G. Nepomuceno Memorial High School
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-100">
            At{" "}
            <span className="font-semibold text-yellow-400">
              Francisco G. Nepomuceno Memorial High School
            </span>
            , we nurture not only academic excellence but also strong character
            and service to the community.
            <br />
            We welcome students to <span className="font-semibold">
              grow
            </span>, <span className="font-semibold">lead</span>, and{" "}
            <span className="font-semibold">succeed</span>.
          </p>
        </motion.div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-16 px-6 bg-yellow-100 text-blue-900">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          Why Choose Francisco G. Nepomuceno Memorial High School?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Quality Education",
              desc: "We provide a holistic curriculum aligned with the highest standards of academic excellence.",
              bg: "bg-blue-200",
            },
            {
              title: "Dedicated Faculty",
              desc: "Our teachers are passionate, skilled, and committed to guiding every student’s journey.",
              bg: "bg-green-200",
            },
            {
              title: "Safe Environment",
              desc: "A safe, nurturing, and inclusive campus where students thrive socially and academically.",
              bg: "bg-pink-200",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative p-6 ${item.bg} rounded-xl shadow transition transform hover:scale-105 sparkle`}
            >
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Junior & Senior High */}
      <section className="py-16 px-6 bg-white text-blue-900">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          Our Programs
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative p-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl shadow text-center hover:scale-105 transition sparkle"
          >
            <h3 className="text-xl font-semibold mb-3">Junior High School</h3>
            <p>
              Grades 7–10 offering strong foundations in academic and
              co-curricular excellence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative p-8 bg-gradient-to-r from-blue-200 to-blue-400 rounded-xl shadow text-center hover:scale-105 transition sparkle"
          >
            <h3 className="text-xl font-semibold mb-3">Senior High School</h3>
            <p>
              Grades 11–12 with diverse strands preparing students for college
              and career pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {["Excellence", "Character", "Service", "Leadership"].map(
            (value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative p-6 bg-blue-800 rounded-xl hover:scale-105 transition sparkle"
              >
                <h3 className="font-semibold text-lg mb-2">{value}</h3>
                <p>
                  {value === "Excellence" &&
                    "Striving for the best in academics and beyond."}
                  {value === "Character" &&
                    "Building integrity, discipline, and responsibility."}
                  {value === "Service" &&
                    "Commitment to helping others and the community."}
                  {value === "Leadership" &&
                    "Inspiring students to lead with compassion and courage."}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

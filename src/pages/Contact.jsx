// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
          Contact Us
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-200">
          Get in touch with Francisco G. Nepomuceno Memorial High School for
          inquiries, admissions, or support.
        </p>
      </section>

      {/* ✅ Contact Info */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <MapPin className="w-10 h-10 mx-auto text-blue-900 mb-4" />
          <h3 className="font-bold text-lg text-blue-900 mb-2">Address</h3>
          <p className="text-gray-600">
            Barangay Sta. Teresita, Angeles City, Pampanga, Philippines
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <Phone className="w-10 h-10 mx-auto text-blue-900 mb-4" />
          <h3 className="font-bold text-lg text-blue-900 mb-2">Phone</h3>
          <p className="text-gray-600">+63 912 345 6789</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <Mail className="w-10 h-10 mx-auto text-blue-900 mb-4" />
          <h3 className="font-bold text-lg text-blue-900 mb-2">Email</h3>
          <p className="text-gray-600">info@fgnmhs.edu.ph</p>
        </motion.div>
      </section>

      {/* ✅ Contact Form */}
      <section className="px-6 max-w-3xl mx-auto pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-yellow-400 font-semibold py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

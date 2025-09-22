// src/pages/Admission.jsx
import { motion } from "framer-motion";
import { FileText, Users, CheckCircle, Phone } from "lucide-react";

export default function Admission() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <section
        className="relative h-[35vh] flex items-center justify-center text-center"
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
          Admission
        </motion.h1>
      </section>

      {/* ✅ Intro Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Francisco G. Nepomuceno Memorial High School is committed to nurturing
          students with strong academic foundations, character, and values for a
          brighter future. Below is our simple and transparent admission
          process.
        </motion.p>
      </section>

      {/* ✅ Admission Steps */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: (
                <FileText className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              ),
              title: "1. Submit Requirements",
              desc: "Prepare birth certificate, report card, and other necessary documents.",
            },
            {
              icon: (
                <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              ),
              title: "2. Interview & Assessment",
              desc: "Meet with our faculty for a short interview and academic evaluation.",
            },
            {
              icon: (
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              ),
              title: "3. Enrollment Confirmation",
              desc: "Once approved, finalize enrollment and become part of our community.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ✅ Contact Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-blue-900 text-white rounded-2xl shadow-lg p-10 text-center">
          <Phone className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-2xl font-bold mb-3">Need Help with Admission?</h2>
          <p className="mb-6 text-gray-200">
            For questions and assistance, feel free to reach out to our
            admission office.
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            <p className="text-lg">
              📞{" "}
              <a
                href="tel:+639123456789"
                className="underline hover:text-yellow-400"
              >
                +63 912 345 6789
              </a>
            </p>
            <p className="text-lg">
              📧{" "}
              <a
                href="mailto:admissions@fgnmhs.edu.ph"
                className="underline hover:text-yellow-400"
              >
                admissions@fgnmhs.edu.ph
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

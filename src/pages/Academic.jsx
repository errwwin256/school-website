// src/pages/Academic.jsx
import { BookOpen, GraduationCap } from "lucide-react"; // icons

export default function Academic() {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-900 via-blue-800 to-yellow-400">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Academic Programs
        </h1>
      </section>

      {/* ✅ Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Excellence in Education
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At Francisco G. Nepomuceno Memorial High School, we provide a
          well-rounded education designed to prepare students for higher
          learning and real-world challenges. Our academic programs foster
          intellectual growth, leadership, and character.
        </p>
      </section>

      {/* ✅ Academic Programs */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Junior High */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-900 hover:shadow-xl transition">
          <BookOpen className="w-12 h-12 text-blue-900 mb-4" />
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Junior High School
          </h3>
          <p className="text-gray-700 mb-4">
            The Junior High School curriculum (Grades 7–10) provides a solid
            foundation in core subjects such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mathematics, Science, English, and Filipino</li>
            <li>Araling Panlipunan (Social Studies)</li>
            <li>Technology and Livelihood Education (TLE)</li>
            <li>MAPEH (Music, Arts, PE, and Health)</li>
            <li>Values Education</li>
          </ul>
        </div>

        {/* Senior High */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400 hover:shadow-xl transition">
          <GraduationCap className="w-12 h-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold text-yellow-500 mb-3">
            Senior High School
          </h3>
          <p className="text-gray-700 mb-4">
            The Senior High School curriculum (Grades 11–12) equips students
            with specialized knowledge and skills through different strands:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Academic Track (STEM, HUMSS, ABM, GAS)</li>
            <li>Technical-Vocational-Livelihood (TVL)</li>
            <li>Sports Track</li>
            <li>Arts and Design Track</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

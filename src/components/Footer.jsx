// src/components/Footer.jsx
import schoolLogo from "../assets/fglogo.jpg"; // <-- make sure path is correct

export default function Footer() {
  const lat = 15.1522622;
  const lon = 120.6089599;

  return (
    <footer className="bg-yellow-300 text-blue-800 w-full">
      {/* main content area (same as navbar: px-4, full width) */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-4 py-10">
        {/* School Info + Logo */}
        <div className="md:w-1/3 flex items-start gap-3">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-60 w-60 object-cover rounded-full border-3 border-white shadow-md"
          />
          <div>
            <h2 className="text-lg md:text-xl font-bold">
              Francisco G. Nepomuceno Memorial High School
            </h2>
            <p className="mt-2 text-sm">
              Excellence in Education, Character, and Service
            </p>
          </div>
        </div>

        {/* Contact + Social Media */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-1">
            📞{" "}
            <a href="tel:+63451234567" className="hover:underline">
              (045) 123-4567
            </a>
          </p>
          <p className="text-sm mb-3">
            📧{" "}
            <a href="mailto:fgnmhs@gmail.com" className="hover:underline">
              fgnmhs@gmail.com
            </a>
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="#c13584"
                />
                <circle cx="12" cy="12" r="4.2" fill="#ffffff" />
                <circle cx="12" cy="12" r="2.1" fill="#c13584" />
                <circle cx="17.2" cy="7.1" r="0.9" fill="#ffffff" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                style={{ color: "#ff0000" }}
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Location Map */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Our Location</h3>
          <div className="rounded overflow-hidden border shadow">
            <iframe
              title="School Location"
              src={`https://www.google.com/maps?q=${lat},${lon}&z=17&output=embed`}
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-sm mt-2">
            <a
              href={`https://www.google.com/maps/place/Francisco+G.+Nepomuceno+Memorial+High+School/@${lat},${lon},17z`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-yellow-400 text-center text-sm text-blue-900 py-4 px-4">
        © {new Date().getFullYear()} Francisco G. Nepomuceno Memorial High
        School. All Rights Reserved.
      </div>
    </footer>
  );
}

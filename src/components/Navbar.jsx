import { Link } from "react-router-dom";
import { useState } from "react";
import schoolLogo from "../assets/fglogo.jpg"; // <-- make sure this exists inside src/assets/

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Admission", path: "/admission" },
  { name: "Academic", path: "/academic" },
  { name: "News", path: "/news" },
  { name: "Faculty & Staff", path: "/faculty" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-300 shadow-lg fixed w-full z-50">
      {/* 🔧 Removed max-w-7xl and mx-auto so content spans full width */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo + School Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-18 w-18 object-cover rounded-full border-2 border-white shadow-md"
          />
          <span className="text-blue-600 font-bold text-lg md:text-xl leading-tight">
            Francisco G. Nepomuceno <br className="hidden md:block" /> Memorial
            High School
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-blue-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="inline-block hover:text-blue-900 hover:scale-110 transform transition-transform duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Menu (only when menuOpen is true) */}
      {menuOpen && (
        <ul className="md:hidden bg-yellow-300 px-4 pb-4 space-y-2 text-blue-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="inline-block py-2 hover:text-blue-900 hover:scale-110 transform transition-transform duration-200"
                onClick={() => setMenuOpen(false)} // close menu after click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

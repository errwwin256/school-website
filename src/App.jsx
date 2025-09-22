import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Academic from "./pages/Academic";
import News from "./pages/News";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/news" element={<News />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

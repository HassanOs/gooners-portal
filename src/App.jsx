import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Squad from "./pages/Squad.jsx";
import Matches from "./pages/Matches.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

/**
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {}
      <Navbar />

      {}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/contact" element={<Contact />} />
          {}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {}
      <Footer />
    </div>
  );
}

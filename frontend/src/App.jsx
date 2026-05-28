import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalogue from "./pages/Catalogue";
import Authors from "./pages/Authors";
import Rights from "./pages/Rights";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}
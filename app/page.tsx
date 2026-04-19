import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import DealTypes from "./components/DealTypes";
import FocusAreas from "./components/FocusAreas";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <DealTypes />
        <FocusAreas />
        <Register />
      </main>
      <Footer />
    </>
  );
}

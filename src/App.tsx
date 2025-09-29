import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteDevelopment from "./components/InternalPages/WebsiteDevelopment";
import MessagingSolutions from "./components/InternalPages/MessagingSolutions";
import CommunicationAPIs from "./components/InternalPages/CommunicationAPIs";
import TeamSection from "./components/InternalPages/TeamSection";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          <Route path="/website" element={<WebsiteDevelopment />} />
          <Route path="/message" element={<MessagingSolutions />} />
          <Route path="/api" element={<CommunicationAPIs />} />

          <Route path="/team" element={<TeamSection />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

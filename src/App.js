import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiDownload } from "react-icons/fi";

import "./App.css";

// Import images for the slider
import img1 from './assets/images/goku.png';
import img2 from './assets/images/itachi.png';
import img3 from './assets/images/naruto.png';
import img4 from './assets/images/solo.png';

// Importing page components from 'src/pages'
import Manga from "./pages/Manga";
import Romcom from "./pages/Romcom";
import ModernArt from "./pages/ModernArt";
import About from "./pages/About";

// Home component for the main slider
function Home() {
  const images = [img1, img2, img3, img4];

  const downloadImage = (src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.substring(src.lastIndexOf("/") + 1);
    link.click();
  };

  return (
    <div className="slider-container">
      <Swiper spaceBetween={30} navigation={true} modules={[Navigation]} className="image-slider">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Anime sticker ${index + 1}`} className="image" />
            <button className="download-button" onClick={() => downloadImage(src)}>
              <FiDownload /> Download
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Background Video */}
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar with Links */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/Manga">Manga</Link>
          <Link to="/Romcom">Romcom</Link>
          <Link to="/ModernArt">Modern Art</Link>
          <Link to="/About">About</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Manga" element={<Manga />} />
          <Route path="/Romcom" element={<Romcom />} />
          <Route path="/ModernArt" element={<ModernArt />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

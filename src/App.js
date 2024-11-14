import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Manga from "./pages/Manga";
import Romcom from "./pages/Romcom";
import ModernArt from "./pages/ModernArt";
import About from "./pages/About";
import logo from "./assets/logo.png";

<img src={logo} alt="Website Logo" className="logo" />

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  return (
    <div className="App">
      {/* Background Video for Home Page */}
      {isHomePage && (
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Navbar with Links */}
      <nav className="navbar">
        <img src={logo} alt="Website Logo" className="logo" />
        <Link to="/">Home</Link>
        <Link to="/Manga">Manga</Link>
        <Link to="/Romcom">Romcom</Link>
        <Link to="/ModernArt">Modern Art</Link>
        <Link to="/About">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-content">
              <h1>Welcome to MangaMixer!</h1>
              <p>
                Discover a curated collection of anime stickers across various genres,
                including Manga, Romcom, and Modern Art. Dive into each section to find
                stickers that capture the essence of your favorite styles.
              </p>
              <p>Explore and download unique stickers to personalize your collection!</p>
            </div>
          }
        />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/Romcom" element={<Romcom />} />
        <Route path="/ModernArt" element={<ModernArt />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

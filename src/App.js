// Import necessary libraries
import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="Website Logo" className="logo" />
        <a href="#home">Home</a>
        <a href="#manga">Manga</a>
        <a href="#romcom">Romcom</a>
        <a href="#modernart">Modern Art</a>
        <a href="#about">About</a>
      </nav>

      {/* Sections */}
      <div id="home" className="section home-section">
        <video autoPlay loop muted className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-content">
          <h1>Welcome to MangaMixer!</h1>
          <p>
            Discover a curated collection of anime stickers across various genres,
            including Manga, Romcom, and Modern Art. Dive into each section to find
            stickers that capture the essence of your favorite styles.
          </p>
          <p>Explore and download unique stickers to personalize your collection!</p>
        </div>
      </div>

      <div id="manga" className="section">
      <video autoPlay loop muted className="background-video">
          <source src="/manga.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>Manga</h2>
        <p>Explore stunning Manga-themed stickers here!</p>
        {/* Add Manga content */}
      </div>

      <div id="romcom" className="section">
       <video autoPlay loop muted className="background-video">
          <source src="/romcom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>Romcom</h2>
        <p>Find the best romantic-comedy stickers here!</p>
        {/* Add Romcom content */}
      </div>

      <div id="modernart" className="section">
      <video autoPlay loop muted className="background-video">
          <source src="/modernshi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>Modern Art</h2>
        <p>Dive into the world of modern art with these stickers!</p>
        {/* Add Modern Art content */}
      </div>

      <div id="about" className="section">
        <h2>About</h2>
        <p>
          MangaMixer is your ultimate destination for finding and sharing anime
          stickers across genres. Made with ❤️ for anime enthusiasts.
        </p>
      </div>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2024 MangaMixer. Made with ❤️ by om. <a href="#home">Back to Top</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

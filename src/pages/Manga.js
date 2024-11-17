import React from "react";
import "./Manga.css";

function Manga() {
  return (
    <div className="content">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
       <source src="/videos/manga.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Manga</h2>
    </div>
  );
}

export default Manga;

import React from "react";
import "./ModernArt.css";

function ModernArt() {
  return (
    <div className="content">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
       <source src="/videos/modernart.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Modern Art</h2>
    </div>
  );
}

export default ModernArt;

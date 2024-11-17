import React from "react";
import "./Romcom.css";

function Romcom() {
  return (
    <div className="content">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
       <source src="/videos/romcom.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Romantic Comedy</h2>
    </div>
  );
}

export default Romcom;

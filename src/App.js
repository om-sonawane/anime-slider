import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiDownload } from "react-icons/fi";
import "./App.css";

import img1 from './assets/images/goku.png';
import img2 from './assets/images/itachi.png';
import img3 from './assets/images/naruto.png';
import img4 from './assets/images/solo.png';

const images = [img1, img2, img3, img4];

function App() {
  const downloadImage = (src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.substring(src.lastIndexOf("/") + 1);
    link.click();
  };

  return (
    <div className="App">
      <nav className="navbar">
    MangaMixer
      </nav>
      <div className="slider-container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="image-slider"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Anime sticker ${index + 1}`} className="image" />
              <button
                className="download-button"
                onClick={() => downloadImage(src)}
              >
                <FiDownload /> Download
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;

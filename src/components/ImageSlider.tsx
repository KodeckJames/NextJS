"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const ImageSlider=()=> {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image src="https://picsum.photos/400/200" alt="Slide Image" width={1200} height={600} />
        </div>
        <div>
          <Image src="https://picsum.photos/400/200" alt="Slide Image" width={1200} height={600} />
        </div>
        <div>
          <Image src="https://picsum.photos/400/200" alt="Slide Image" width={1200} height={600} />
        </div>
        <div>
          <Image src="https://picsum.photos/400/200" alt="Slide Image" width={1200} height={600} />
        </div>
      </Slider>
    </div>
  );
}
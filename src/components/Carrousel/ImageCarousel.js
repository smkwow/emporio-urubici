import React, { useEffect, useState } from "react";

function ImageCarousel({ images, itemsPerSlide, autoplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);

    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, currentSlide, images.length]);

  const slideWidth = 100 / itemsPerSlide;

  return (
    <div className="relative overflow-hidden">
      <ul className="flex transition-transform duration-1000 ease-in-out -translate-x-full" style={{ transform: `translateX(-${slideWidth * currentSlide}%)` }}>
        {images.map((image, index) => (
          <li key={index} className={`w-${slideWidth}/2 flex-shrink-0`}>
            <p className="text-center py-3 uppercase text-[#e3cbc3] font-semibold text-lg">box {image.tamanho}</p>
            <img src={image.src} alt={image.alt} className="w-full max-w-[350px] h-96 px-2 object-cover rounded-xl" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageCarousel;

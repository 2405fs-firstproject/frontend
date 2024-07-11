import React, { useState, useEffect, useRef } from "react";
import "./SlideShow.css";
import Info from "../Info/Info";

import prevSvg from "../../assets/prev.svg";
import nextSvg from "../../assets/next.svg";

const SlideShow = () => {
  const slides = [
    "https://korea-pass.kr/assets/images/main/main_banner_01.webp",
    "https://korea-pass.kr/assets/images/main/main_banner_02.webp",
    "https://korea-pass.kr/assets/images/main/main_banner_03.png",
    "https://korea-pass.kr/assets/images/main/main_banner_04.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;
  const slideInterval = 5000;
  const slideWidth = useRef(0);
  const slideInnerRef = useRef(null);

  useEffect(() => {
    slideWidth.current = slideInnerRef.current.clientWidth / slideCount;
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      gotoSlide((currentIndex + 1) % slideCount);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, slideCount, slideInterval]);

  const gotoSlide = (num) => {
    setCurrentIndex(num);
    slideInnerRef.current.style.transform = `translateX(${
      -slideWidth.current * num
    }px)`;
  };

  const handlePrevClick = () => {
    gotoSlide((currentIndex + slideCount - 1) % slideCount);
  };

  const handleNextClick = () => {
    gotoSlide((currentIndex + 1) % slideCount);
  };

  const handleDotClick = (index) => {
    gotoSlide(index);
  };

  return (
    <div className="slide__wrap">
      <div className="slide__img">
        <div className="slide__inner" ref={slideInnerRef}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide s${index + 1}`}>
              <img className="img" src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slide__btn">
          <a href="#" className="prev" onClick={handlePrevClick}>
            <img src={prevSvg} alt="이전" />
          </a>
          <a href="#" className="next" onClick={handleNextClick}>
            <img src={nextSvg} alt="다음" />
          </a>
        </div>
        <div className="slide__dot">
          {slides.map((slide, index) => (
            <a
              key={index}
              href="#"
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;

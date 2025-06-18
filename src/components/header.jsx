import React, { useEffect, useState } from 'react';
import './header.css';

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <header className="marvel-header">
        <div className="header-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            alt="Marvel Logo"
            className="logo-image"
            width={150}
          />
        </div>

        <nav className="header-nav">
          <a href="#">NEWS</a>
          <a href="#">COMICS</a>
          <a href="#">CHARACTERS</a>
          <a href="#">MOVIES</a>
          <a href="#">TV SHOWS</a>
          <a href="#">GAMES</a>
          <a href="#">VIDEOS</a>
          <a href="#">MORE</a>
        </nav>
      </header>

      <article>
        <div className="slider" aria-label="Auto sliding image carousel">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div
              className="slide slide1"
              role="group"
              aria-roledescription="slide"
            ></div>
            <div
              className="slide slide2"
              role="group"
              aria-roledescription="slide"
            ></div>
            <div
              className="slide slide3"
              role="group"
              aria-roledescription="slide"
            ></div>
          </div>
        </div>
      </article>
    </>
  );
}

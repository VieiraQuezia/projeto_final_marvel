
import React, { useEffect, useState } from 'react';
import './header.css';
import Logo from '/public/logo.png'

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval

    (interval);
    
  }, []);




  return (
    <>
      <header className="marvel-header">
        <div className="header-logo">
          <img
            src={Logo}
            alt="Marvel Logo"
            className="logo-image"
            width={150}
          />
        </div>

        <nav className="header-nav">
          <a href="/">HOME</a>
          <a href="#">FAVORITOS</a>
        
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
              
            ></div>
            <div
              className="slide slide2"
              
            ></div>
            <div
              className="slide slide3"
              
            ></div>
          </div>
        </div>
      </article>
    </>
  );
}

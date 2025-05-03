import React, { useRef } from 'react';
import coxsbazarImg from "../assets/icons/Rectangle 1.png"
import sreemangalImg from "../assets/icons/Sreemongol.png"
import sundorbonImg from "../assets/icons/sundorbon.png"
import sajekImg from "../assets/icons/Sajek.png"
const Categories = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
  
return (
    <div>
       <div  ref={carouselRef} className="carousel carousel-left rounded-box w-[400px] space-x-8 p-4 scroll-smooth">
  <div className="carousel-item w-2/3">
    <img
      src={coxsbazarImg}
      className="rounded-box w-full" />
  </div>
  <div className="carousel-item w-2/3">
    <img
      src={sreemangalImg}
      className="rounded-box w-full" />
  </div>
  <div className="carousel-item w-2/3">
    <img
      src={sundorbonImg}
      className="rounded-box w-full" />
  </div>
  <div className="carousel-item w-2/3">
    <img
      src={sajekImg}
      className="rounded-box w-full" />
  </div>
  
</div>
<div className=" mt-5 flex gap-3">
      <a onClick={scrollLeft} href="#slide4" className="btn btn-circle">❮</a>
      <a onClick={scrollRight} href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
);
};

export default Categories;
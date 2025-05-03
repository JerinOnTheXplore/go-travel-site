import React from 'react';
import bgImg from "../assets/icons/Rectangle 1.png"
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
const HomeLayout = () => {
    return (
        
           <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${bgImg})`,
  }}
>
<div className="hero-overlay">
<header className='mx-'>
  <Navbar></Navbar>
</header>
<main>
<section>
  <Outlet></Outlet>
</section>
</main>




</div>
</div>
);
};

export default HomeLayout;
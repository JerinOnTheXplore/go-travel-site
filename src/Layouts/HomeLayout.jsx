import React from 'react';
import bgImg from "../assets/icons/Rectangle 1.png"
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import RightAside from '../components/RightAside';
import Categories from '../components/Categories';
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
<header className='mx-20'>
  <Navbar></Navbar>
</header>
<main>
  <div className='flex justify-between items-center py-16 ml-20'>
  <div>
  <section>
  <Outlet></Outlet>
</section>
  </div>
  <div>
  <aside>
    <RightAside>
      
    </RightAside>
  </aside>
  </div>
  </div>

</main>




</div>
</div>
);
};

export default HomeLayout;
import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/icons/Group 1330.png";
const Navbar = () => {
    return (
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#ffffff]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to="/news">News</NavLink>
      <NavLink to="/destination">Destination</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
    <img className='ml-1' src={logo} alt="" />
    <div>
  <input type="text" placeholder="Search Your Destination" className="input input-bordered w-24 md:w-auto ml-5" />
  </div>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-5">
      <NavLink className="text-[#ffffff] text-lg font-normal" to="/news">News</NavLink>
      <NavLink className="text-[#ffffff] text-lg font-normal" to="/destination">Destination</NavLink>
      <NavLink className="text-[#ffffff] text-lg font-normal" to="/blog">Blog</NavLink>
      <NavLink className="text-[#ffffff] text-lg font-normal" to="/contact">Contact</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#F9A51A] text-[#ffffff] font-semibold">Login</a>
  </div>
</div>
    );
};

export default Navbar;
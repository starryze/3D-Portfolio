import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu , close } from '../assets';

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-11object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">Tommy's<span className="sm:block hidden">| Journey</span></p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar


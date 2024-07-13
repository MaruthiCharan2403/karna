import React from 'react';
import icon from '../assets/icon1.webp';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Optional: smooth scrolling behavior
    });
  };

  return (
    <div>
      <footer className="bg-black shadow dark:bg-gray-900 mt-1" >
        <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" onClick={scrollToTop}>
              <img src={icon} className="h-8" alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Karna</span>
            </Link>
            <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to='/about' className="hover:underline me-4 md:me-6" onClick={scrollToTop}>About</Link>
              </li>
              <li>
                <Link to='/services' className="hover:underline me-4 md:me-6" onClick={scrollToTop}>Services</Link>
              </li>
              <li>
                <Link to='/contact' className="hover:underline me-4 md:me-6" onClick={scrollToTop}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 Karna™. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

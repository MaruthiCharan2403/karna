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
      <footer className="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" onClick={scrollToTop}>
              <img src={icon} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Karna</span>
            </Link>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Karna™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

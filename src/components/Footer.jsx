import React from 'react'
import icon from '../assets/icon1.webp';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        

<footer class="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link to='/' class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={icon} class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl  font-semibold whitespace-nowrap text-white">Karna</span>
            </Link>
            <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to='/about' class="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to='/services' class="hover:underline me-4 md:me-6">Services</Link>
                </li>
                <li>
                    <Link to='/contact' class="hover:underline me-4 md:me-6">Contact Us</Link>
                </li>
                
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Karna™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

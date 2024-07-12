import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div>
           <section className="bg-black dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-white dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-blue-700 dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-white dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <button className="inline-flex items-center justify-center bg-blue-700 px-6 py-3 text-white bg-primary-600 hover:bg-primary-800  font-medium rounded-lg text-sm dark:focus:ring-primary-900" onClick={handleClick}>Back to Homepage</button>
        </div>   
    </div>
</section>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import IconCloudDemo from './IconCloudDemo';
import './css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const rectangleVariants = {
    initial: {
        x: '0%',
    },
    animate: (i) => ({
        x: '100%',
        transition: {
            delay: 0.1 * i, // Staggered delay for each rectangle
            duration: 0.5,
            ease: 'easeIn',
        },
    }),
};

const Loading = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full z-50"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-full h-1/5 bg-slate-950 flex items-center justify-center`}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    variants={rectangleVariants}
                    style={{ top: `${i * 20}%` }}
                >
                    {i === 2 && (
                        <img
                            src={new URL('../assets/icon1.jpg', import.meta.url).href}
                            alt="Logo"
                            className="h-32 w-32"
                        />
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

const PageTransition = ({ children, isAnimating, setIsAnimating }) => {
    useEffect(() => {
        let timer;
        if (isAnimating) {
            timer = setTimeout(() => {
                setIsAnimating(false);
            }, 1000); // Total duration of the animations
        }
        return () => clearTimeout(timer);
    }, [isAnimating, setIsAnimating]);

    return (
        <>
            <AnimatePresence>
                {isAnimating && <Loading />}
            </AnimatePresence>
            <div className={`relative ${isAnimating ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                {children}
            </div>
        </>
    );
};

export default function Login() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', { username, password });
            const { token } = response.data;
            // Save the token to local storage or context
            localStorage.setItem('token', token);
            // Navigate to the desired route after successful login
            navigate('/userhome');
        } catch (error) {
            console.error('There was a problem with the login operation:', error);
        }
    };

    return (
        <PageTransition isAnimating={animate} setIsAnimating={setAnimate}>
            <div className="container flex justify-evenly items-center flex-wrap">
                <div>
                    <IconCloudDemo />
                </div>
                <div className='sm:w-[320px] md:[450px] lg:w-[500px]'>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="flex-column">
                            <label>Username</label>
                        </div>
                        <div className="inputForm">
                            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                                <g id="Layer_3" data-name="Layer 3">
                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                </g>
                            </svg>
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="flex-column">
                            <label>Password</label>
                        </div>
                        <div className="inputForm">
                            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                            </svg>
                            <input
                                type="password"
                                className="input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="button-submit">Submit</button>
                        <div>
                            <p className="text-center">
                                Don't have an account?
                                <Link to='/signup' className='hover:text-blue-600'> Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </PageTransition>
    );
}

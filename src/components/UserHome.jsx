import React from 'react'
import BlurFade from './magicui/blur-fade';
import { useNavigate , useLocation} from 'react-router-dom';
export default function UserHome( ) {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <BlurFade delay={0.2}>
            <div className="bg-black">
            <section id="features" className="relative px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
                <div className="relative mx-auto max-w-5xl text-center">
                    <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider ">
                        Hello! Welcome to Karna
                    </span>
                    <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Choose the below options and start your progress
                    </h2>
                    
                </div>
                <br></br>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className="rounded-md border border-blue-800 bg-black p-8 text-center shadow-[5px_5px_50px_rgba(8,_112,_184,_0.7)]">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                            style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24"
                                viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                                <line x1="17" y1="17" x2="17" y2="17.01"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-100">Study Planner</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Fill up your day plan to get a super and comfortable study plan</p>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md p-2 mt-4">Start Planning</button>
                    </div>

                    <div className="rounded-md border  border-blue-800 bg-black p-8 text-center shadow-[5px_5px_50px_rgba(8,_112,_184,_0.7)]">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24"
                                viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-100">EXAMINATION</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Assess your performance with an AI exam from your PDFs</p>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md p-2 mt-4" onClick={()=>{navigate('/examform')}}>Start Exam</button>
                    </div>

                    <div className="rounded-md border  border-blue-800 bg-black p-8 text-center shadow-[5px_5px_50px_rgba(8,_112,_184,_0.7)]">
                        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                            style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24"
                                viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                            </svg>
                        </div>
                        <h3 className="mt-6 text-gray-100">DoubtsGPT</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Solve your doubts with help of GPT and learn new things</p>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md p-2 mt-4" onClick={()=>{navigate('/doubtsolve')}}>Solve Doubts</button>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b" style={{ backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
            </section>
        </div>
        </BlurFade>
  )
}

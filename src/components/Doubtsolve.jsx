import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './css/Doubtsolve.css';

export default function Doubtsolve() {
    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState('');
    // const chatBoxRef = useRef(null);

    // useEffect(() => {
    //     // Scroll to the bottom of the chat box whenever messages change
    //     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    // }, [messages]);

    // const handleSend = async () => {
    //     if (input.trim() !== '') {
    //         setMessages([...messages, { type: 'user', text: [{ content: input, bold: false }] }]);
    //         const userMessage = input;
    //         setInput('');

    //         try {
    //             const response = await axios.post('https://charangptbackend.vercel.app/send', { message: userMessage });
    //             const formattedResponse = formatResponse(response.data.reply);
    //             setMessages(prevMessages => [...prevMessages, { type: 'bot', text: formattedResponse }]);
    //         } catch (error) {
    //             setMessages(prevMessages => [...prevMessages, { type: 'bot', text: [{ content: 'Error: Unable to get response', bold: false }] }]);
    //         }
    //     }
    // };

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSend();
    //     }
    // };

    // const formatResponse = (response) => {
    //     return response.split('\n').map(line => {
    //         if (line.startsWith('**') && line.endsWith('**')) {
    //             return { content: line.slice(2, -2), bold: true };
    //         }
    //         return { content: line, bold: false };
    //     });
    // };

    // return (
    //     <div className="flex flex-col h-screen bg-black">
    //         <div className="flex flex-col items-center justify-center h-1/5 text-white text-center space-y-2">
    //             <h1 className="text-transparent text-5xl bg-clip-text bg-cover" style={{ backgroundImage: 'url(./giphy.webp)' }}>
    //                 CharanGPT
    //             </h1>
    //         </div>
    //         <div className="flex-grow p-5 overflow-y-auto mb-24" ref={chatBoxRef}>
    //             {messages.map((message, index) => (
    //                 <div
    //                     key={index}
    //                     className={`mb-5 p-3 rounded-lg max-w-[80%] ${message.type === 'user' ? 'bg-blue-700 text-white self-end' : 'bg-gray-500 text-white self-start'}`}
    //                 >
    //                     {Array.isArray(message.text) ? (
    //                         message.text.map((line, i) => (
    //                             <div key={i} className={`${line.bold ? 'font-bold' : 'font-normal'}`}>
    //                                 {line.content}
    //                             </div>
    //                         ))
    //                     ) : (
    //                         <div>{message.text}</div>
    //                     )}
    //                 </div>
    //             ))}
    //         </div>
    //         <div className="min-h-screen flex flex-col items-end justify-center bottom-5  transform -translate-x-1/2 w-full sm:max-w-2xl sm:mx-auto p-12">
    //             <div className="relative overflow-hidden z-0 rounded-full p-3">
    //                 <form role="form" className="relative flex z-50 bg-white rounded-full">
    //                     <input
    //                         type="text"
    //                         placeholder="enter your search here"
    //                         className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
    //                         value={input}
    //                         onChange={(e) => setInput(e.target.value)}
    //                         onKeyPress={handleKeyPress}
    //                     />
    //                     <button
    //                         type="button"
    //                         className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
    //                         onClick={handleSend}
    //                     >
    //                         Search
    //                     </button>
    //                 </form>
    //                 <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
    //                 <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
    //                 <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
    //                 <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
    //             </div>
    //         </div>
    //     </div>
    return (
        <div className='text-4xl tracking-tighter sm:text-5xl xl:text-7xl text-white font-semibold text-center'>
            <h1>Currently in development</h1>
            
        </div>
    );
}

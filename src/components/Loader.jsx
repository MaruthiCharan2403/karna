import React from 'react';
import './css/Loader.css';

export default function Loader({ msg }) {

    return (

        <div className='fixed min-h-screen inset-0 flex justify-center items-center bg-slate-950 bg-opacity-60 backdrop-blur-sm z-50 flex-col'>

          <p className='text-white'> {msg}</p>
            <div class="lava-lamp">
                <div class="bubble"></div>
                <div class="bubble1"></div>
                <div class="bubble2"></div>
                <div class="bubble3"></div>
            </div>
         
        </div>
    );
}

import React from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import BlurFade from './magicui/blur-fade';
import GradualSpacing from "@/components/magicui/gradual-spacing";
import TypingAnimation from './magicui/typing-animation';
import ShineBorder from './magicui/shine-border';

export default function About() {
    return (
        <div className='flex flex-col justify-start items-center min-h-screen gap-10'>
            <p className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-white/100 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mt-17'>ABOUT KARNA</p>
            <BlurFade delay={0.1} inView className="flex justify-center w-full">
                <ShineBorder
                    className="relative flex h-[500px] w-[220px] sm:w-[350px] md:w-[500px] lg:w-[700px] flex-col justify-center items-center overflow-hidden rounded-lg border bg-background md:shadow-x shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <BlurFade delay={0.6} inView className="flex flex-col items-center text-center gap-5">
                    <span className="pointer-events-none whitespace-pre-wrap text-center text-2xl font-semibold leading-normal text-transparent text-white">
                            Revolutionizing the way we assess ourselves and learn new things, we provide innovative tools that can clarify your doubts and support your mental health. Our approach ensures that personal growth is both effective and balanced, fostering a holistic learning experience.      
                        </span>
                    </BlurFade>
                </ShineBorder>
            </BlurFade>
        </div>
    );
}

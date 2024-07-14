import React from 'react';
import BlurFade from "./magicui/blur-fade";
import TypingAnimation from "./magicui/typing-animation";
import { cn } from "@/lib/utils";
import ShinyButton from ".magicui/shiny-button";
import GridPattern from "./magicui/grid-pattern";

export default function BlurFadeTextDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-900 relative overflow-hidden">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl w-full h-full">
        <BlurFade delay={0.7} inView>
          <h2 className="text-4xl tracking-tighter sm:text-5xl xl:text-7xl text-white font-semibold text-center">
            Welcome to the future of education
          </h2>
        </BlurFade>
        <TypingAnimation
          className="mt-8 text-2xl font-normal text-white"
          text="Revolutionizing the way we assess ourselves and learn new things."
        />
        <div className="z-10 flex min-h-[16rem] items-center justify-center">
          <ShinyButton text="Get Started" />


        </div>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>



  );
}

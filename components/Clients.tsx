"use client";

import React from "react";

import { status, testimonials, missionText } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <p className="text-center text-[#0B1133] font-medium italic text-[24.2px] sm:text-[16.41px] sm:font-medium sm:leading-[170%] sm:tracking-[-1%] sm:text-center">
        Trusted by the best in Web3
      </p>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-16 max-lg:mt-10 mb-10">
          {status.map((s) => (
            <div key={s.id} className="flex flex-col items-center text-center">
              <div className="flex items-center">
                <span className="text-black font-normal text-[72.61px] leading-none">
                  {s.title}
                </span>
                <span
                  className="text-[#9da0ad] font-normal text-[48.41px] leading-none"
                  style={{ transform: "translateY(12px)" }} // Adjust this value to control how much lower the "+" sign should go
                >
                  +
                </span>
              </div>
              <p className="text-[#9583FF] text-[24.2px] font-normal">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* New Grid Layout for Text and Image */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0">
          {/* Text Grid (Left) */}
          <div className="flex flex-col justify-center gap-4 pt-10 text-center md:text-left">
            <p className="font-normal text-[#9583FF] text-[20px] sm:text-[18px] md:text-[24.2px] mb-2">
              The Klink Mission
            </p>
            <h6 className="font-normal text-[#0B1133] text-[32px] sm:text-[28px] md:text-[48px] leading-tight tracking-[-1px] md:tracking-[-1.44px] mb-3">
              Activating Millions of Web3 Users Through AI-Enabled Wealth
              Creation Technology
            </h6>
            <p className="italic text-[#6d7085] text-[16px] sm:text-[14px]">
              We are committed to empowering millions through our cutting-edge
              technology and innovative approach in the Web3 space.
            </p>
          </div>

          {/* Image Grid (Right) */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/klink-mission.png"
              alt="Klink Mission"
              width={750}
              height={600}
              className="w-full md:w-[90%] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

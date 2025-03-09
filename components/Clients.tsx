"use client";

import React from "react";

import { status, testimonials, missionText } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <p className="text-center text-[#0B1133] font-medium italic text-[24.2px]">
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

        <div className="flex flex-wrap items-center justify-center gap-16 max-lg:mt-10">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Grid (Left) */}
          <div
            className="flex flex-col justify-center text-left"
            style={{ height: "312px", width: "573px" }}
          >
            <h2 className="font-normal text-[#9583FF] text-[24.2px] mb-4">
              The Klink Mission
            </h2>
            <h3 className="font-normal text-[#0B1133] text-[48px] mb-4">
              Activating Millions of Web3 Users Through AI-Enabled Wealth
              Creation Technology
            </h3>
            <p className="italic text-[#6d7085] text-[16px]">
              We are committed to empowering millions through our cutting-edge
              technology and innovative approach in the Web3 space.
            </p>
          </div>

          {/* Image Grid (Right) */}
          <div
            className="w-full"
            style={{
              width: "851.4841918945312px",
              height: "520px",
              backgroundImage: "url('/klink-mission.png')", // Replace with the actual image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

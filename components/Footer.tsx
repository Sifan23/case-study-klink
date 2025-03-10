import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-[1320px] h-[530px] mx-auto ">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {/* Left Column: Logo & Mission */}
          <div>
            <img src="/klink-logo.svg" alt="Klink Logo" className="h-12 mb-4" />
            <p className="text-[#0F0F0F] font-normal text-[18px] w-[679px] h-[115px] opacity-50">
              Our mission is to activate millions of Web3 users through AI
              enabled wealth creation technology, mutually servicing our
              community platform and providing partners with easy-to-embed
              integration tools to assist their activation and monetization,
              functioning as a robust earnings infrastructure for dApps,
              platforms, gaming, Web3 media, mini-apps, and blockchain
              ecosystems.
            </p>
          </div>
          {/* Right Column: Useful Resources */}
          <div className="flex justify-start md:justify-end">
            <div>
              <h3 className="text-[28px] font-extrabold mb-4">
                Useful Resources
              </h3>
              <ul className="space-y-[30px]">
                {[
                  "Buy $KLINK",
                  "Stake $KLINK",
                  "Klink Docs",
                  "Media Kit",
                  "Link 3",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-[#0F0F0F] cursor-pointer text-[18px] font-normal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#0F0F0F] mb-3  h-[23px] opacity-50">
            <span className="font-normal text-[18px]">Don’t miss </span>
            <span className="font-bold text-[18px]">
              $KLINK News & Promotions
            </span>
            <span className="font-normal text-[18px]">, subscribe!</span>
          </p>

          {/* Second Row: Two Columns (Subscription & Social Media) */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
            {/* Left Column: Subscription */}
            <div>
              <div className="relative w-[493px]">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full h-[72px] p-[16px] pr-[140px] rounded-[100px] border-[1px] border-gradient-to-r from-[#9C78EDB2] to-[#9C78ED80] bg-[#FFFFFF0D] text-black placeholder:text-gray-400"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[118px] h-[56px] bg-gradient-to-r from-[#674EFF] to-[#714EBD] rounded-[100px] text-white font-[500] text-[16px] leading-[150%] flex justify-center items-center">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Column: Social Media */}
            <div className="flex space-x-4 justify-start md:justify-end">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[60px] h-[60px] flex justify-center items-center rounded-full border-[3px] border-[#9A8AFE80] bg-white p-2 relative"
                >
                  <Image
                    src={info.img}
                    alt="social icon"
                    width={24}
                    height={24}
                    className="absolute"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-[1320px] h-[18px] opacity-20 ">
          <p className="text-[14px] font-[400] leading-[130%] tracking-[0%] font-inter text-[#0F0F0F]">
            Copyright © 2024 Klink Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

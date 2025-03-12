import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background Grid */}
      <div className="max-w-[1320px] w-full px-4 md:px-8 mx-auto relative">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>

        {/* First Row: Logo & Useful Resources */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {/* Left Column: Logo & Mission */}
          <div>
            <img src="/klink-logo.svg" alt="Klink Logo" className="h-12 mb-4" />
            <p className="text-[#0F0F0F] font-normal text-[16px] md:text-[18px] opacity-50 max-w-[679px]">
              Our mission is to activate millions of Web3 users through
              AI-enabled wealth creation technology, mutually servicing our
              community platform and providing partners with easy-to-embed
              integration tools to assist their activation and monetization.
            </p>
          </div>

          {/* Right Column: Useful Resources */}
          <div className="flex justify-start md:justify-end">
            <div className="text-left">
              <h3 className="text-[22px] md:text-[28px] font-extrabold mb-4">
                Useful Resources
              </h3>
              <ul className="space-y-[20px] md:space-y-[30px]">
                {[
                  "Buy $KLINK",
                  "Stake $KLINK",
                  "Klink Docs",
                  "Media Kit",
                  "Link 3",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-[#0F0F0F] cursor-pointer text-[16px] md:text-[18px] font-normal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row: Subscription & Social Media */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
          {/* Left Column: Subscription */}

          <div>
            <p className="text-[#0F0F0F] mb-3 opacity-50">
              <span className="font-normal text-[16px] md:text-[18px]">
                Don’t miss{" "}
              </span>
              <span className="font-bold text-[16px] md:text-[18px]">
                $KLINK News & Promotions
              </span>
              <span className="font-normal text-[16px] md:text-[18px]">
                , subscribe!
              </span>
            </p>
            <div className="relative w-full max-w-[493px]">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full h-[60px] md:h-[72px] p-[14px] md:p-[16px] pr-[110px] md:pr-[140px] rounded-[100px] border border-[#9C78ED80] 
                bg-[#FFFFFF0D] text-black placeholder:text-gray-400"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[100px] md:w-[118px] h-[48px] md:h-[56px] bg-gradient-to-r from-[#674EFF] to-[#714EBD] 
              rounded-[100px] text-white font-medium text-[14px] md:text-[16px] flex justify-center items-center"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Column: Social Media */}
          <div className="flex space-x-3 md:space-x-4 justify-start md:justify-end">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full border-[2px] md:border-[3px] border-[#9A8AFE80] 
      bg-white p-2 relative cursor-pointer"
              >
                <Image
                  src={info.img}
                  alt="social icon"
                  width={22}
                  height={22}
                  className="absolute"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <hr className="w-full border-t border-black opacity-10 mt-6" />

        {/* Container for Equal Spacing */}
        <div className="flex flex-col justify-center items-start text-left py-6 opacity-20">
          <p className="text-[12px] md:text-[14px] font-[400] leading-[130%] tracking-[0%] text-[#0F0F0F]">
            Copyright © 2024 Klink Finance. All rights reserved.
          </p>
        </div>

        {/* Horizontal Line (Below) */}
        <hr className="w-full border-t border-black opacity-10" />

        {/* Second Paragraph with Equal Spacing */}
        <div className="flex flex-col justify-center items-start text-left py-8 opacity-20 w-full">
          <p className="text-[12px] md:text-[14px] font-[400] leading-[130%] tracking-[0%] text-[#0F0F0F] max-w-[800px]">
            Klink Finance sp. z o.o. is a limited liability company registered
            in Poland with company number 0000957722 with a registered office
            address at Twarda, 18, 00-105 Warsaw, Poland. Klink Finance is
            registered in the Virtual Currency Registry under the control of the
            Chamber of Tax Administrations in Poland under number RDWW-570.
            Digital currency is not legal tender, is not backed by national
            governments, and crypto accounts held with Klink Finance are not
            subject to FDIC, FSCS, ECB or similar protections. Digital currency
            values are not static and fluctuate due to market changes. Not all
            products and services are available in all geographic areas and are
            subject to applicable terms and conditions. Eligibility for
            particular products and services is subject to final determination
            by Klink Finance. Rewards related to Klink products are subject to
            change over time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

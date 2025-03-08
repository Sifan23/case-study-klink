import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
        {/* Left Column: Logo & Mission */}
        <div>
          <img src="/klink-logo.svg" alt="Klink Logo" className="h-12 mb-4" />
          <p className="text-gray-300">
            Our mission is to revolutionize decentralized finance by making
            $KLINK accessible and rewarding for everyone.
          </p>
        </div>
        {/* Right Column: Useful Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Resources</h3>
          <ul className="space-y-2">
            {[
              "Buy $KLINK",
              "Stake $KLINK",
              "Klink Docs",
              "Media Kit",
              "Link 3",
            ].map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-gray-300 mb-3">
        Don’t miss $KLINK News & Promotions, subscribe!
      </p>
      {/* Second Row: Two Columns (Subscription & Social Media) */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {/* Left Column: Subscription */}
        <div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg w-full text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Column: Social Media */}
        <div className="flex space-x-4 justify-start md:justify-end">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              // href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-lg border border-gray-500 hover:bg-gray-600 transition"
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>
      </div>
    </footer>
  );
};

export default Footer;

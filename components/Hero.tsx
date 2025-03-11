import { FaLocationArrow, FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AuditedButton from "./AuditedButton";
import { listingPlatforms } from "@/data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-20 bg-black-100 rounded-[35px] rounded-tr-none min-h-[900px] relative">
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <div>
            <p className="text-left md:tracking-wider text-[40px] md:text-[60px] lg:text-[76px] font-semibold bg-purpleGradient bg-clip-text text-transparent tracking-[-1px] leading-[1] m-0">
              $KLINK
            </p>
            <p className="text-white text-[40px] md:text-[60px] lg:text-[76px] font-semibold leading-[79.8px] tracking-[-1px]  text-left m-0">
              The AI-powered infrastructure for Web3 earnings
            </p>
          </div>
          <div className="flex flex-row space-x-4 md:space-x-6 mt-10">
            <a href="#about">
              <MagicButton
                title="Buy $KLINK"
                icon={<FaLocationArrow />}
                position="right"
                bgColor="linear-gradient(to right, #674EFF, #714EBD)"
                borderColor="#9A8AFE"
                textColor="#FFFFFF"
                padding="16px 24px"
                borderRadius="36.82px"
                fontSize="16px"
                fontWeight="600"
              />
            </a>
            <a href="#about">
              <MagicButton
                title="Stake $KLINK"
                icon={<FaLocationArrow />}
                position="right"
                bgColor="rgba(103, 78, 255, 0.1)"
                borderColor="rgba(154, 138, 254, 0.5)"
                textColor="#FFFFFF"
                padding="16px 24px"
                borderRadius="36.82px"
                fontSize="16px"
                fontWeight="600"
              />
            </a>
          </div>
          <div className="mt-10">
            <p className="text-left text-white mb-5 md:tracking-wider text-[14px] md:text-[15px] lg:text-[16px] font-semibold tracking-[-1px]">
              Audited By
            </p>
            <AuditedButton />
          </div>
        </div>

        {/* Right Side: Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 h-full flex justify-center items-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webm"
              type="video/webm"
            />
            <source
              src="https://klink-cdn.klink.finance/ecosystem/klink_coin.mov"
              type="video/mov"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* $KLINK Listed On Section (Spanning Both Grids) */}
      <div className="absolute left-0 right-0 top-[80%] flex flex-col items-start z-0 px-20">
        <div className=" h-[21px] opacity-70 bg-transparent text-white font-inter font-semibold text-[16px] leading-[130%] tracking-[-1%]  text-center">
          $KLINK Listed On
        </div>

        {/* Platform Cards */}
        <div className="flex justify-center flex-wrap gap-4 mt-3 w-full max-w-[90vw]">
          {listingPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="flex justify-center items-center border-2 border-[#362B4F] bg-[#2E2746] rounded-[16px] p-[10px] px-[8px]"
              style={{ height: "53.31px", width: "auto" }}
            >
              <Image
                src={platform.img}
                alt={`Platform ${platform.id}`}
                width={100}
                height={53}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

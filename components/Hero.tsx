import { FaLocationArrow, FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AuditedButton from "./AuditedButton";
import { listingPlatforms } from "@/data";
import Image from "next/image";
import { InfiniteMovingPlatformCards } from "./ui/InfiniteMovingPlatformCards";

const Hero = () => {
  return (
    <div className="p-8 md:p-20 bg-black-100 rounded-[35px] rounded-tr-none min-h-[900px] relative overflow-hidden flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
      {/* === Text Content === */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center flex-grow md:flex-grow-0 max-w-[800px]">
        <p className="text-center md:text-left md:tracking-wider text-[40px] md:text-[60px] lg:text-[56px] font-semibold bg-purpleGradient bg-clip-text text-transparent tracking-[-1px] leading-[1] m-0">
          $KLINK
        </p>
        <p className="text-white text-[32px] md:text-[56px] font-semibold leading-tight md:leading-[105%] tracking-[-1px] text-center md:text-left m-0 max-w-[600px]">
          The AI-powered infrastructure for Web3 earnings
        </p>
        <div className="flex flex-row space-x-4 md:space-x-6 mt-10 mb-8">
          <a href="#about">
            <MagicButton
              title="Buy $KLINK"
              icon={<FaLocationArrow />}
              position="right"
              bgColor="linear-gradient(to right, #674EFF, #714EBD)"
              borderColor="#9A8AFE"
              textColor="#FFFFFF"
              padding="12px 20px"
              borderRadius="36.82px"
              fontSize="16px"
              fontWeight="600"
              otherClasses="w-[130px] h-[48px] whitespace-nowrap"
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
              padding="12px 20px"
              borderRadius="36.82px"
              fontSize="16px"
              fontWeight="600"
              otherClasses="w-[130px] h-[48px] whitespace-nowrap"
            />
          </a>
        </div>

        {/* === Audited By Section for Small Devices === */}
        <div className="mt-auto md:mb-0 pt-10 mb-20">
          <p className="text-center sm:text-left text-white mb-5 md:tracking-wider text-[14px] md:text-[15px] lg:text-[16px] font-semibold tracking-[-1px]">
            Audited By
          </p>
          <AuditedButton />
        </div>
      </div>
      <div className="absolute bottom-0 md:bottom-20 left-0 w-full z-20 px-8 md:px-20">
        <div className="text-white font-inter font-semibold text-[14px] md:text-[15px] lg:text-[16px] leading-[130%] tracking-[-1%] text-center sm:text-left mb-0 sm:mb:2">
          $KLINK Listed On
        </div>

        {/* Platform Cards - Now Spanning Full Width */}
        <div className="w-full">
          <InfiniteMovingPlatformCards
            items={listingPlatforms}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>

      {/* === Desktop Video (Right Side) === */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-2/3 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
            bottom: "-300px",
            right: "-100px",
            width: "300%",
            height: "300%",
            zIndex: -1,
          }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute"
          style={{
            width: "120%",
            height: "135%",
            bottom: "-320px",
            right: "-180px",
          }}
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
      </div>

      {/* === Mobile Video (Larger Size, Pushed Out) === */}
      <div className="block md:hidden absolute bottom-0 left-0 w-full h-[500px] overflow-visible">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-cover"
          style={{
            width: "150%", // Increase width
            height: "150%", // Increase height
          }}
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
      </div>
    </div>
  );
};

export default Hero;

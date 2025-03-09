import { FaLocationArrow, FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AuditedButton from "./AuditedButton";

const Hero = () => {
  return (
    <div className="p-20 bg-black-100 rounded-[35px] rounded-tr-none">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <p className="text-left md:tracking-wider text-[40px] m-0 p-0 md:text-[60px] lg:text-[76px] font-semibold tracking-[-1px] bg-purpleGradient bg-clip-text text-transparent">
            $KLINK
          </p>
          <p className="text-left text-white m-0 p-0 md:tracking-wider text-[40px] md:text-[60px] lg:text-[76px] font-semibold tracking-[-1px]">
            The AI-powered infrastructure for Web3 earnings
          </p>
          <div className="flex flex-row space-x-4 md:space-x-6">
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
          <div>
            <p className="text-left mt-10 md:tracking-wider text-[14px] md:text-[15px] lg:text-[16px] font-semibold tracking-[-1px]">
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
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[400px] h-[400px] object-contain"
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
    </div>
  );
};

export default Hero;

import { FaLocationArrow, FaCopy } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AuditedButton from "./AuditedButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-start relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          {/* <TextGenerateEffect
            words="$KLINK The Ai"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}
          <p className="text-center md:tracking-wider  text-[40px] md:text-[60px] lg:text-[76px] font-semibold tracking-[-1px] bg-purpleGradient bg-clip-text text-transparent">
            $KLINK
          </p>

          <p className="text-left md:tracking-wider text-[40px] md:text-[60px] lg:text-[76px] font-semibold tracking-[-1px]">
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
                bgColor="rgba(103, 78, 255, 0.1)" /* #674EFF1A */
                borderColor="rgba(154, 138, 254, 0.5)" /* #9A8AFE80 */
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
            {/* <MagicButton
              title="Audited By"
              imageSrc="/path-to-your-logo.png" // Auditor logo
              address="0xSDAF...k67a"
              position="right"
              divider={true} // Show the divider
              icon={<FaCopy />} // Add the copy icon
              bgColor="#55468B4D"
              borderColor="#9C78ED33"
              textColor="#FFFFFF"
              padding="10px 16px"
              borderRadius="16px"
              fontSize="14px"
              fontWeight="600"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

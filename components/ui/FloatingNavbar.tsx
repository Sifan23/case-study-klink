"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MagicButton from "../MagicButton";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import ConnectWalletButton from "../ConnectWalletButton";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    color: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { walletInfo, connectWallet, disconnectWallet, connectors } =
    useConnectWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleConnectWallet = () => {
    if (connectors.length > 0) {
      connectWallet(connectors[0]);
    }
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
    setIsMenuOpen(false); // Close the dropdown when disconnected
  };

  return (
    <nav className="relative w-full rounded-tr-[35px]  shadow-md mt-10">
      <div className=" flex items-center justify-between w-full p-6 relative">
        <Image
          src="/klink-logo.svg"
          alt="Logo"
          width={120} // Reduce default width for mobile
          height={20} // Adjust height proportionally
          className="h-5 w-28 sm:h-8 sm:w-32 md:h-10 md:w-60 lg:h-12 lg:w-64 xl:h-16 xl:w-[246.6666px] xl:pl-6"
          priority
        />

        {/* <div className="bg-white sm:pl-20 pr-4 py-2 rounded-r-lg relative z-10 border-l-0"></div> */}
        {/* Background - Starts After Logo */}
        <div className="absolute left-[130px] sm:left-[370px] top-0 w-[calc(100%-130px)] sm:w-[calc(100%-370px)] h-full bg-black-100 -z-10 rounded-tl-[35px] rounded-tr-[35px] rounded-bl-none">
          {/* Inverted bottom-left border */}
          <div className="absolute -bottom-0 -left-24 h-10 w-24 rounded-br-lg bg-transparent shadow-[0.5rem_0_0_0] bg-black-100"></div>
        </div>

        <div className="flex space-x-6 sm:flex hidden">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
              style={{ color: navItem.color }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        {/* Dropdown Menu for Small Screens */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className="absolute left-0 top-[100px] bg-[#29243f] w-full shadow-md flex flex-col p-4 sm:hidden z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2"
                  )}
                  style={{ color: navItem.color }}
                >
                  <span className="text-sm !cursor-pointer">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* <ConnectButton /> */}
        <div className="flex gap-2">
          {!walletInfo.isConnected ? (
            <ConnectWalletButton onClick={handleConnectWallet} />
          ) : (
            <>
              {/* For Desktop: Always show Connect button */}

              {/* Dropdown for Wallet Address on Desktop and Mobile */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center justify-between sm:w-[220px] sm:max-w-[250px] sm:h-[54px] sm:gap-[4px] sm:rounded-[36.82px] sm:border-[1.5px] sm:px-[24px] sm:py-[16px] bg-[#2D2A4A] text-white rounded-lg sm:bg-[#674EFF1A] sm:border-[#9A8AFE80] sm:rounded-[36.82px] px-2 py-2 sm:px-[24px] sm:py-[16px] mobile:bg-gradient-to-r mobile:from-[#674EFF] mobile:to-[#714EBD]"
                  >
                    <span className="text-sm">
                      {walletInfo.address?.substring(0, 6)}...
                      {walletInfo.address?.substring(
                        walletInfo.address.length - 4
                      )}
                    </span>
                    <FaChevronDown className="ml-2" />
                  </button>

                  <div className="hidden sm:flex items-center mb-6">
                    <ConnectWalletButton onClick={handleConnectWallet} />
                  </div>
                </div>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-0 top-full mt-2 w-[200px] bg-[#2D2A4A] border border-[#9A8AFE] rounded-lg shadow-lg p-2 z-50"
                    >
                      <button
                        onClick={handleDisconnectWallet}
                        className="w-full px-4 py-2 text-white text-sm rounded-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, #674EFF 0%, #714EBD 100%)",
                          border: "1.5px solid #9A8AFE",
                        }}
                      >
                        Disconnect Wallet
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
        {/* Hamburger Button for Small Screens */}
        <button
          className="sm:hidden flex items-center justify-center w-[48px] h-[48px] rounded-full p-[16px] bg-[#55468B4D] text-white text-[24px]"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
    </nav>
  );
};

<style jsx>{`
  .inverted-border {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10%;
    height: 70%;
    background-color: white;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
`}</style>;

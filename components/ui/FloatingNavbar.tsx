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
import MagicButton from "../MagicButton";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import ConnectWalletButton from "../ConnectWalletButton";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { walletInfo, connectWallet, disconnectWallet, connectors } =
    useConnectWallet();
  const handleConnectWallet = () => {
    console.log("button clicked");
    // Handle wallet connection
    if (connectors.length > 0) {
      connectWallet(connectors[0]);
    }
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
  };
  return (
    <nav className="relative w-full rounded-tr-[35px]  shadow-md mt-10">
      <div className=" flex items-center justify-between w-full p-6 relative">
        <div className="bg-white pl-20 pr-4 py-2 rounded-r-lg relative z-10">
          <img src="/klink-logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>
        {/* Background - Starts After Logo */}
        <div className="absolute left-[450px] top-0 w-[calc(100%-450px)] h-full bg-black-100 -z-10 rounded-tl-[35px]  rounded-tr-[35px] rounded-bl-none"></div>

        <div className="flex space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        {/* <ConnectButton /> */}
        <div className="flex gap-2">
          {!walletInfo.isConnected ? (
            <ConnectWalletButton onClick={handleConnectWallet} />
          ) : (
            <div className="flex gap-4 items-center">
              {/* Address Text Field */}
              <input
                type="text"
                value={walletInfo.address}
                readOnly
                className="w-[308.83px] h-[54px] rounded-[36.82px] border-[1.5px] border-[#9A8AFE] px-[24px] py-[16px] text-white bg-transparent font-semibold"
                style={{
                  letterSpacing: "-1%",
                  fontFamily: "Inter",
                  lineHeight: "130%",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  verticalAlign: "middle", // Fix vertical alignment here
                }}
              />

              {/* Disconnect Button */}
              <button
                onClick={handleDisconnectWallet}
                className="px-[24px] py-[16px] text-white rounded-[36.82px] flex items-center justify-center gap-[9.82px] text-center"
                style={{
                  background:
                    "linear-gradient(90deg, #674EFF 0%, #714EBD 100%)",
                  border: "1.5px solid #9A8AFE",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "-1%",
                  display: "flex",
                  alignItems: "center", // Ensure button content is centered vertically
                  verticalAlign: "middle", // Align button to the middle of its container
                }}
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
        {/* <MagicButton
          title="Connect Wallet"
          icon={<FaLocationArrow />}
          position="right"
          bgColor="linear-gradient(to right, #674EFF, #714EBD)"
          borderColor="#9A8AFE"
          textColor="#FFFFFF"
          padding="16px 24px"
          borderRadius="36.82px"
          fontSize="16px"
          fontWeight="600"
        /> */}
      </div>
    </nav>
  );
};

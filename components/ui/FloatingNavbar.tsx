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
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <nav className="w-full bg-[#0F0F14] shadow-md py-4 z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <img src="/klink-logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>
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
        <MagicButton
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
        />
      </div>
    </nav>
  );
};

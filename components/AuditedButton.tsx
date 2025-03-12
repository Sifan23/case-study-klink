import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const AuditedButton = () => {
  return (
    <div className="flex">
      {/* Left Card */}
      <div className="w-[159px] h-[53.31px] bg-[#29243f] flex items-center justify-center rounded-tl-[16px] rounded-bl-[16px] border-r-[1.5px] border-[#9C78ED33]">
        <img
          src="/certik.svg"
          alt="Auditor Logo"
          className="w-[97.43px] h-[24px]" // Updated size
        />
      </div>

      {/* Right Card */}
      <div className="w-[159px] h-[53.31px] bg-[#463964] flex items-center justify-between px-4 rounded-tr-[16px] rounded-br-[16px] border-l-[1.5px] border-[#9C78ED33]">
        <p className="text-[14px] font-medium text-[#7767c5]">0xSDAF...k67a</p>
        <IoCopyOutline className="text-[#7767c5] cursor-pointer" />
      </div>
    </div>
  );
};

export default AuditedButton;

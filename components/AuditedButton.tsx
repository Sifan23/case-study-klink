import React from "react";
import { FaCopy } from "react-icons/fa";

const AuditedButton = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[290px] h-[44px] p-[10px 16px] border-2 border-[#9C78ED33] rounded-[16px] bg-[#55468B4D]">
      {/* First part: Auditor's logo */}
      <div className="flex items-center">
        <img
          src="/certik.svg" // Replace with the actual logo URL
          alt="Auditor Logo"
          className="w-[50px] h-[50px] mr-3"
        />
      </div>

      {/* Divider */}
      <div className="h-[24px] w-[1px] bg-gray-300 mx-4" />

      {/* Second part: Address and copy icon */}
      <div className="flex items-center flex-grow w-full">
        <p className="text-[14px] font-medium text-gray-600">0xSDAF...k67a</p>
        <FaCopy className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default AuditedButton;

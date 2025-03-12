import React from "react";

interface ConnectWalletButtonProps {
  onClick: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="mt-5 px-[20px] py-[16px] text-white rounded-[36.82px] flex items-center justify-center gap-[9.82px] px-2 py-2 text-center text-[10px] sm:text-[16px] sm:px-[24px] sm:py-[18px] text-sm w-full sm:w-auto"
      style={{
        background: "linear-gradient(90deg, #674EFF 0%, #714EBD 100%)",
        border: "1.5px solid #9A8AFE",
        fontWeight: 600,
        // fontSize: "16px", // Default font size for desktop
        lineHeight: "130%",
        letterSpacing: "-1%",
      }}
    >
      Connect wallet
    </button>
  );
};

export default ConnectWalletButton;

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
      className="mt-5 px-[20px] py-[16px] text-white rounded-[36.82px] flex items-center justify-center gap-[9.82px] text-center"
      style={{
        background: "linear-gradient(90deg, #674EFF 0%, #714EBD 100%)",
        border: "1.5px solid #9A8AFE",
        fontFamily: "Inter",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "130%",
        letterSpacing: "-1%",
      }}
    >
      Connect wallet
    </button>
  );
};

export default ConnectWalletButton;

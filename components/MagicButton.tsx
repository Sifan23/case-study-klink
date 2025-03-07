import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  bgColor,
  borderColor,
  textColor,
  padding,
  borderRadius,
  fontSize,
  fontWeight,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  bgColor: string;
  borderColor: string;
  textColor: string;
  padding: string;
  borderRadius: string;
  fontSize: string;
  fontWeight: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex  overflow-hidden rounded-lg p-[1px] focus:outline-none"
      style={{
        background: bgColor,
        border: `1.5px solid ${borderColor}`,
        padding: padding,
        borderRadius: borderRadius,
      }}
      onClick={handleClick}
    >
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center text-sm font-medium backdrop-blur-3xl gap-2"
        style={{ color: textColor, fontSize: fontSize, fontWeight: fontWeight }}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

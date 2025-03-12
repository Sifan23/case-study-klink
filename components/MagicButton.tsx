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
  bgColor = "transparent",
  borderColor = "transparent",
  textColor = "#FFFFFF",
  padding = "px-4 py-2",
  borderRadius = "rounded-md",
  fontSize = "text-sm",
  fontWeight = "font-medium",
  otherClasses = "",
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
      className={`relative inline-flex  overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      style={{
        background: bgColor,
        border: `1.5px solid ${borderColor}`,
        padding: padding,
        borderRadius: borderRadius,
      }}
      onClick={handleClick}
    >
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center text-sm font-medium backdrop-blur-3xl gap-2"
        style={{ color: textColor, fontSize: fontSize, fontWeight: fontWeight }}
      >
        {title}
      </span>
    </button>
  );
};

export default MagicButton;

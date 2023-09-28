import { useState } from "react";

export const HoverButton = ({ className, onClick, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`bg-background text-foreground w-35 h-30 p-4 ${className} ${
        isHovered ? "border-2 border-yellow-400" : ""
      }`}
      variant="outline"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default HoverButton;

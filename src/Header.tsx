import { useState } from "react";
import Redes from "./components/ui/Redes";
import { ModeToggle } from "./components/mode-toggle";
import Logo from "./assets/logo (1).png";

export default function Header() {
  const [deg, setDeg] = useState(0);

  function rotateLogo() {
    setDeg(20);
  }

  function leaveLogo() {
    setDeg(0);
  }

  return (
    <div className="p-4 h-24 md:h-1 sm:p-8  flex items-center justify-between border-b relative z-50" id="start">
      <img
        style={{ transform: `rotate(${deg}deg)` }}
        onMouseEnter={rotateLogo}
        onMouseLeave={leaveLogo}
        className="w-12 rotate-0 transition-transform duration-500 z-50"
        src={Logo}
        alt="Minha-Logo"
      />
      <div className="relative">
        <div className=" w-40 sm:w-96 bg-secondary/5 relative">
          <div className="absolute"></div>
          <div className="relative z-10 flex items-center justify-center">
            <Redes />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground"></span>
        <ModeToggle />
      </div>
    </div>
  );
}

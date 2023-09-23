import { useTranslation } from "react-i18next";
import ModalNav from "./components/modal-nav";
import Sun from "./assets/Sun-1.png"
import { PiFlowArrowDuotone } from "react-icons/pi"
import Eight from "./assets/terra_3 (1).png";
import Moon from "./assets/lua (1).png";
import "./styles/style.css";
import { useEffect, useState } from "react";

export default function Start() {
  const [earthRotation, setEarthRotation] = useState(0);
  const [moonRotation, setMoonRotation] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setEarthRotation((prevRotation) => (prevRotation + 1) % 360);
      setMoonRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 100);

    return () => clearInterval(animationInterval);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div style={{ height: "840px" }} className="flex flex-col items-center w-full relative mb-36" id="startSection">
        <ModalNav />
        <div className="flex flex-col mt-20 text-center h-5/6 w-3/4 z-50">
          <h4 className="text-xl text-shadow-xl">{t("presentation")}</h4>
          <h1 className="text-7xl text-center text-shadow-2xl">Caio Lima</h1>
          <h3 className="text-2xl text-center text-shadow-2xl">{t("about")}</h3>
        </div>
        <div style={{ width: "840px", height: "840px", transform: `rotate(${earthRotation}deg)`, }} className="absolute top-16 flex items-center justify-center border border-dashed border-zinc-600 rounded-full">
          <img
            className="absolute w-24 top-12  z-10  bg-white border-2  border-zinc-100 rounded-full"
            src={Eight}
            alt=""
          />
          <div style={{ width: "200px", height: "200px", transform: `rotate(${moonRotation}deg)` }} className="absolute top-0 z-10 flex items-center justify-center border border-dashed border-zinc-600 rounded-full">
            <div>
              <img className="absolute bottom-44 w-10 h-10  bg-white border-2  border-zinc-100 rounded-full" src={Moon} alt="" />
            </div>
          </div>
        </div>
        <div style={{ width: "640px", height: "640px", transform: `rotate(${earthRotation}deg)`, }} className="absolute bottom-10  flex items-center justify-center border border-dashed border-zinc-600 rounded-full">
        </div>
        <div style={{ width: "450px", height: "450px" }} className="absolute top-64 flex items-center justify-center  border border-dashed border-zinc-600  rounded-full">
        <div className="w-full flex items-center justify-center">
        <div className="absolute top-14 right-40 z-10">
          <span className="absolute left-14 top-0 text-xl">Sol</span>
          <PiFlowArrowDuotone className="absolute text-5xl text-yellow-400"/>
        </div>

      <img
        className="w-80  mx-auto z-0  bg-white border-4  border-zinc-100 rounded-full"
        src={Sun}
        alt="imagem-da-nave"
      />
    </div>
        </div>
      </div>
    </>
  );
}

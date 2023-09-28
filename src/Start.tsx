import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sun from "./assets/Sun-1.png"
import { PiFlowArrowDuotone } from "react-icons/pi"
import Eight from "./assets/terra_3 (1).png";
import Moon from "./assets/lua (1).png";
import "./styles/style.css";

export default function Start() {
  const [earthRotation, setEarthRotation] = useState(0);
  const [moonRotation, setMoonRotation] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1148);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setEarthRotation((prevRotation) => (prevRotation + 1) % 360);
      setMoonRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 100);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1148);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div
        id="start-mobile"
        style={{
          height: isMobileView ? "400px" : "840px",
          marginBottom: isMobileView ? "400px" : "150px",
        }}
        className="circle flex flex-col items-center w-full relative mb-36"
      >
        <div className="flex flex-col mt-20 text-center h-5/6 w-3/4 z-50">
          <h4 className="text-xl text-shadow-xl">{t("presentation")}</h4>
          <h1 className="text-7xl text-center text-shadow-2xl">Caio Lima</h1>
          <h3 className="text-2xl text-center text-shadow-2xl">{t("about")}</h3>
        </div>
        <div
          id="start-mobile"
          style={{
            width: isMobileView ? "300px" : "840px",
            height: isMobileView ? "300px" : "840px",
            transform: `rotate(${earthRotation}deg)`,
          }}
          className="absolute top-16 flex items-center justify-center border border-dashed border-zinc-600 rounded-full"
        >
          <img
            style={{ width: isMobileView ? "70px" : "100px" }}
            className="absolute top-12 z-10 bg-white border-2 border-zinc-100 rounded-full"
            src={Eight}
            alt=""
          />
          <div
            style={{
              width: isMobileView ? "150px" : "200px",
              height: isMobileView ? "150px" : "200px",
              transform: `rotate(${moonRotation}deg)`,
            }}
            className="absolute top-0 z-10 flex items-center justify-center border border-dashed border-zinc-600 rounded-full"
          >
            <div>
              <img
                style={{ bottom: isMobileView ? "100px" : "176px" }}
                className="absolute bottom-44 w-10 h-10 bg-white border-2 border-zinc-100 rounded-full"
                src={Moon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          id="start-mobile-border"
          style={{
            width: isMobileView ? "200px" : "640px",
            height: isMobileView ? "200px" : "640px",
            bottom: isMobileView ? "" : "40px",
            top: isMobileView ? "11rem" : "",
            transform: `rotate(${earthRotation}deg)`,
          }}
          className="absolute flex items-center justify-center border border-dashed border-zinc-600 rounded-full"
        ></div>
        <div
          style={{
            width: isMobileView ? "160px" : "370px",
            height: isMobileView ? "160px" : "370px",
            top: isMobileView ? "246px" : "256px",
          }}
          className="absolute flex items-center justify-center border border-dashed border-zinc-600 rounded-full"
        >
          <div className="w-full flex items-center justify-center">
            <div className="absolute top-14 right-28 z-10">
              <span className="absolute left-14 top-0 text-xl">Sol</span>
              <PiFlowArrowDuotone className="absolute text-5xl text-yellow-400" />
            </div>
  
            <img
              style={{ width: isMobileView ? "120px" : "200px" }}
              className="mx-auto z-0 bg-white border-4 border-zinc-100 rounded-full"
              src={Sun}
              alt="imagem-da-nave"
            />
          </div>
        </div>
      </div>
    </>
  );
  
}

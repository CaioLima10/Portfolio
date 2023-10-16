import { useState } from "react";
import AstronautaImg from "../assets/AstronautaOne.png";
import AstrountLeft from "../assets/astronaut-left.png";
import AstronautBottom from "../assets/AstronautBottom.png";
import AstronatBottomRight from "../assets/AstronautBottomRight.png";
import AstronautRight from "../assets/AstronautRight.png";
import CharacterFemale from "../assets/Personagem-Feminina.png";
import CharacterFemaleLeft from "../assets/personagem-feminino-right(1).png";
import CharacterFemaleRight from "../assets/Personagem-feminina-left_1695145474659.png";
import FemaleProfile from "../assets/Personagem-Feminina -perfil.png"
import MaleProfile from "../assets/AstronautaOne-perfil.png"
import OrigemCyberTron from "../assets/cybertron-planet.png"
import vitrinePersonagem from "../assets/vitrine-personagens-PhotoRoom.png-PhotoRoom.png"

import "../styles/style.css"

import ptBR from "../assets/prBR.webp"

import { Button } from "./ui/button";
import { ChevronDown, Infinity, RefreshCcw } from "lucide-react";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

export default function Character() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAstronaut, setShowAstronaut] = useState(true);
 
  const astronautImages = [AstronautaImg, AstrountLeft, AstronautBottom, AstronatBottomRight, AstronautRight];
  const characterImages = [CharacterFemale, CharacterFemaleLeft, CharacterFemaleRight];

  const { t } = useTranslation();

  const imageStyleForCharacterFemaleCompleted = {
    width: "120px",
    height: "auto",
  };

  function handleNextImage() {
    if (showAstronaut) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % astronautImages.length);
    }
  }

  function handleNextImageDuo() {
    if (!showAstronaut) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % characterImages.length);
    }
  }

  function handleClickBtn() {
    setShowAstronaut(true);
    setCurrentImageIndex(0);
  }

  function handleClickFemale() {
    setShowAstronaut(false);
    setCurrentImageIndex(0);
  }

  return (
    <>
        <div className="mb-24  w-full flex flex-col items-center justify-center relative">
          <img style={{ zIndex: "30" }}  className="absolute  md:top-36" src={ vitrinePersonagem } alt="" />
          <div id="animate-shrinkHeight">
            <div id="border-animate-shrinkHeight"></div>
          </div>

          <div className="absolute top-88 ">
            <div className="flex items-center">
              <small className="flex w-30">{ showAstronaut && <small>{t("level")}: 26</small> || <small><Infinity /></small> }</small>
              <Separator className="w-60 z-0" />
              <div className="flex flex-col relative">
                <small className="flex">{t("origin")}:</small>
                { showAstronaut && (
                  <img className="w-14 flex items-center justify-center" src={ptBR} alt="" />
                ) || (
                  <>
                    <img  className="w-12 flex items-center justify-center" src={OrigemCyberTron} alt="Cybertron" />
                    <span className="w-12 text-base text-zinc-500  flex items-center justify-center mt-2" >Cybertron</span>
                  </>
                ) }
              </div>
            </div>
          </div>
        <div>
          <div
            onClick={handleNextImage}
            className="w-full md:max-w-screen h-88 p-12 z-30 transform flex justify-center items-center rotate-0 border-0.3px border-white-28  shadow-10 hover:shadow-20 relative transition-all duration-300"
            >
              
          {showAstronaut ? (
            <>
            <RefreshCcw className="absolute top-64" />
            
            <div className="w-40 md:w-20 mx-auto my-8 md:my-12 ">
              <img
                src={astronautImages[currentImageIndex]}
                alt="nave"
                style={{
                  objectFit: "contain"
                }}
                className={` scale-125 cursor-pointer flex cover absolute -bottom-[20.5rem] md:-bottom-[20rem] left-0 right-0 m-auto max-w-screen max-h-full shadow-2xl`}
                id="img-astronaut"
              />

            </div>
            </>
            ) : (
              <>  
            <RefreshCcw className="absolute top-64" />
            <div className="w-40 md:w-20 mx-auto my-8 md:my-12">
            <img
                onClick={handleNextImageDuo}
                src={characterImages[currentImageIndex]}
                alt="Personagem-Feminina"
                style={{
                  ...imageStyleForCharacterFemaleCompleted,
                  objectFit: "contain",
                  transform: "scale(1.3)"
                }}
                className={` flex cover absolute -bottom-[20.5rem] md:-bottom-[20rem] left-0 right-0 m-auto max-w-screen max-h-full shadow-2xl`}
              />  
            </div>
            </>
        )}
        </div>
      </div>
        <ChevronDown />
        <span className="absolute bottom-20">{t("character")}</span>
      <div className="flex gap-2 relative">
        <Button className="mt-[32rem] h-16 w-28 bg-background border-2" onClick={handleClickFemale} >
          <img className="absolute w-24 h-24 bottom-0 " src={FemaleProfile} alt="" />
        </Button>
        <Button className="mt-[32rem] h-16 w-28 bg-background border-2" onClick={handleClickBtn}>
          <img className="absolute w-24 h-20 -bottom-0" src={MaleProfile} alt="" />
        </Button>
      </div>
    </div>
    </>
  );
}

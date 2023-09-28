import { useState } from "react";
import AstronautaImg from "../assets/AstronautaOne.png";
import AstrountLeft from "../assets/astronaut-left.png";
import AstronautBottom from "../assets/AstronautBottom.png";
import AstronatBottomRight from "../assets/AstronautBottomRight.png";
import AstronautRight from "../assets/AstronautRight.png";
import PersonagemFeminina from "../assets/Personagem-Feminina.png";
import PersonagemFeminina1 from "../assets/personagem-feminino-right(1).png";
import PersonagemFeminina2 from "../assets/Personagem-feminina-left_1695145474659.png";
import FemininaPerfil from "../assets/Personagem-Feminina -perfil.png"
import masculinoPerfil from "../assets/AstronautaOne-perfil.png"
import OrigemCyberTron from "../assets/cybertron-planet.png"
import vitrinePersonagem from "../assets/vitrine-personagens-PhotoRoom.png-PhotoRoom.png"

import "../styles/style.css"

import ptBR from "../assets/prBR.webp"

import { Button } from "./ui/button";
import { ChevronDown, Infinity, RefreshCcw } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Astronauta() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAstronaut, setShowAstronaut] = useState(true);
 

  const astronautImages = [AstronautaImg, AstrountLeft, AstronautBottom, AstronatBottomRight, AstronautRight];
  const characterImages = [PersonagemFeminina, PersonagemFeminina1, PersonagemFeminina2];

  const imageStyleForPersonagemFeminina1 = {
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

  function handleClickFamely() {
    setShowAstronaut(false);
    setCurrentImageIndex(0);
  }

  return (
    <>
        <div className="mb-24  w-full flex flex-col items-center justify-center relative">
        <h1 className=" flex items-center justify-center text-5xl text-center w-full h-full ">Habilidades Conquistadas</h1>
          <img style={{ zIndex: "30" }}  className="absolute" src={ vitrinePersonagem } alt="" />
          <div id="animate-shrinkHeight">
            <div id="border-animate-shrinkHeight"></div>
          </div>

          <div className="absolute top-88 ">
            <div className="flex items-center">
              <small className="flex w-30">{ showAstronaut && <small>LEVEL: 26</small> || <small><Infinity /></small> }</small>
              <Separator className="w-60 z-0" />
              <div className="flex flex-col relative">
                <small className="flex">ORIGEM:</small>
                { showAstronaut && (
                  <img className="w-14 absolute top-5 right-0" src={ptBR} alt="" />
                ) ||(
                  <>
                    <img  className="w-14 absolute top-5 right-0" src={OrigemCyberTron} alt="Cybertron" />
                    <span className="w-14 text-base text-zinc-500 absolute top-20 right-0" >Cybertron</span>
                  </>
                ) }
              </div>
            </div>
          </div>
      <div className="cursor-pointer ">
          <div
            onClick={handleNextImage}
            className="w-96 h-88 p-12 z-30 transform flex justify-center items-center rotate-0 border-0.3px border-white-28  shadow-10 hover:shadow-20 relative transition-all duration-300"
            >
              
          {showAstronaut ? (
            <>
            <RefreshCcw className="absolute top-48 " />
            
            <div className="w-60 items-center justify-center relative ">

              <img
                src={astronautImages[currentImageIndex]}
                alt="nave"
                className={`flex items-center justify-center w-96 max-h-full mt-44 mb-20 shadow-2xl`}
                id="img-astronaut"
              />

            </div>
            </>
            ) : (
              <>  
            <RefreshCcw className="absolute top-40 " />
              <img
                onClick={handleNextImageDuo}
                src={characterImages[currentImageIndex]}
                alt="Personagem-Feminina"
                style={currentImageIndex === 1 ? imageStyleForPersonagemFeminina1 : {}}
                className="w-40 mt-36 mb-20 z-50"
                />
            </>
        )}
        </div>
      </div>
        <ChevronDown />
        <span className="mb-5">selecione se Personagem</span>
      <div className="flex gap-2 relative">
        <Button className="h-16 w-28 bg-background border-2" onClick={handleClickFamely} >
          <img className="absolute w-24 h-24 bottom-0 " src={FemininaPerfil} alt="" />
        </Button>
        <Button className="h-16 w-28 bg-background border-2" onClick={handleClickBtn}><img className="absolute w-24 h-20 bottom-0" src={masculinoPerfil} alt="" /></Button>
      </div>
    </div>
    </>
  );
}
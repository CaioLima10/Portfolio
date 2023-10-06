import { Separator } from "./components/ui/separator";
import Moon from "./assets/moon1 (1).png"

import { GiBookPile, GiStairsGoal } from "react-icons/gi"
import { IoChatbubblesOutline } from "react-icons/io5"
import { AiOutlineHtml5 } from "react-icons/ai"
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from "react-icons/bi"
import { FaNode } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { Button } from "./components/ui/button";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Footer() {

  return (
    <div id="flex-col" className="flex w-full min-h-full flex-col items-center justify-center relative  bg-gradient-to-r from-black via-gray-900 to-black">
      <Separator />
      <div  className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 mt-5">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl mb-2">Contato</h2>
          <Separator className="w-12 h-2 rounded-md mb-2" />
          <div >
            <p className="flex justify-between text-sm mb-2"><a target="_blank" href="tel:+5511989356304"><Button className="h-8 w-32 gap-1"><BsWhatsapp className="text-2xl" />WhatsApp</Button></a></p>
            <p className="text-sm mb-2"><a href="https://www.linkedin.com/in/caiolimadev10/" target="_blank" rel="noopener noreferrer"><Button className="h-8 w-32 gap-1"><BsLinkedin className="text-2xl" />LinkedIn</Button></a></p>
            <p className="text-sm"><a href="https://github.com/CaioLima10" target="_blank" rel="noopener noreferrer"><Button className="h-8 w-32 gap-1" ><BsGithub className="text-2xl" />GitHub</Button></a></p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GiStairsGoal className="text-5xl" />
          <h2 className="text-2xl mt-3 mb-2">Objetivo</h2>
          <Separator className="w-12 h-2 rounded-md mb-2 " />
          <span className="text-sm">ser Programador...</span>
        </div>
        <div id="flex-item" className="flex flex-col items-center">
          <GiBookPile className="text-6xl" />
          <h2 className="text-2xl mb-2">Conhecimento</h2>
          <Separator className="w-12 h-2 rounded-md mb-2" />
          <div className="flex text-2xl">
            <AiOutlineHtml5 />
            <BiLogoCss3 />
            <BiLogoJavascript />
            <BiLogoTypescript />
            <FaNode />
            <BiLogoReact />
            <SiNextdotjs />
          </div>
        </div>
        <div id="flex-item" className="flex flex-col items-center">
          <IoChatbubblesOutline className="text-6xl" />
          <h2 className="text-2xl mb-2">Mentores</h2>
          <Separator className="w-12 h-2 rounded-md mb-2" />
          <span className="text-sm">Isaias Mendes - Developer web</span>
          <span className="text-sm">Ygor Mendes - Developer web</span>
        </div>
      </div>
      <small className="flex  text-center h-36">
        © 2023 feito por Caio Lima
      </small>
        <img className="absolute bottom-0 right-0 w-56 " src={Moon} alt=""/>
      </div>
  );
}

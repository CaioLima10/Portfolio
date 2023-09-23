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
      <div className="flex min-w-full h-96 flex-col items-center justify-center relative">
        <Separator />
        <div className="w-full grid grid-cols-4 mt-5">
          <div className="flex flex-col items-center border-l border-zinc-800 border-solid pl-4 mb-4">
            <h2 className="text-2xl mb-2">Contato</h2>
            <Separator className="w-12 h-2 rounded-md mb-2" />
            <div >
              <p className="text-sm mb-2"><a target="_blank" href="tel:+5511989356304"><Button className="h-8 p-2 gap-1"><BsWhatsapp className="text-2xl"/>Wathsapp</Button></a></p>
              <p className="text-sm mb-2"> <a href="https://www.linkedin.com/in/caiolimadev10/" target="_blank" rel="noopener noreferrer"><Button className="h-8 p-1 gap-1"><BsLinkedin className="text-2xl"/>Linkedin</Button></a></p>
              <p className="text-sm"><a href="https://github.com/CaioLima10" target="_blank" rel="noopener noreferrer"><Button className="h-8 p-1 gap-1" ><BsGithub className="text-2xl"/>Github</Button></a></p>
            </div>
          </div>
          <div className="flex flex-col  border-l border-zinc-800 border-solid pl-4 items-center mb-4">
            <GiStairsGoal className="text-5xl" />
            <h2 className="text-2xl mb-2">Objetivo</h2>
            <Separator className="w-12 h-2 rounded-md mb-2" />
            <span className="text-sm">ser Programador...</span>
          </div>
          <div className="flex flex-col items-center mb-4 ">
            <GiBookPile className="text-6xl" />
            <h2 className="text-2xl mb-2">Conhecimento</h2>
            <Separator className="w-12 h-2 rounded-md mb-2" />
            <div className="flex text-2xl">
              <AiOutlineHtml5/>
              <BiLogoCss3/>
              <BiLogoJavascript/>
              <BiLogoTypescript/>
              <FaNode/>
              <BiLogoReact/>
              <SiNextdotjs/>
            </div>
          </div>
          <div className="flex flex-col items-center mb-4 border-r border-zinc-800 border-solid pr-4">
            <IoChatbubblesOutline className="text-6xl" />
            <h2 className="text-2xl mb-2">Mentores</h2>
            <Separator className="w-12 h-2 rounded-md mb-2" />
            <span className="text-sm">Isaias Mendes - Developer web</span>
            <span className="text-sm">Ygor Mendes - Developer web</span>
          </div>
        </div>
        <small className="flex mt-5">
          © 2023 feito por caio lima
        </small>
        <img className="absolute bottom-0 right-0 w-56 " src={Moon} alt=""/>
      </div>


  );
}

import { Separator } from "./components/ui/separator";
import  AstronautFocused from "./assets/astronauta-focado (1).png"
import AstronautFocus from "./assets/astronaut-olhando-10 (1).png"
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import { TbBrandHtml5, TbBrandJavascript, TbBrandNodejs, TbBrandTypescript } from "react-icons/tb"
import { SiCss3, SiNextdotjs, SiSqlite } from "react-icons/si"
import { LiaReact } from "react-icons/lia"
import imgJavascript from "./assets/javascript.png"
import imgHtml from "./assets/HTML5.png"
import imgCSS from "./assets/css3.png"
import imgTypescript from "./assets/Typescript.png"
import imgNodejs from "./assets/nodejs.png"
import imgReactJs from "./assets/ReactJs.png"
import imgNextJs from "./assets/nextjs.png"
import imgSqlite from "./assets/SQLite3.png"

import {  useState } from "react";
import { TiArrowRepeat } from "react-icons/ti";


export default function AttributesSkills() {

    const [ astronautOver , setAstronautOver ] = useState(true)

    function toggleAstronautImage() {
        setAstronautOver(!astronautOver);
        }


  return (
    <div className="w-full flex flex-col items-center justify-center relative  mb-28">
        <div className="w-full bg-slate-400/5">
            <h1 className="text-5xl text-center mt-3">Skills</h1>
            <span className="flex items-end justify-end">+ informações clicar nas imagens</span>
            <Separator className="flex items-center justify-center" />
        </div>
        <div

        className="w-full h-96 bg-primary/5 flex">
            <div className="w-1/2 p-2 bg-black relative">
            <TiArrowRepeat className="absolute top-5 left-44 text-3xl " />

            {astronautOver ? (
            <img  onClick={toggleAstronautImage}  className="w-full z-20 absolute" src={AstronautFocused} alt="" />
            ) : (
                <img onClick={toggleAstronautImage}  className="w-full z-20 absolute" src={AstronautFocus} alt="" />
            )}
            </div>
            <Separator className="h-full" orientation="vertical"/>
            <div 
                className="w-3/4 p-4 grid grid-cols-4 gap-4 overflow-hidden"
                >
            <Dialog>
                <DialogTrigger 
                    className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  
                    >
                    <label className="flex w-full h-5  absolute top-0 bg-amber-400 items-center justify-center text-base text-black">JAVASCRIPT</label>
                    <TbBrandJavascript className=" w-full items-center text-8xl "/>
                </DialogTrigger>
                    <DialogContent className="flex flex-col">
                            <div className="flex flex-col relative">
                                <img className="w-20 h-20" src={imgJavascript} alt="" />
                                <h2 className="text-2xl ">Javascript</h2>
                                <div className="p-8 w-full ">
                                    <span>
                                        Comecei minha jornada na programação com a lógica de programação, assistindo aos vídeos
                                        do Guanabara no Visualg. Com o tempo, fui aprimorando meus conhecimentos e avancei para o JavaScript. No início, foi desafiador compreender como trabalhar com eventos, classes e objetos, mas com determinação e perseverança, comecei a entender esses conceitos.
                                        Hoje, sou capaz de criar aplicações utilizando o JavaScript com confiança.
                                    </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-yellow-300">2 Anos</span> </h3>
                                </div>
                            </div>
                            <label className="border-4 border-yellow-300 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  
                >
                    <label className="flex w-full h-5  absolute top-0 bg-orange-400 items-center justify-center text-base text-black">HTML 5</label>
                    <TbBrandHtml5 className=" w-full items-center text-8xl "/>
                </DialogTrigger>
                    <DialogContent>
                    <div className="flex flex-col relative">
                            <img className="w-20 h-20" src={imgHtml} alt="" />
                            <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
                            <div className="p-8 w-full ">
                                <span>
                                HMTL (Linguagem de Marcação de HiperTexto): <br />
                                Foi a primeira vez que coloquei um ' h1 ' com a mensagem "Hello, World!" no código. Nunca esquecerei aquele momento; 
                                fiquei imensamente feliz ao ver algo tão simples, mas impactante, aparecer na tela do navegador.
                                    Esse foi um dos momentos pioneiros que fortaleceu minha paixão pelo desenvolvimento front-end.
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-orange-400">2 Anos</span> </h3>
                            </div>
                        </div>
                            <label className="border-4 border-orange-400 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  
                >
                    <label className="flex w-full h-5  absolute top-0 bg-blue-500 items-center justify-center text-base text-black">CSS 3</label>
                    <SiCss3 className=" w-full items-center text-7xl "/>
                </DialogTrigger>
                    <DialogContent>
                    <div className="flex flex-col relative">
                            <img className="w-20 h-20" src={imgCSS} alt="" />
                            <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    CSS é uma ferramenta incrível para todos que sonham em se tornar front-end. 
                                    Sabemos o quão impressionante ela pode ser quando se trata de estilizar elementos.
                                    No meu caminho, enfrentei muitas dificuldades na parte de flexbox, mas com muita perseverança, consegui aprender, e hoje, 
                                    estilizar componentes se tornou uma das coisas mais gratificantes de fazer. <br />
                                    Atualmente, utilizo Styled-Components e Tailwind CSS.
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-blue-500">2 Anos</span> </h3>
                            </div>
                        </div>
                            <label className="border-4 border-blue-500 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  >
                    <label className="flex w-full h-5  absolute top-0 bg-blue-600 items-center justify-center text-base text-black">TYPESCRIPT</label>
                    <TbBrandTypescript className=" w-full items-center text-8xl "/>
                </DialogTrigger>
                    <DialogContent>
                        <div className="flex flex-col relative">
                            <img className="w-20 h-20" src={imgTypescript} alt="" />
                            <h2 className="text-2xl w-20 flex items-center justify-center">Typescript</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    Estou começando a ganhar mais confiança na criação de aplicações em TypeScript, 
                                    especialmente devido à segurança proporcionada pelas tipagens. Sinto que com TypeScript,
                                    tenho a capacidade de desenvolver aplicações de maior porte com mais tranquilidade.
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-blue-600">10 meses</span> </h3>
                            </div>
                        </div>
                            <label className="border-4 border-blue-600 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  >
                    <label className="flex w-full h-5  absolute top-0 bg-green-400 items-center justify-center text-base text-black">NODE</label>
                    <TbBrandNodejs className=" w-full items-center text-8xl "/>
                </DialogTrigger>
                    <DialogContent>
                        <div className="flex flex-col relative">
                            <img className="w-28 h-18" src={imgNodejs} alt="" />
                            <h2 className="text-2xl w-28 flex items-center justify-center">Node JS</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    Gosto muito do desenvolvimento front-end, mas reconheço que um bom desenvolvedor 
                                    precisa compreender como os dados são transmitidos. Por isso, comecei a estudar Node.js 
                                    para entender o funcionamento do backend e,
                                    ao mesmo tempo, criar projetos que integram o front-end e o backend.
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-green-400">1 ano</span> </h3>
                            </div>
                        </div>
                            <label className="border-4 border-green-400 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  >
                    <label className="flex w-full h-5  absolute top-0 bg-blue-400 items-center justify-center text-base text-black">REACT</label>
                    <LiaReact className=" w-full items-center text-8xl "/>
                </DialogTrigger>
                    <DialogContent>
                        <div className="flex flex-col relative">
                            <img className="w-20 h-18" src={imgReactJs} alt="" />
                            <h2 className="text-2xl w-20 flex items-center justify-center">React JS</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    React foi a biblioteca com a qual mais me identifiquei, 
                                    tanto pela forma de organizar pastas quanto pela maneira de gerenciar 
                                    rotas e pelas bibliotecas que você pode adicionar aos seus projetos para facilitar. 
                                    atualmente é a biblioteca que mais gosto.                                
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-blue-400">1 ano</span> </h3>
                            </div>
                        </div>
                            <label className="border-4 border-blue-400 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  >
                    <label className="flex w-full h-5  absolute top-0 bg-white items-center justify-center text-base text-black">NEXT</label>
                    <SiNextdotjs className=" w-full items-center text-7xl "/>
                </DialogTrigger>
                    <DialogContent>
                    <div className="flex flex-col relative">
                            <img className="w-28 h-18" src={imgNextJs} alt="" />
                            <h2 className="text-2xl w-28 flex items-center justify-center">Next JS</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    Estou me familiarizando com o Next.js, um framework que segue a mesma estrutura do React, 
                                    e não estou tendo dificuldades. Provavelmente, utilizarei esse framework em meus projetos futuros, 
                                    pois a forma como ele lida com o deploy é muito simples e eficaz para divulgar meus projetos.                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-white">6 meses</span> </h3>
                            </div>
                    </div>
                            <label className="border-4 border-white w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger className="w-40 h-40 bg-slate-100/5 active:bg-slate-800 shadow-lg shadow-slace-500/40 relative"  >
                    <label className="flex w-full h-5  absolute top-0 bg-blue-900 items-center justify-center text-base ">SQLite3</label>
                    <SiSqlite className=" w-full items-center text-7xl "/>
                </DialogTrigger>
                    <DialogContent>
                    <div className="flex flex-col relative">
                            <img className="w-28 h-18" src={imgSqlite} alt="" />
                            <h2 className="text-2xl w-28 flex items-center justify-center">SQLite3</h2>
                            <div className="p-8 w-full ">
                                <span>
                                    Quando desenvolvo aplicações que envolvem o front-end e o back-end, 
                                    aprecio bastante o uso do SQLite3 devido à simplicidade na conexão com o banco de dados. Atualmente, 
                                    tenho preferência por utilizar tanto o MySQL quanto o SQLite3.
                                </span>
                                <h3 className="flex items-end justify-end text-xl ">Periodo:<span className="text-blue-900">1 ano</span> </h3>
                            </div>
                    </div>
                            <label className="border-4 border-blue-900 w-full h-0 absolute bottom-0 left-0"></label>
                    </DialogContent>
            </Dialog>
            </div>
        </div>
    </div>
  )
}

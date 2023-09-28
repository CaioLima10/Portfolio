import { useState } from "react";
import spaceableOne from "../assets/nave-zinc-branco.png"
import spaceableDuo from "../assets/nave-cinza.png"
import spaceableThree from "../assets/nave-amarela-e-azul (1).png"
import spaceableFour from "../assets/nave-laranja-com-branca (1).png"
import spaceableFive from "../assets/nave-escura-dourada (1).png"
import spaceableSix from "../assets/nave-escura-asa (1).png"


import { Button } from "./ui/button";
import { XSquare } from "lucide-react";

export default function Spaceable() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [ selectSpaceable , setSelectSpaceable  ] = useState("")

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      function handleSelectedImg(spaceable: string){
            setSelectSpaceable(spaceable)    
            setIsModalOpen(false);
      }

  return (
    <div className="w-full flex flex-col items-center ">
            <Button
                onClick={openModal}
                className={`px-4 py-2 w-full rounded-md relative bg-secondary text-white overflow-hidden group`}
                variant="outline"
                >
                <span className="relative z-10">
                    Escolha sua Espaçonave
                </span>
                <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
            </Button>

            { !selectSpaceable ? (
                <img className="w-56" src={spaceableOne} alt="" />
            ):(
                <img src={selectSpaceable} alt="" />
            )}
        {isModalOpen && (
        <div onClick={closeModal} className="fixed bg-[#09090bcc] inset-0 flex items-center justify-center z-40 ">
            <div 
                className={`modal w-1/1  h-3/2 bg-zinc-100  border-2 border-zinc-900  shadow-lg relative z-50`}
                onClick={(e) => e.stopPropagation()}>
                      <div className="w-full h-14 bg-zinc-200 ">
                <button className=" text-background   hover:text-red-500 ease-in duration-200 ">
                    <XSquare className="absolute right-4 top-4 text-3xl" onClick={closeModal}/>
                </button>
                    <h2 className="flex items-center justify-center text-3xl text-background font-semibold  mb-2">
                        Escolha Nave pra explorar planeta Portfolio
                    </h2>
                </div>
                <div className="grid grid-cols-4 p-4 gap-10 ">
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Garga</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                            onClick={() => handleSelectedImg("spaceable")}
                            className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                            src={spaceableOne}
                            alt="spaceable"
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Resistencia</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                                onClick={() => handleSelectedImg("spaceableDuo")}
                                className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                                src={spaceableDuo}
                                alt="spaceableDuo"
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Resistencia</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                                onClick={() => handleSelectedImg("spaceableThree")}
                                className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                                src={spaceableThree}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Resistencia</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                                onClick={() => handleSelectedImg("spaceableFour")}
                                className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                                src={spaceableFour}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Resistencia</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                                onClick={() => handleSelectedImg("spaceableFive")}
                                className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                                src={spaceableFive}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30 ">
                        <span className="text-black">Espaciona de Resistencia</span>
                        <div className="w-36 h-36  border-4 border-blue-500 rounded-full relative bg-black">
                            <img
                                onClick={() => handleSelectedImg("spaceableSix")}
                                className="w-36 h-36 absolute inset-0 object-cover transform translate-x-2 translate-y-2"
                                src={spaceableSix}
                                alt=""
                            />
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        )}
        { selectSpaceable && (
        <div>
<img
    className="w-56"
  src={
    selectSpaceable === "spaceable"
      ? spaceableOne
      : selectSpaceable === "spaceableDuo"
      ? spaceableDuo
      : selectSpaceable === "spaceableThree"
      ? spaceableThree
      : selectSpaceable === "spaceableFour"
      ? spaceableFour
      : selectSpaceable === "spaceableFive"
      ? spaceableFive
      : selectSpaceable === "spaceableSix"
      ? spaceableSix
      : ""
    }
    alt={selectSpaceable}
    />
        </div>
        )}

    </div>
  )
}

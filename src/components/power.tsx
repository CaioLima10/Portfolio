import { useState } from "react";
import { Button } from "./ui/button";
import Doctor from "../assets/doctor.png";
import MasterBuilder from "../assets/master builder.png";
import Pilot from "../assets/Pilot.png";
import Developer from "../assets/Developer.png"
import { Progress } from "./ui/progress";
import { XSquare } from "lucide-react";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function Power() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPower, setSelectedPower] = useState<string | null>(null);

  const professionProgress = {
    Doctor: {
      attributes: ["agilidade", "destreza", "cura", "inteligencia"],
      progress: [80, 90, 90, 100],
    },
    MasterBuilder: {
      attributes: ["forca", "resistencia", "habilidade", "criatividade"],
      progress: [100, 90, 90, 70],
    },
    Pilot: {
      attributes: ["pilotagem", "navegacao", "resposta rapida", "coordenacao"],
      progress: [100, 80, 70, 70],
    },
    Developer: {
        attributes: ["café", "destreza", "sono", "inteligência"],
        progress: [100, 80, 20, 90],
      },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePowerSelection = (power: string) => {
    setSelectedPower(power);
    closeModal();
  };

  return (
    <div className="w-full mb-16 flex flex-col items-center  ">
      <Button
        onClick={openModal}
        className={`px-4 py-2 w-full mb-10 rounded-md relative bg-secondary text-white overflow-hidden group`}
        variant="outline"
      >
        <span className="relative z-10">
          Escola sua Profissão do sonho
        </span>
        <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
      </Button>

     { !selectedPower && (
      <div>
          <span className="w-full flex items-center justify-center">Meu sonho é ser Programador</span>
          <div className="w-full flex items-center justify-center">
                <img className="w-56" src={Developer} alt="Escudo Astronauta" />
          </div>
          <div>
            <Label>café</Label>
            <Progress className="w-80" value={100} />
            <Label>destreza</Label>
            <Progress value={80} />
            <Label>sono</Label>
            <Progress value={20} />
            <Label>inteligência</Label>
            <Progress value={90} />
          </div>
      </div>
     )} 

      {isModalOpen && (
        <div onClick={closeModal} className="fixed bg-[#09090bcc] inset-0 flex items-center justify-center z-40">
          <div 
            className={`modal min-w-96  bg-zinc-100 rounded-xl border-2  shadow-lg relative z-50`}
            onClick={(e) => e.stopPropagation()}>
                <div className="w-full h-full bg-zinc-200 rounded-md ">
                <button className=" text-background hover:text-zinc-600 ease-in duration-200 ">
                    <XSquare className="absolute right-4 top-4 text-3xl" onClick={closeModal}/>
                </button>
                    <h2 className="text-background flex items-center justify-center text-3xl font-semibold  mb-2">Profissão do seu Sonho</h2>
                </div>

                <Separator className="mb-4"/>
                
            <div className="flex flex-col h-96 p-5 relative">
              <div className="grid grid-cols-4 gap-4 ">
              <div className="w-44 h-44  border-4 border-blue-500  rounded-full relative bg-black">
                  <div className="flex flex-col items-center">
                    <span>Medico</span>
                    <span
                      onClick={() => handlePowerSelection("Doctor")}
                      className={`cursor-pointer ${
                        selectedPower === "Doctor" 
                      }`}
                      >
              
                      <img className="w-44 h-44" src={Doctor} alt="Medico" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                <div className="w-44 h-44  border-4 border-blue-500 rounded-full relative bg-black">
                  <div className="w-full flex items-center justify-center">
                    <span >Pedreiro</span>
                  </div>
                  <span
                    onClick={() => handlePowerSelection("MasterBuilder")}
                    className={`cursor-pointer ${
                      selectedPower === "MasterBuilder"
                    }`}
                    >
                    <img className="absolute top-4 w-44 h-44" src={MasterBuilder} alt="Mestre-de-Obra" />
                  </span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                <div className="w-44 h-44  border-4 border-blue-500 rounded-full relative bg-black">
                <div className="flex flex-col items-center">
                  <span>Piloto</span>
                </div>  
                  <span
                    onClick={() => handlePowerSelection("Pilot")}
                    className={` cursor-pointer ${
                      selectedPower === "Pilot"
                    }`}
                  >
                    <img className="w-44 h-44" src={Pilot} alt="Piloto" />
                  </span>
                 </div> 
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-44 h-44  border-4 border-blue-500 rounded-full relative bg-black">
                    <div className="flex flex-col items-center">
                      <span>Programador</span>
                    </div>  
                    <span
                      onClick={() => handlePowerSelection("Developer")}
                      className={` cursor-pointer ${
                        selectedPower === "Developer"
                      }`}
                    >
                      <img className="w-48 h-44" src={Developer} alt="Programador" />
                    </span>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    {selectedPower && (
        <div className="w-80 mb-2 flex flex-col items-center justify-center">
          <span>Profissão: {selectedPower}</span>
          <img
                className="w-48 flex items-center justify-center"
                src={selectedPower === "Doctor" ? Doctor :  
                selectedPower === "MasterBuilder" ? MasterBuilder : 
                selectedPower === "Pilot" ? Pilot : 
                selectedPower === "Developer" ? Developer : ""}
                alt={selectedPower}
                />
          {selectedPower && (
            <>
              <h3>Atributos:</h3>
              <div>
                {professionProgress[selectedPower].attributes.map((attribute, index) => (
                  <Label key={index}>
                    {attribute}: <Progress className="w-80 flex items-center justify-center" value={professionProgress[selectedPower].progress[index]} />
                  </Label>
                ))}
              </div>
            </> 
          )}
        </div>
      )}
    </div>
  );
}

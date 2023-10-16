import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Doctor from "../assets/doctor.png";
import Attorney from "../assets/master builder.png";
import Pilot from "../assets/Pilot.png";
import Developer from "../assets/Developer.png";
import Teacher from "../assets/prof-reporter.png";
import Fireman from "../assets/prof-bombeiro.png";
import { Progress } from "./ui/progress";
import { XSquare } from "lucide-react";
import { Label } from "./ui/label";
import { useTranslation } from "react-i18next";
import Aos from "aos";

export default function Profession() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPower, setSelectedPower] = useState<string | null>(null);

  const { t } = useTranslation();

  const professionProgress: Record<string, { progress: number[], attributes: string[] }> = {
    Doctor: {
      progress: [80, 90, 90, 100, 100],
      attributes: ["agi", "dex", "caf", "int", "res"],
    },
    Attorney: {
      progress: [100, 90, 90, 70, 100],
      attributes: ["agi", "dex", "caf", "int", "res"],
    },
    Pilot: {
      progress: [100, 80, 70, 70, 100],
      attributes: ["agi", "dex", "caf", "int", "res"],
    },
    Developer: {
      progress: [20, 80, 100, 90, 100],
      attributes: ["dor", "dex", "caf", "int", "res"],
    },
    Teacher: {
      progress: [100, 80, 40, 90, 100],
      attributes: ["agi", "dex", "caf", "int", "res"],
    },
    Fireman: {
      progress: [100, 80, 60, 80, 100],
      attributes: ["agi", "dex", "caf", "int", "res"],
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

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <div  className="w-full mb-16 flex flex-col items-center">
      <div className="w-80 mb-2" data-aos="fade-up">
        <Button
          onClick={openModal}
          className={`px-4 py-2 w-full mb-10 rounded-md relative bg-secondary text-white overflow-hidden group`}
          variant="outline"
        >
          <span className="relative z-10">{t("dream-profession")}</span>
          <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
        </Button>

      {!selectedPower && (
        <div>
          <span className="w-full flex items-center justify-center mb-6">{t("dream")}</span>
          <div className="w-full flex items-center justify-center">
            <img className="w-56" src={Developer} alt="Escudo Astronauta" />
          </div>
          <div>
            <Label>{t("sleep")}</Label>
            <Progress value={20} />
            <Label>{t("dexterity")}</Label>
            <Progress value={80} />
            <Label>{t("coffee")}</Label>
            <Progress className="w-80" value={100} />
            <Label>{t("intelligence")}</Label>
            <Progress value={90} />
            <Label>{t("dreamy")}</Label>
            <Progress value={100} />
          </div>
        </div>
      )}
      </div>

      {isModalOpen && (
        <div onClick={closeModal} className="fixed bg-[#09090bcc] inset-0 flex items-center justify-center z-50">
          <div
            className={`xl:w-1/1 mb-2 min-h-4/5 bg-zinc-100 border-2 border-zinc-900  shadow-lg relative z-50`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-60 md:w-full h-14">
              <button className="text-background hover:text-red-500 ease-in duration-200">
                <XSquare className="absolute right-4 top-4 text-3xl" onClick={closeModal} />
              </button>
              <h2 className={`flex items-center justify-center mx-auto md:text-3xl text-xl md:w-11/12 w-80 mt-3 text-background font-semibold  mb-2`}>
                {t("choose-dream")}
              </h2>
            </div>
            <div className="flex flex-col min-h-96 p-1 md:p-6 relative">
              <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                {Object.keys(professionProgress).map((power) => (
                  <div key={power} className="bg-zinc-300 p-2 shadow-lg shadow-zinc-500/30">
                    <span className="flex items-center justify-center text-black">{t(power)}</span>
                    <div className="w-36 h-36 border-4 border-blue-500 rounded-full relative bg-black">
                      <div className="flex flex-col items-center">
                        <span
                          onClick={() => handlePowerSelection(power)}
                          className={`cursor-pointer ${selectedPower === power ? "selected" : ""}`}
                        >
                          <img className="w-36 h-36" src={power === "Doctor" ? Doctor :
                            power === "Attorney" ? Attorney :
                              power === "Pilot" ? Pilot :
                                power === "Developer" ? Developer :
                                  power === "Teacher" ? Teacher :
                                    power === "Fireman" ? Fireman :
                                      ""}
                            alt={power}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPower && (
        <div className="w-80  flex flex-col items-center justify-center">
          <span>{t("Profissão")}: {t(selectedPower)}</span>
          <img
            className="w-48 flex items-center justify-center"
            src={selectedPower === "Doctor" ? Doctor :
              selectedPower === "Attorney" ? Attorney :
                selectedPower === "Pilot" ? Pilot :
                selectedPower === "Developer" ? Developer :
                selectedPower === "Teacher" ? Teacher :
                selectedPower === "Fireman" ? Fireman :
                ""}
            alt={t(selectedPower)}
          />

          {professionProgress[selectedPower] && (
            <div className="mb-12">
              {professionProgress[selectedPower].attributes.map((attribute, index) => (
                <div key={index} className="w-full flex flex-col">
                  <Label className="mt-3" >{t(attribute)}</Label>
                  <Progress className="w-80" value={professionProgress[selectedPower].progress[index]} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

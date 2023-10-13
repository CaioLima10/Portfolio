import "./About.css";
import Aos from "./hooks/aosConfig";
import { Separator } from "./components/ui/separator";
import MyCity from "./assets/city.png";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import CityImageLink from "./components/cityImgLink";
import Power from "./components/power";
import Spaceable from "./components/spaceable";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RxDoubleArrowDown } from "react-icons/rx";
import Character from "./components/astronauta";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        className="w-full flex items-center justify-center relative"
      >
        <RxDoubleArrowDown size={32} className="absolute top-44 md:top-44 lg:top-56 z-10" />
      </div>

      <div className="flex md:flex-col items-center justify-center relative mt-56 md:mt-56 lg:mt-64 bg-gradient-to-r from-black via-gray-900 to-black md:max-xl:flex:flex-col" id="about">
        <div id="flex-row-responsive" className="flex custom:flex-col w-full max-w-screen-xl">
          <h1 className="md:left-0 md:absolute bottom-[23.2rem] flex items-center justify-center text-5xl text-center w-full h-full p-4">
            {t("exploration-about-me")}
          </h1>

          <div className="flex flex-col items-center justify-center">
            <div className="flex w-80 mb-8 max-w-screen-xl">
              <div className="flex flex-col items-center">
                <small className="mb-2 flex items-end justify-end w-full">{t("country-state")}</small>
                <Separator className="w-full mb-4 flex items-end justify-end" />
                <div data-aos="fade-up" className="flex flex-col items-center">
                  <Dialog>
                    <DialogTrigger className="w-80 flex items-center justify-center active:bg-slate-900 rounded-none shadow-lg shadow-slace-500/40 relative">
                      <Button className={`px-4 py-2 w-full rounded-md bg-secondary relative text-white overflow-hidden group`} variant="outline">
                        <span className="relative z-10">
                          {t("btn-explore-city")}
                        </span>
                        <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
                      </Button>
                    </DialogTrigger>
                    <img className="w-44 mt-6 mb-2 flex items-center justify-center" src={MyCity} alt="Minha-Cidade" />
                    <DialogContent className="flex">
                      <div>
                        <CityImageLink />
                        <div className="border border-zinc-800 p-4">
                          <small className="w-36">
                            {t("about-where-I-live")}
                          </small>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex flex-col items-end justify-end w-full">
                    <small>{t("info-city")}</small>
                    <Progress value={21} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="flex w-full flex-col items-center">
                <small className="mb-2 flex items-end justify-end w-full ">{t("information-ships")}</small>
                <Separator className="w-full mb-4 flex items-end justify-end" />
                <Spaceable />
              </div>
            </div>
          </div>

          <Character />

          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <small >{t("dream-career")}</small>
              <Separator className="w-full mb-2" />
              <Power />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

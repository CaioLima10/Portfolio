import { Separator } from "./components/ui/separator";
import AstronautFocused from "./assets/astronauta-focado (1).png";
import AstronautFocus from "./assets/astronaut-olhando-10 (1).png";

import {  useEffect, useState } from "react";
import { TiArrowRepeat } from "react-icons/ti";
import { MdRocketLaunch } from "react-icons/md";
import Aos from "./hooks/aosConfig"
import { useTranslation } from "react-i18next";

import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import { TbBrandHtml5, TbBrandJavascript, TbBrandNodejs, TbBrandTypescript } from "react-icons/tb";
import { SiCss3, SiNextdotjs, SiSqlite } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import imgJavascript from "./assets/javascript.png";
import imgHtml from "./assets/HTML5.png";
import imgCSS from "./assets/css3.png";
import imgTypescript from "./assets/Typescript.png";
import imgNodejs from "./assets/nodejs.png";
import imgReactJs from "./assets/ReactJs.png";
import imgNextJs from "./assets/nextjs.png";
import imgSqlite from "./assets/SQLite3.png";
  

export default function AttributesSkills() {
  const [astronautOver, setAstronautOver] = useState(true);

  const isMobile = window.innerWidth < 768; 

  const { t } = useTranslation()
  
  useEffect(() => {
    Aos.refresh();
  }, []);

  function toggleAstronautImage() {
    setAstronautOver(!astronautOver);
  }

  return (
    <>
      <div className='flex items-center mb-28 mt-28'>
        <div
          data-aos="fade-right" 
          className="flex items-center justify-center w-full "
        >
          <div className='w-full border-t border-secondary'
          >
          </div>
          <MdRocketLaunch
            size={32}
            style={{ rotate: "45deg" }}
            className="ml-2 mr-10"
          />
        </div>
        {/*<SiSaturn title="saturno" className=" text-7xl z-50" />*/}
      </div>

      <div className="w-full bg-slate-400/5 flex flex-col items-center justify-center" id="skills">
        <div className="w-full bg-slate-400/5">
          <h1 className="text-5xl text-center mt-3">{t("title-skills")}</h1>
          <span className="flex items-end justify-end">{t("info-img-click")}</span>
          <Separator className="flex items-center justify-center" />
        </div>

        <div className={`w-full ${isMobile ? 'flex-col' : 'md:flex'} bg-primary/5 p-4`}>
          <div className="w-full md:w-1/2 p-2 bg-black flex items-center justify-center">
            <TiArrowRepeat className="text-3xl" />

            {astronautOver ? (
              <img onClick={toggleAstronautImage} className="w-96 z-20" src={AstronautFocused} alt="" />
            ) : (
              <img onClick={toggleAstronautImage} className="w-96 z-20" src={AstronautFocus} alt="" />
            )}
          </div>
          <div id="skills-responsive" className="w-full grid grid-cols-4 justify-center">
            {/* Your content goes here */}
            <Dialog>
              <DialogTrigger
                data-aos="fade-up" data-aos-duration="500"
                className=" w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative"
              >
                <label className="flex w-full h-5  top-0 bg-amber-400 items-center justify-center text-base text-black">
                  JAVASCRIPT
                </label>
                <TbBrandJavascript className="w-full items-center text-8xl " />
              </DialogTrigger>
              <DialogContent className="flex flex-col ">
                <div className="flex flex-col relative">
                  <img className="w-20 h-20" src={imgJavascript} alt="" />
                  <h2 className="text-2xl">Javascript</h2>
                  <div className="p-8 w-full">
                    <span>{t("javascript")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-yellow-300">2 {t("years")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-yellow-300 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                  data-aos="fade-up" data-aos-duration="700" 
                  className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-orange-400 items-center justify-center text-base text-black">
                  HTML 5
                </label>
                <TbBrandHtml5 className="w-full items-center text-8xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-20 h-20" src={imgHtml} alt="" />
                  <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
                  <div className="p-8 w-full">
                    <span>{t("html")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-orange-400">2 {t("years")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-orange-400 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                data-aos="fade-up" data-aos-duration="900" 
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-blue-500 items-center justify-center text-base text-black">
                  CSS 3
                </label>
                <SiCss3 className="w-full items-center text-7xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-20 h-20" src={imgCSS} alt="" />
                  <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
                  <div className="p-8 w-full">
                    <span>{t("css")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-500">2 {t("years")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-blue-500 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                data-aos="fade-up" data-aos-duration="1100" 
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-blue-600 items-center justify-center text-base text-black">
                  TYPESCRIPT
                </label>
                <TbBrandTypescript className="w-full items-center text-8xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-20 h-20" src={imgTypescript} alt="" />
                  <h2 className="text-2xl w-20 flex items-center justify-center">Typescript</h2>
                  <div className="p-8 w-full">
                    <span>{t("typescript")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-600">10 {t("month")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-blue-600 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger
                data-aos="fade-up" data-aos-duration="1300" 
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-green-400 items-center justify-center text-base text-black">
                  NODE
                </label>
                <TbBrandNodejs className="w-full items-center text-8xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-28 h-18" src={imgNodejs} alt="" />
                  <h2 className="text-2xl w-28 flex items-center justify-center">Node JS</h2>
                  <div className="p-8 w-full">
                    <span>{t("node")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-green-400">1 {t("year")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-green-400 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger 
                data-aos="fade-up" data-aos-duration="1500"
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-blue-400 items-center justify-center text-base text-black">
                  REACT
                </label>
                <LiaReact className="w-full items-center text-8xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-20 h-18" src={imgReactJs} alt="" />
                  <h2 className="text-2xl w-20 flex items-center justify-center">React JS</h2>
                  <div className="p-8 w-full">
                    <span>{t("react")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-400">1 {t("year")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-blue-400 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger 
                data-aos="fade-up" data-aos-duration="1700"
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-white items-center justify-center text-base text-black">
                  NEXT
                </label>
                <SiNextdotjs className="w-full items-center text-7xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-28 h-18" src={imgNextJs} alt="" />
                  <h2 className="text-2xl w-28 flex items-center justify-center">Next JS</h2>
                  <div className="p-8 w-full">
                    <span>{t("next")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-white">6 {t("months")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-white w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger 
                data-aos="fade-up" data-aos-duration="1900"
                className="w-40 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
                <label className="flex w-full h-5 top-0 bg-blue-900 items-center justify-center text-base ">SQLite3</label>
                <SiSqlite className="w-full items-center text-7xl " />
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col relative">
                  <img className="w-28 h-18" src={imgSqlite} alt="" />
                  <h2 className="text-2xl w-28 flex items-center justify-center">SQLite3</h2>
                  <div className="p-8 w-full">
                    <span>{t("sqlite")}</span>
                    <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-900">1 {t("year")}</span> </h3>
                  </div>
                </div>
                <label className="border-4 border-blue-900 w-full h-0 bottom-0 left-0"></label>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        </div>
</>
  );
}

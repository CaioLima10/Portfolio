  import { useEffect, useState } from "react";
  import { TiArrowRepeat } from "react-icons/ti";
  import { MdRocketLaunch } from "react-icons/md";
  import Aos from "./hooks/aosConfig";
  import { useTranslation } from "react-i18next";
  import CardJavascript from "./components/CardSkills/cardJavascript";
  import CardHtml from "./components/CardSkills/cardHtml";
  import CardCss from "./components/CardSkills/cardCss";
  import CardTypescript from "./components/CardSkills/cardTypescript";
  import CardNode from "./components/CardSkills/cardNode";
  import CardReact from "./components/CardSkills/cardReact";
  import CardNext from "./components/CardSkills/cardNext";
  import CardSqlite from "./components/CardSkills/cardSqlite";
  import { Separator } from "./components/ui/separator";
  import AstronautFocused from "./assets/astronauta-focado (1).png";
  import AstronautFocus from "./assets/astronaut-olhando-10 (1).png";

export default function AttributesSkills() {
  const [astronautOver, setAstronautOver] = useState(true);

  const isMobile = window.innerWidth < 1128;

  const { t } = useTranslation();

  useEffect(() => {
    Aos.refresh();
  }, []);

  function toggleAstronautImage() {
    setAstronautOver(!astronautOver);
  }

  return (
    <>
      <div className="flex items-center mb-28 mt-28">
        <div
          data-aos="fade-right"
          className="flex items-center justify-center w-full"
        >
          <div className="w-full border-t border-secondary"></div>
          <MdRocketLaunch
            size={32}
            style={{ rotate: "45deg" }}
            className="ml-2 mr-10"
          />
        </div>
      </div>

      <div className="w-full bg-slate-400/5 flex flex-col items-center justify-center" id="skills">
        <div className="w-full bg-slate-400/5">
          <h1 className="text-5xl text-center mt-3">{t("title-skills")}</h1>
          <span className="flex items-end justify-end">{t("info-img-click")}</span>
          <Separator className="flex items-center justify-center" />
        </div>

        <div className={`w-full ${isMobile ? 'flex-col' : 'md:flex'} bg-primary/5 p-4`}>
          <div className="w-full md:w-1/2 p-2 bg-black flex items-center justify-center relative">
            <TiArrowRepeat className="text-3xl absolute left-6" />

            {astronautOver ? (
              <img onClick={toggleAstronautImage} className="w-full md:w-full max-w-xl z-20" src={AstronautFocused} alt="" />
            ) : (
              <img onClick={toggleAstronautImage} className="w-full md:w-full max-w-xl z-20" src={AstronautFocus} alt="" />
            )}
          </div>
          <div id="skills-responsive" className={`w-full ${isMobile ? 'grid grid-cols-2' : 'grid grid-cols-2'} gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 items-center justify-center`}>
            <CardJavascript />
            <CardHtml />
            <CardCss />
            <CardTypescript />
            <CardNode />
            <CardReact />
            <CardNext />
            <CardSqlite />
          </div>
        </div>
      </div>
    </>
  );
}

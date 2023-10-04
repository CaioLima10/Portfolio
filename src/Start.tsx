import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles/style.css";
import Aos from "./hooks/aosConfig";
import { RxDoubleArrowDown } from "react-icons/rx";


export default function Start() {


  useEffect(() => {
    Aos.refresh();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div
        data-aos="fade-up"
        id="start-mobile"
        style={{ height: "32rem" }}
        className={`flex flex-col items-center w-full relative`}
      >

        <div className="flex flex-col mt-20 md:mt-20 text-center h-5/6 w-3/4 z-50">
          
          <h4 className="text-xl text-shadow-xl">{t("presentation")}</h4>
          <h1 
            className={` text-7xl text-center text-shadow-2xl `}>
              Caio Lima
            </h1>
          <h3 className="text-2xl text-center text-shadow-2xl">{t("about")}</h3>
        </div>
        <div data-aos="fade-down"  data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-16  md:mt-44 mb-28'>
          <RxDoubleArrowDown 
            size={32}/>
      </div>
      </div>
    </>
  );
}

import "./styles/style.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/style.css";
import Aos from "./hooks/aosConfig";
import Sun from "./assets/Sun-1.png";
import blackEarth from "./assets/terra_3 (1).png";
import blackMoon from "./assets/moonBalck.png";
import SunR from "./assets/sun-3d.png";
import Earth from "./assets/terra-3d.png";
import Mars from "./assets/marte.png";
import Moon from "./assets/moon.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./components/ui/dropdown-menu";

export default function Start() {
  const [diminuir, setDiminuir] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1020) {
        setDiminuir(true);
      } else {
        setDiminuir(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <span>+ informações clicar nos planetas.</span>
      <div
        data-aos="fade-up"
        id="start-mobile"
        style={{ height: "32rem" }}
        className={`flex flex-col items-center w-full relative`}
      >
        <div className="flex flex-col mt-20 md:mt-20 text-center h-5/6 w-3/4 z-50 relative">
          <h4 className="text-xl text-shadow-xl z-50">{t("presentation")}</h4>
          <h1 className={` text-7xl text-center text-shadow-2xl `}>
            Caio Lima
          </h1>
          <h3 className="text-2xl text-center text-shadow-2xl z-50">
            {t("about")}
          </h3>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div
            className={`marte 
              lg:w-[40rem] lg:h-[40rem] 
              md:w-[30rem] md:h-[30rem] 
              sm:w-[24rem] sm:h-[24rem]

              ${
                diminuir && window.innerWidth <= 660
                  ? "w-[1rem] h-[1rem]"
                  : ""
              }
              absolute top-[32rem] sm:top-[22rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2
              rounded-full border border-dashed border-zinc-400`}
          >
            <div
              className="marte absolute bottom-30 w-1 h-1 md:w-[6.5rem] md:h-[6.5rem] sm:w-[5.5rem] sm:h-[5.5rem] left-1/2 transform -translate-x-1/2 rounded-full border border-dashed border-zinc-400"
            >
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <DropdownMenuContent className=" flex items-center justify-center w-100 ">
                    <img className=" z-50" src={Mars} alt="" />
                    <ul>
                      <li className="text-sm">
                        O planeta Marte é o quarto<br /> mais próximo do Sol
                      </li>
 
                      <li className="text-sm">
                        marte tem duas luas <br />chamados Fobos e Deimos
                      </li>
                    </ul>
                  </DropdownMenuContent>
                  <img
                    className={`
                  w-6 z-40 absolute 
                  bottom-4 
                  left-1/2 
                  sm:w-[2rem] 
                  sm:h-[2rem] 
                  md:w-[3rem] 
                  md:h-[3rem]
                  sm:bottom-6
                  transform -translate-x-1/2`}
                    src={Sun}
                    alt=""
                  />
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className={` 
                -bottom-12 
                w-24
                h-24
                md:w-36 
                sm:w-36 
                lg:w-56 
                lg:h-56 
                md:h-36 
                sm:h-36 
                lg:top-60 
                md:top-72 
                sm:top-72 
                z-40 absolute
                left-1/2 transform -translate-x-1/2`}
                src={Sun}
                alt=""
              />
              <DropdownMenuContent className=" flex items-center justify-center">
                <img className="w-20 z-50"  src={SunR} alt="Sol" />
                <ul>
                  <li className="text-sm">
                    O Sol é a estrela do <br /> sistema solar tem um <br /> diâmetro de 1,392 mi de km
                  </li>
                   
                </ul>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <div
            className="circle absolute 
              -bottom-56 
              w-56 
              h-56 
              lg:w-96 
              lg:h-96 
              md:w-72
              md:h-72
              sm:w-64 
              sm:h-64 
              sm:top-[22rem]
              left-1/2 transform -translate-x-1/2 rounded-full border border-dashed border-zinc-400"
          >
            <div
              className="circle absolute 
                bottom-30 
                w-20 
                h-20 
                lg:w-28 
                lg:h-28 
                left-1/2 transform -translate-x-1/2 rounded-full border border-dashed border-zinc-400"
            >
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <DropdownMenuContent className=" flex items-center justify-center w-100 ">
                    <img className="w-20  z-50" src={Earth} alt="" />
                    <ul>
                      <li className="text-sm">
                        Planeta Terra é conhecido <br /> como Planeta Azul
                      </li>
                      <li className="text-sm">
                        por ter 70% da sua <br /> superfície coberta de água.
                      </li>
                    </ul>
                  </DropdownMenuContent>
                  <img
                    className="
                  w-10
                  lg:w-16 
                  z-40 absolute 
                  bottom-5
                  sm:bottom-5
                  md:bottom-5
                  lg:bottom-6
                  left-1/2 transform -translate-x-1/2"
                    src={blackEarth}
                    alt="Terra"
                  />
                </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <DropdownMenuContent className=" flex items-center justify-center sm:w-100 ">
                    <ul>
                      <li className="text-sm">
                        A Lua é o único satélite <br /> natural da Terra.
                      </li>
                      <li className="text-sm">Está a 384.400 km do planeta.</li>
                    </ul>
                    <img className="w-16  z-50" src={Moon} alt="" />
                  </DropdownMenuContent>
                  <img
                    className="
                  w-4 
                  lg:w-8 
                  bottom-[4.5rem]
                  lg:bottom-24
                  sm:bottom-[4.5rem]
                  z-40 absolute  left-1/2 transform -translate-x-1/2"
                    src={blackMoon}
                    alt=""
                  />
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

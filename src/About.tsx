  import { Separator } from "./components/ui/separator"
  import Astronauta from "./components/astronauta"
  import MyCity from "./assets/city.png"
  import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog"
  import CityImageLink from "./components/cityImgLink"
  import Power from "./components/power"
import Spaceable from "./components/spaceable"
import { Button } from "./components/ui/button"
import { Progress } from "./components/ui/progress"


  export default function About() {

    return (
        <div className="flex items-center justify-center  relative mb-20  bg-gradient-to-r from-black via-gray-900 to-black" id="about">
          <div className="flex w-full max-w-screen-xl">
          <div className="flex flex-col  items-center justify-center">
            <div className="flex w-full items-center">
              <div className="flex w-full flex-col items-center">
                  <small className="mb-2 flex items-end justify-end w-full ">INFORMAÇÃO - NAVES</small>
                  <Separator className="w-full mb-4 flex items-end justify-end" />
                  <Spaceable/>

              </div>
            </div>

            <div className="flex w-80 mb-8 max-w-screen-xl">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <small className="mb-2 flex items-end justify-end w-full">BRASIL - SÃO-PAULO</small>
                <Dialog>
                  <DialogTrigger className=" w-80 flex items-center justify-center active:bg-slate-900 rounded-none shadow-lg shadow-slace-500/40 relative">
                  <Button
                    className={`px-4 py-2 w-full rounded-md bg-secondary relative text-white overflow-hidden group`}
                    variant="outline"
                  >
                    <span className="relative z-10">
                      Explore minha cidade
                    </span>
                    <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
                  </Button>
                  </DialogTrigger>
                      <img className="w-44 mt-2 mb-2 flex items-center justify-center  "src={MyCity} alt="Minha-Cidade" />
                  <DialogContent>
                    <CityImageLink/>
                      <small>
                        Natural de Suzano, eu nasci em uma família de guerreiros, com meus pais e cinco irmãos. Hoje,
                        após muita perseverança e conquistas, 
                        nós estamos orgulhosamente residindo na mesma cidade de Ferraz de Vasconcelos há mais de 22 anos.
                      </small> 
                  </DialogContent>
                </Dialog>
                <div className="flex flex-col items-end justify-end w-full">
                  <small>moro no estado de São Paulo - população IBGE 21.9%</small>
                  <Progress value={21}/>
                </div>
              </div>
            </div>
          </div>
          </div>

              <Astronauta />

            <div className="flex items-center justify-center">
              <div className="flex flex-col  gap-2">
                <small >HABILIDADES - PESSOAIS</small>
                <Separator className="w-full mb-2" />
                <Power/>
              </div>
            </div>
          </div>
        </div>
    )
  }

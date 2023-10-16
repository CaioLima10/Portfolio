  import "./styles/style.css"

  import { Button } from "./components/ui/button";
  import { Input } from "./components/ui/input";
  import { Label } from "./components/ui/label";
  import { Textarea } from "./components/ui/textarea";
  import { useState } from "react";
  import emailjs from "@emailjs/browser";
  import { ReloadIcon } from "@radix-ui/react-icons";
  import { useTranslation } from "react-i18next";
  import { toast } from "react-toastify";
  import { MdRocketLaunch } from "react-icons/md";
  import { Separator } from "./components/ui/separator";

  import Sentado from "./assets/Astronauta_flutuando.png"
  import Vaondo from "./assets/astronaut-voando.png"
  import Logo from "./assets/logo (1).png"
  import paisagem from "./assets/paisagemTop.jpg"
  import { GiMoonOrbit } from "react-icons/gi";


export default function Suggestion() {
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function sendForm(event: React.FormEvent) {
      event.preventDefault();
      if (!name || !message) {
          alert("Preencha todos os campos");
          return;
      }
      setIsLoading(true);

      const templateParams = {
          from_name: name,
          message: message
      };

      emailjs.send("service_gh5aptr", "template_xtxqoas", templateParams, "rKjTy6HAL7XjjU1iF")
          .then((response) => {
              toast("Mensagem enviada com sucesso", {
                  type: "info",
                  autoClose: 2000,
                  className: "toast-confirm",
                  
              });
              console.log(response.status);

              setName("");
              setMessage("");

              setTimeout(() => {
                  setIsLoading(false);
              }, 500);

          }, (err) => {
              console.log("ERROR", err);
              setIsLoading(false);
          });
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
    </div>

    <div className="flex flex-col bg-slate-400/5 w-full  items-center mb-28" id="comment">
      <h1 className="text-5xl mt-3" style={{ height: "4.5rem" }} >{t("suggestion")}</h1>
      <Separator/>
      <div 
        className={`w-full flex flex-col min-h-1/2 p-6 md:p-0  mt-4 md:mt-0 
        md:flex-row items-center justify-centerbg-slate-600/5 md:max-xl:flex:flex-col`}>
                  <div className="w-full md:w-1/2 h-96 mb-20 bg-black relative">
              <img className="absolute -bottom-20 left-0 w-20  md:w-40 z-10" src={Sentado} alt="" />
                  <img className="absolute -top-10 md:-top-14 -right-4 md:-right-14 w-36  md:w-60 z-10" src={Vaondo} alt="" />
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                      <img className="w-20 flex absolute" src={Logo} alt="" />
                      <img src={paisagem} className="w-full h-full absolute bottom-0 z-0" alt="" />
                      <div className='flex items-center  mt-[26rem] '>
                          <div
                              data-aos="fade-down"  data-aos-duration="3000" 
                              className="flex rounded-full h-96 w-44 top-36 absolute"
                              >
                                  <MdRocketLaunch
                                      size={36}
                                      style={{ rotate: "315deg" }}
                                      className="z-10"
                                  />  
                          </div>
                      </div>
                  </div>
                      <Separator className=" absolute bottom-0 h-2 z-0"/>
                      <Separator className=" absolute -bottom-4 h-6 z-0 bg-zinc-700"/>
                      <Separator className=" absolute -bottom-8 h-6 z-0  bg-zinc-800"/>
                      <Separator className=" absolute -bottom-12 h-6 z-0  bg-zinc-900"/>
                      <Separator className=" absolute -bottom-16 h-6 z-0  bg-black"/>
                      <Separator className=" absolute -bottom-20 h-6 z-0  bg-black"/>
                      
              </div>
              <form onSubmit={sendForm}
                  className="p-4 md:p-20 w-full md:w-1/2 h-auto md:h-1/2 flex justify-center flex-col bg-slate-100/5 shadow-lg"
                  >
                  <div className="mb-4">
                      <Label className="mt-2">{t("name")}:</Label>
                      <Input 
                          className="bg-slate-300/5"
                          onChange={(e) => setName(e.target.value)}
                          maxLength={40}
                          type="name"
                          value={name}
                          />
                  </div>
                  <div className="mb-4">
                      <Label className="mt-2">{t("message")}:</Label>
                      <Textarea 
                          className="w-full h-32 p-2 resize-none bg-slate-300/5" 
                          onChange={(e) => setMessage(e.target.value)}
                          maxLength={200}
                          value={message}
                      />
                  </div>
                  <Button
                      className={`px-4 py-2 w-full mb-5 rounded-md relative bg-secondary text-white overflow-hidden group`}
                      variant="outline"
                  >
                  <span className="relative z-10">
                      { isLoading ?  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : <span>{t("toSend")}</span>  }
                  </span>
                      <div 
                          className={`absolute inset-0 bg-background transform translate-y-full 
                          origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 
                          group-hover:translate-y-0`}>
                      </div>
                  </Button>
                  <span className="w-full flex items-center justify-center text-sm gap-2"><GiMoonOrbit size={20}/> Caio lima - 2023</span>
                  
              </form>
          </div>
      </div>
  </>
  );
}

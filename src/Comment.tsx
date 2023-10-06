
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser"
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { MdRocketLaunch } from "react-icons/md";
import { GiAstronautHelmet } from "react-icons/gi";
import { Separator } from "./components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "./components/ui/scroll-area";
import astronautFullPlanet from "./assets/imagem-astronauta-cheio-de-planetas.png"

export default function Form() {

    const { t } = useTranslation()

    const [ name , setName ] = useState<string>("")
    const [ message , setMessage ] = useState<string>("")
    const [ newDate , _setNewDate ] = useState("")
    const [ deleteComment , setDeleteComment ] = useState <number | null>(null)
    const [comment, setComment] = useState<string[] | number> ([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(() => {
  const savedComments = localStorage.getItem("comments");
  if (savedComments) {
    const parsedComments = JSON.parse(savedComments);
    setComment(parsedComments);

    
  }
}, []);


    function sendForm(event: React.FormEvent){
        event.preventDefault()
        if(!name  || !message){
            alert("Prencha todos os campos");
            return
        }
        setIsLoading(true);

        const date = new Date()

        const currentDateTime = date.toLocaleDateString("pt-BR",{
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        })

        const newComment = { name, message , newDate: currentDateTime };
        setTimeout(() => {
          setComment((prevComments) => [...prevComments, newComment]);
        }, 3000)
        
        localStorage.setItem("comments", JSON.stringify([...comment, newComment]));

        const templateParams = {
            from_name: name,
            message: message,
        }

        emailjs.send("service_gh5aptr" , "template_xtxqoas" , templateParams , "rKjTy6HAL7XjjU1iF")
        .then((response) => {
            toast("Mensagem enviada com sucesso", {
                type: "success",
                autoClose: 2000,
            });
            console.log(response.status)

            setName("")
            setMessage("")

            setTimeout(() => {
                setIsLoading(false);
            }, 500);

        }, (err) => {
            console.log("ERROR", err)
            setIsLoading(false)
        })
    }

    function handleDelete(index: number) {
      if(deleteComment === null){
        setTimeout(() => {
          const savedComments: string[] = JSON.parse(localStorage.getItem("comments")) || [] ;
        
          const updatedComments: string[] = [...savedComments];
        
          updatedComments.splice(index, 1);
        
          setComment(updatedComments);
        
          localStorage.setItem("comments", JSON.stringify(updatedComments));
        } , 500)

        toast("deletada com sucesso", {
          type: "success",
          autoClose: 1000,
      });
      
        setDeleteComment(null);
      }
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
            {/*<GiJupiter title="jupiter" className="text-7xl z-50" />*/}
      </div>

      <div className="flex flex-col bg-slate-400/5 w-full items-center mb-28" id="comment">
        <h1 className="text-5xl mt-3" style={{ height: "4.5rem" }} >Comment</h1>
        <Separator/>
        <div 
          className={`w-full flex flex-col min-h-1/2 p-6 md:p-24 gap-8 mt-4 md:mt-0 
          md:flex-row items-center justify-centerbg-slate-600/5 md:max-xl:flex:flex-col`}>
                    <form onSubmit={sendForm}
                       className="p-4 md:p-10 w-full md:w-1/2 h-auto md:h-96 flex justify-center flex-col bg-slate-100/5 shadow-lg"
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
                    </form>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <ScrollArea className="h-96 p-4 md:p-6 flex items-center justify-center rounded-md border bg-black relative">
                <h2 className="text-zinc-200">Comentários:</h2>
      
                <div className="w-11/12 h-72 flex flex-col items-center justify-center opacity-20 absolute z-0">
                  <div className="flex items-center justify-center h-full relative">
                  <img className="img-float w-56" src={astronautFullPlanet} alt="" />
                  </div>
                </div>

                  { comment.map((comments, index) => (
                    <div className="mt-6" key={index}>
                      <ul className="w-full flex flex-col round-lg shadow-md z-10">
                        <li className="w-full flex items-center justify-end bg-zinc-200 z-10">
                          <DropdownMenu>
                            <DropdownMenuTrigger className="text-xl text-black mr-5">
                              <BsThreeDots />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem onClick={() => handleDelete(index)} className="flex items-center justify-between">
                                deletar <Trash2 />
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </li>
                        <li className="bg-zinc-200 flex w-full p-1 text-background round-lg shadow-md gap-5 z-10">
                          <GiAstronautHelmet className={`w-12 h-12 p-2 rounded-full bg-zinc-400`} />
                          <div className="w-full flex flex-col items-center justify-between">
                            <div className="w-full flex items-center justify-between">
                              <span className="flex items-center justify-center">de: {comments.name}</span>
                              <span className="flex items-center justify-center">{comments.newDate}</span>
                            </div>
                              <span className="w-full flex">para: Caiohenrys50@gmail.com</span>
                            </div>
                        </li>
                        <li className="bg-zinc-200 w-full p-1 text-background round-lg shadow-md gap-5 z-10 break-all	">
                          <p className="flex text-sm items-start justify-start ml-16 mb-5 break-all	">
                            Descrição: {comments.message}
                          </p>
                        </li>
                      </ul>
                    </div>
                  ))}
              </ScrollArea>
            </div>
          </div>
        </div>
    </>
    );
}

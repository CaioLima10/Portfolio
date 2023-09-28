import { MenuSquare } from "lucide-react";
import { Button } from "./components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { useState } from "react";

import emailjs from "@emailjs/browser"
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export default function Form() {

    const { t } = useTranslation()

    const [ name , setName ] = useState<string>("")
    const [ email , setEmail ] = useState<string>("")
    const [ message , setMessage ] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function sendForm(event: React.FormEvent){
        event.preventDefault()
        if(!name || !email || !message){
            alert("Prencha todos os campos");
            return
        }
        setIsLoading(true);

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_gh5aptr" , "template_xtxqoas" , templateParams , "rKjTy6HAL7XjjU1iF")
        .then((response) => {
            console.log("EMAIL ENVIADO!" , response.status , response.text)
            alert("Enviado com sucesso!")

            setName("")
            setMessage("")
            setEmail("")    

            setTimeout(() => {
                setIsLoading(false);
            }, 500);

        }, (err) => {
            console.log("ERROR", err)
            setIsLoading(false)
        })
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="w-45 h-30 p-5 gap-3 bg-background text-foreground" variant="outline">
                        {t("hiring")}
                        <MenuSquare color="#5f84a8" strokeWidth={1.75} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 min-h-56 p-4">
                    <form onSubmit={sendForm}>
                        <div className="mb-4">
                            <Label className="mt-2">{t("name")}:</Label>
                            <Input 
                                className="bg-slate-300/5"
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                value={name}
                                />
                        </div>
                        <div className="mb-4">
                            <Label className="mt-2">{t("email")}:</Label>
                            <Input 
                                className="bg-slate-300/5"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                value={email}
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="mt-2">{t("message")}:</Label>
                            <Textarea 
                                className="w-full h-32 p-2 resize-none bg-slate-300/5" 
                                onChange={(e) => setMessage(e.target.value)}
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
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

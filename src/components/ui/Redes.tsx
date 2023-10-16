import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Button } from "./button"

export default function Redes() {

  return (
    <div className="h-1 flex items-center justify-center relative z-99">
      <div className="flex items-center mx-auto"> 
        <a className="p-1 md:p-4 z-10" href="https://www.linkedin.com/in/caiolimadev10/" target="_blank">
          <Button className={` lg:w-40  md:w-20 h-10  bg-background text-foreground`} variant={"outline"}>
            <BsLinkedin className="w-6 h-6" />
            <span className="md:flex-none hidden md:none">LinkedIn</span>
          </Button>
        </a>
        <a className="p-1 md:p-4 z-10" href="https://github.com/CaioLima10" target="_blank">
          <Button className={`lg:w-40 md:w-20 h-10 bg-background text-foreground`} variant={"outline"}>
            <BsGithub className="w-6 h-6"  />
            <span className="md:flex-none hidden md:none">GitHub</span>
          </Button>
        </a>
        <a target="_blank" href="https://wa.me/5511989356304?text=Queria%20saber%20como%20faço%20pra%20contratar%20seu%20trabalho">
          <Button className={`lg:w-40 md:w-20 h-10 bg-background text-foreground`} variant={"outline"}>
            <BsWhatsapp className="w-6 h-6"  />
            <span className="md:flex-none hidden md:none">WhatsApp</span>
          </Button>
        </a>
      </div>
    </div>


  )
}

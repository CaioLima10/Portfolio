import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Button } from "./button"
import { Link } from "react-router-dom"

export default function Redes() {
  return (
<div className="h-16  flex items-center justify-center  border-b relative z-99">
  <div className="flex items-center">

    
    <Link className="" to="https://www.linkedin.com/in/caiolimadev10/" target="_blank">
      <Button className="w-30 h-10 gap-2 bg-background text-foreground" variant={"outline"}>
        <BsLinkedin className="w-6 h-6" />
        <span className="md:flex-none hidden md:block">LinkedIn</span>
      </Button>
    </Link>
    <Link className="p-4 z-10" to="https://github.com/CaioLima10" target="_blank">
      <Button className="w-30 h-10 gap-2 bg-background text-foreground" variant={"outline"}>
        <BsGithub  className="w-6 h-6"  />
        <span className="md:flex-none hidden md:block">GitHub</span>
      </Button>
    </Link>
    <Link  to="https://www.linkedin.com/in/caiolimadev10/" target="_blank">
      <Button className="w-30 h-10 gap-2 bg-background text-foreground" variant={"outline"}>
        <BsWhatsapp className="w-6 h-6"  />
        <span className="md:flex-none hidden md:block">WhatsApp</span>
      </Button>
    </Link>
  </div>
</div>

  )
}

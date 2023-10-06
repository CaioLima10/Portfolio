import { Palette, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { useTranslation } from "react-i18next"

export function ModeToggle() {

  const { t } = useTranslation()

  const { setTheme } = useTheme()

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger className=" text-center items-center justify-center" asChild>
        
          <Button className="relative items-center justify-center " variant="outline" size="icon">
                <Palette strokeWidth={1.75}  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">theme</Palette>
                <Palette strokeWidth={1.75}  className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <Palette strokeWidth={1.75} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="w-40">
        <DropdownMenuItem className="items-center justify-between " onClick={() => setTheme("teal")}>
          <p>{t("teal")}</p> <div className="w-6 h-6 bg-teal-900 rounded-full border border-gray-700"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center justify-between " onClick={() => setTheme("light")}>
          {t("slate")} <div className="w-6 h-6 bg-slate-800 rounded-full border border-slate-600"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center justify-between " onClick={() => setTheme("gray")}>
          <p>{t("gray")}</p> <div className="w-6 h-6 bg-gray-900 rounded-full border border-gray-700"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center justify-between " onClick={() => setTheme("dark")}>
          {t("dark")}  <div className="w-6 h-6 bg-zinc-900 rounded-full border border-zinc-700"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center justify-between " onClick={() => setTheme("system")}>
          {t("system")} <Laptop/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

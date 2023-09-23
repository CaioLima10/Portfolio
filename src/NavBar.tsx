import Form from "./Form"
import { Button } from "./components/ui/button"
import { Menubar } from "./components/ui/menubar"
import LanguageSwitcher from "./components/languageSwitcher"
import { useTranslation } from "react-i18next"

export default function NavBar() {

    const { t } = useTranslation()

  return (
    <div className="flex justify-center items-center relative z-50 ">
        <Menubar className=" fixed bottom-8 bg-slate-400 p-4  w-4/3 bg-primary/5">

            <Form/>
            <Menubar className="p-8 w-90 bg-background">
                <Button 
                    className="bg-background text-foreground w-35 h-30 p-4" 
                    variant="outline"
                    >
                        {t("curriculum")}
                </Button>
                <Button 
                    className="bg-background text-foreground w-35 h-30 p-4" 
                    variant="outline"
                    >
                   {t("aboutBtn")}
                </Button>
                <Button 
                    className="bg-background text-foreground w-35 h-30 p-4" 
                    variant="outline"
                    >
                    {t("project")}
                </Button>
                <Button className="bg-background text-foreground w-35 h-30 p-4 " variant="outline">
                    {t("Knowledge")}
                </Button>
            </Menubar>
            <LanguageSwitcher/>

        </Menubar>
    </div>
  )
}

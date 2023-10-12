import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TbBrandJavascript } from "react-icons/tb";
import imgJavascript from "../../assets/javascript.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";


export default function CardJavascript() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
    <DialogTrigger
      data-aos="fade-up"
      className=" w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative"
    >
      <label className="flex w-full h-5 absolute  top-0 bg-amber-400 items-center justify-center text-base text-black">
        JAVASCRIPT
      </label>
      <TbBrandJavascript className="w-full items-center text-8xl " />
    </DialogTrigger>
    <DialogContent className="flex flex-col ">
      <div className="flex flex-col relative">
        <img className="w-20 h-20" src={imgJavascript} alt="" />
        <h2 className="text-2xl">Javascript</h2>
        <div className="p-8 w-full">
          <span>{t("javascript")}</span>
          <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-yellow-300">2 {t("years")}</span> </h3>
        </div>
      </div>
      <label className="border-4  border-yellow-300 w-full h-0  absolute bottom-0 left-0"></label>
    </DialogContent>
  </Dialog>
  )
}

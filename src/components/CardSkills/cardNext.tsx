import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import imgNextJs from "../../assets/nextjs.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import { SiNextdotjs } from "react-icons/si";


export default function CardNext() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
        <DialogTrigger 
        data-aos="fade-up" data-aos-duration="1700"
        className="w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
        <label className="flex w-full h-5 absolute top-0 bg-white items-center justify-center text-base text-black">
            NEXT
        </label>
        <SiNextdotjs className="w-full items-center text-7xl " />
        </DialogTrigger>
        <DialogContent>
        <div className="flex flex-col relative">
            <img className="w-28 h-18" src={imgNextJs} alt="" />
            <h2 className="text-2xl w-28 flex items-center justify-center">Next JS</h2>
            <div className="p-8 w-full">
            <span>{t("next")}</span>
            <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-white">6 {t("months")}</span> </h3>
            </div>
        </div>
        <label className="border-4 border-white w-full h-0  absolute bottom-0 left-0"></label>
        </DialogContent>
    </Dialog>
  )
}
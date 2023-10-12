import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import imgCSS from "../../assets/css3.png";
import { SiCss3 } from "react-icons/si";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";


export default function CardCss() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
        <DialogTrigger
        data-aos="fade-up" data-aos-duration="900" 
        className="w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
        <label className="flex w-full h-5 absolute top-0 bg-blue-500 items-center justify-center text-base text-black">
            CSS 3
        </label>
        <SiCss3 className="w-full items-center text-7xl " />
        </DialogTrigger>
        <DialogContent>
        <div className="flex flex-col relative">
            <img className="w-20 h-20" src={imgCSS} alt="" />
            <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
            <div className="p-8 w-full">
            <span>{t("css")}</span>
            <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-500">2 {t("years")}</span> </h3>
            </div>
        </div>
        <label className="border-4 border-blue-500 w-full h-0   absolute bottom-0 left-0"></label>
        </DialogContent>
    </Dialog>
  )
}

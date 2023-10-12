import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TbBrandHtml5 } from "react-icons/tb";
import imgHtml from "../../assets/HTML5.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";


export default function CardHtml() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
    <DialogTrigger
        data-aos="fade-up" data-aos-duration="700" 
        className="w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
      <label className="flex w-full h-5 absolute top-0 bg-orange-400 items-center justify-center text-base text-black">
        HTML 5
      </label>
      <TbBrandHtml5 className="w-full items-center text-8xl " />
    </DialogTrigger>
    <DialogContent>
      <div className="flex flex-col relative">
        <img className="w-20 h-20" src={imgHtml} alt="" />
        <h2 className="text-2xl w-20 flex items-center justify-center">HTML 5</h2>
        <div className="p-8 w-full">
          <span>{t("html")}</span>
          <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-orange-400">2 {t("years")}</span> </h3>
        </div>
      </div>
      <label className="border-4 border-orange-400 w-full h-0  absolute bottom-0 left-0"></label>
    </DialogContent>
  </Dialog>
  )
}

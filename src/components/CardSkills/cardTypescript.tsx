import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TbBrandTypescript } from "react-icons/tb";
import imgTypescript from "../../assets/Typescript.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";

export default function CardTypescript() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
        <DialogTrigger
        data-aos="fade-up" data-aos-duration="1100" 
        className="w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
        <label className="flex w-full h-5 absolute top-0 bg-blue-600 items-center justify-center text-base text-black">
            TYPESCRIPT
        </label>
        <TbBrandTypescript className="w-full items-center text-8xl " />
        </DialogTrigger>
        <DialogContent>
        <div className="flex flex-col relative">
            <img className="w-20 h-20" src={imgTypescript} alt="" />
            <h2 className="text-2xl w-20 flex items-center justify-center">Typescript</h2>
            <div className="p-8 w-full">
            <span>{t("typescript")}</span>
            <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-600">10 {t("month")}</span> </h3>
            </div>
        </div>
        <label className="border-4 border-blue-600 w-full h-0  absolute bottom-0 left-0"></label>
        </DialogContent>
    </Dialog>
  )
}

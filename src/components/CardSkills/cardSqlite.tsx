import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import imgSqlite from "../../assets/SQLite3.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import { SiSqlite } from "react-icons/si";


export default function CardSqlite() {
    const { t } = useTranslation()
  
    useEffect(() => {
      Aos.refresh();
    }, []);

  return (
    <Dialog>
        <DialogTrigger 
        data-aos="fade-up" data-aos-duration="1900"
        className="w-38 md:w-36 lg:w-36 xl:w-40 h-40 bg-slate-100/5 active:bg-background/40 shadow-lg shadow-slace-500/40 relative">
        <label className="flex w-full h-5 absolute top-0 bg-blue-900 items-center justify-center text-base ">SQLite3</label>
        <SiSqlite className="w-full items-center text-7xl " />
        </DialogTrigger>
        <DialogContent>
        <div className="flex flex-col relative">
            <img className="w-28 h-18" src={imgSqlite} alt="" />
            <h2 className="text-2xl w-28 flex items-center justify-center">SQLite3</h2>
            <div className="p-8 w-full">
            <span>{t("sqlite")}</span>
            <h3 className="flex items-end justify-end text-xl">{t("period")}:<span className="text-blue-900">1 {t("year")}</span> </h3>
            </div>
        </div>
        <label className="border-4 border-blue-900 w-full h-0  absolute bottom-0 left-0"></label>
        </DialogContent>
    </Dialog>
  )
}

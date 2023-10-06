
import { Card, CardContent, CardFooter } from "../components/ui/card";
import {  TabsContent} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import imgProjectOne from "../assets/Group 18.png"
import { SiCss3, SiFigma, SiGit, SiHtml5, SiJavascript } from "react-icons/si";
import AOS from "@/hooks/aosConfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


interface IFirstProjectProps{
  value: string
}

export default function ThirdProject(props: IFirstProjectProps) {

  const { t } = useTranslation()

  const { value } = props

  useEffect(() => {
    AOS.refresh();
  }, []);
  
  return (
    <TabsContent value={value} className="w-full flex flex-col lg:flex-row items-center justify-between">
      <Card>
        <CardContent className="w-full flex flex-col lg:flex-row space-y-2 lg:space-y-0 gap-6 mt-10">
          <div  className="w-full lg:w-1/2 space-y-1 lg:flex-grow">
            <h1 className="text-2xl lg:text-3xl mb-4 flex items-center justify-center">Color-Challenge</h1>
            <span className="text-sm lg:text-base">
              {t("text-project-color")}
            </span>
            <div>
              <span className="flex items-center justify-center mt-3 lg:mt-5 w-full bg-slate-400 text-background">{t("hardware")}</span>
              <Card className="flex lg:flex-row items-center justify-center gap-4 lg:gap-10 text-3xl lg:text-5xl p-3 lg:p-5">
                <div className="flex flex-col items-center justify-center">
                  <SiJavascript />
                  <span className="text-sm lg:text-base">Javascript</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiHtml5 />
                  <span className="text-sm lg:text-base">Html5</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiCss3 />
                  <span className="text-sm lg:text-base">Css3</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiFigma />
                  <span className="text-sm lg:text-base">figma</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGit />
                  <span className="text-sm lg:text-base">git</span>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={imgProjectOne} alt="" className="w-full max-h-64 lg:max-h-full object-cover" />
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            className={`px-3 lg:px-4 py-2 w-full lg:w-64  rounded-md bg-secondary relative text-white overflow-hidden group`}
            variant="outline"
          >
            <span className="relative z-10">
            {t("code")}
            </span>
            <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
          </Button>

          <Button
            className={` px-3 lg:px-4 py-2 w-full lg:w-64 rounded-md bg-secondary relative text-white overflow-hidden group`}
            variant="outline"
          >
            <span className="relative z-10">
            {t("see")}
            </span>
            <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

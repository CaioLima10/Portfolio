import imgProjectOne from "../../assets/Group 19.png"
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiStyledcomponents } from "react-icons/si";
import AOS from "@/hooks/aosConfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";


interface IFirstProjectProps{
  value: string
}

export default function SecondProject(props: IFirstProjectProps) {

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
            <h1 className="text-2xl lg:text-3xl mb-4 flex items-center justify-center">Sigma-Bank</h1>
            <span className="text-sm lg:text-base">
              {t("text-project-sigma")}
            </span>
            <div>
              <span className="flex items-center justify-center mt-3 lg:mt-5 w-full bg-slate-400 text-background">{t("hardware")}</span>
              <Card className="flex lg:flex-row items-center justify-center gap-4 lg:gap-10 text-3xl lg:text-5xl p-3 lg:p-5">
                <div className="flex flex-col items-center justify-center">
                  <SiReact />
                  <span className="text-sm lg:text-base">ReactJs</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiStyledcomponents />
                  <span className="text-sm lg:text-base">styled c</span>
                </div>
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
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={imgProjectOne} alt="" className="w-full max-h-64 lg:max-h-full object-cover" />
          </div>
        </CardContent>
        <CardFooter className="gap-2 w-full items-center justify-center md:flex md:items-start md:justify-start">
          <a href="https://github.com/CaioLima10/app-banco" target="_blank">
            <Button
              className={`px-3 lg:px-4 py-2 w-full lg:w-64  rounded-md bg-secondary relative text-white overflow-hidden group`}
              variant="outline"
            >
              <span className="relative z-10">
                {t("code")}
              </span>
              <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
            </Button>
          </a>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7107411433071534080/" target="_blank">
            <Button
              className={` px-3 lg:px-4 py-2 w-full lg:w-64 rounded-md bg-secondary relative text-white overflow-hidden group`}
              variant="outline"
            >
              <span className="relative z-10">
                {t("see")}
              </span>
              <div className="absolute inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></div>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

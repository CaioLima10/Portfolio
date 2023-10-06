import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

interface IPlusProjectsProps{
    value: string
}

export default function PlusProjects(props: IPlusProjectsProps ) {

  const { t } = useTranslation()

  return (
    <TabsContent value={props.value} className="w-full flex flex-col gap-4 lg:flex-row items-center justify-between">
    <Card>
      <CardContent className="w-full h-60 flex items-center justify-center flex-col lg:flex-row space-y-2 lg:space-y-0 gap-4 mt-10">
        <div  className="w-full lg:w-1/2 space-y-1 lg:flex-grow">
          <ul className="flex gap-4 text-sm lg:text-base">
            <li>
                <h1 className="text-2xl lg:text-2xl mb-4 flex items-center justify-center">api-petshop-d-back-end</h1>
                <a href="https://github.com/CaioLima10/API-PETSHOP" target="_blank" className="border-b border-zinc-200 text-xs">
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
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="w-full h-60 flex items-center justify-center flex-col lg:flex-row space-y-2 lg:space-y-0 gap-4 mt-10">
        <div  className="w-full lg:w-1/2 space-y-1 lg:flex-grow">
          <ul className="flex gap-4 text-sm lg:text-base">
            <li>
                <h1 className="text-2xl lg:text-2xl mb-4 flex items-center justify-center">search-text-open-more</h1>
                <a href="https://github.com/CaioLima10/pesquisar-texto-abrir-mais" target="_blank" className="border-b border-zinc-200 text-xs">
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
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="w-full h-60 flex items-center justify-center flex-col lg:flex-row space-y-2 lg:space-y-0 gap-4 mt-10">
        <div  className="w-full lg:w-1/2 space-y-1 lg:flex-grow">
          <ul className="flex gap-4 text-sm lg:text-base">
            <li>
                <h1 className="text-2xl lg:text-2xl mb-4 flex items-center justify-center">habits-desig-nlw-setup</h1>
                <a href="https://github.com/CaioLima10/habits-design-nlw-Setup" target="_blank" className="border-b border-zinc-200 text-xs">
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
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </TabsContent>
  )
}

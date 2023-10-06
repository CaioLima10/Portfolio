import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs'
import FirstProject from './projects/fisrtProject'
import SecondProject from './projects/secondProject'
import ThirdProject from './projects/thirdProject'
import {RxDoubleArrowDown} from "react-icons/rx"
import Aos from "./hooks/aosConfig"
import { useEffect } from 'react'
import PlusProjects from './projects/plusProjects'
import { useTranslation } from 'react-i18next'

export default function Project() {

  const { t } = useTranslation()

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-down"  data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-28  mb-28'>
          <RxDoubleArrowDown 
            size={32}/>
      </div>
      <div className=" flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="w-full md:max-w-screen h-3/4 "> 
        <div className=''>
          <h1 className=' flex items-center justify-center text-4xl  md:text-5xl p-4'  id="project">{t("missions")}</h1>
        </div>

          <Tabs defaultValue="firstProject" className="w-full flex flex-col items-center justify-center p-16 mb-28 ">
            <TabsList className="grid w-72 md:w-full grid-cols-4">
              <TabsTrigger value="firstProject">{t("title-project")} 1</TabsTrigger>
              <TabsTrigger value="secondProject">{t("title-project")} 2</TabsTrigger>
              <TabsTrigger value="thirdProject">{t("title-project")} 3</TabsTrigger>
              <TabsTrigger value="plusProjects">+ {t("title-project")}</TabsTrigger>
            </TabsList>
            <FirstProject  value="firstProject"/>
            <SecondProject value="secondProject"/>
            <ThirdProject value="thirdProject" />
            <PlusProjects value="plusProjects"/>
          </Tabs>
        </div>
      </div>
    </>
  )
}

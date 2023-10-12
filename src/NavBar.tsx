  import Form from "./hooks/form";
  import { Button } from "./components/ui/button";
  import { Menubar } from "./components/ui/menubar";
  import LanguageSwitcher from "./components/languageSwitcher";
  import { useTranslation } from "react-i18next";
  import { Link as ScrollLink } from "react-scroll";
  import { useEffect, useState } from "react";

  import Curriculum from "./assets/curriculo-caio.pdf"
  import {  DropdownMenuItem } from "./components/ui/dropdown-menu";
  import { AlignJustify, Download, ScrollText } from "lucide-react";

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "./components/ui/dropdown-menu";

export default function NavBar() {
  const [_isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 1130);

  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleButtonClick = () => {
    setIsClicked(true);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 1130);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative z-50">
      <Menubar className="fixed bottom-8 bg-slate-400 p-4 w-4/3 bg-primary/5">
        <Form />
        <div className="flex items-center justify-start">
          <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center p-2 bg-blue-500 h-14 w-24 md:w-28 gap-2  border-spacing-x-8 text-sm text-black">{t("curriculum")}<AlignJustify /></DropdownMenuTrigger>
          <DropdownMenuContent  className="bg-red-100 w-10">
            <a href={Curriculum} download>
              <DropdownMenuItem className="flex items-center justify-center p-2 text-sm text-black" ><Download /> </DropdownMenuItem>
            </a>
            <a href={Curriculum} target="_blank">
              <DropdownMenuItem className="flex items-center justify-center p-2 text-sm text-black" > <ScrollText /> </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Menubar   className="p-8 w-90 bg-background">
          {isMobileView ? (
            <>
              <ScrollLink  to="start" spy={true} smooth={true} duration={1000}>
                <Button
                  className={`bg-background text-foreground w-35 h-30 p-4`}
                  variant="outline"
                  onClick={handleButtonClick}
                >
                  {t("start")}
                </Button>
              </ScrollLink>

              <ScrollLink to="about" spy={true} smooth={true} duration={1000}>
                <Button
                  className="bg-background text-foreground w-35 h-30 p-4"
                  variant="outline"
                >
                  {t("aboutBtn")}
                </Button>
              </ScrollLink>

              <ScrollLink to="skills" spy={true} smooth={true} duration={1000}>
                <Button
                  className="bg-background text-foreground w-35 h-30 p-4 "
                  variant="outline"
                >
                  {t("skills")}
                </Button>
              </ScrollLink>

              <ScrollLink to="project" spy={true} smooth={true} duration={1000}>
                <Button
                  className="bg-background text-foreground w-35 h-30 p-4"
                  variant="outline"
                >
                  {t("project")}
                </Button>
              </ScrollLink>

              <ScrollLink to="comment" spy={true} smooth={true} duration={1000}>
                <Button
                  className="bg-background text-foreground w-35 h-30 p-4"
                  variant="outline"
                >
                  {t("comment")}
                </Button>
              </ScrollLink>

            </>
          ) : (
            <div id="navBar-mobile">
              <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center h-14 w-2 md:w-14">open</DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`flex flex-col items-center justify-center gap-2 w-12 mb-5 ${
                    isMobileView ? "h-90" : "min-h-60"
                  }`}
                >
                  <ScrollLink
                    to="start"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <DropdownMenuItem
                      className="flex items-center justify-center bg-background text-foreground; w-28 h-30 p-4 border border-secondary"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleButtonClick}
                    >
                      {t("start")}
                    </DropdownMenuItem>
                  </ScrollLink>

                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <DropdownMenuItem
                      className="flex items-center justify-center bg-background text-foreground; w-28 h-30 p-4 border border-secondary"
                    >
                      {t("aboutBtn")}
                    </DropdownMenuItem>
                  </ScrollLink>

                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <DropdownMenuItem
                       className="flex items-center justify-center bg-background text-foreground; w-28 h-30 p-4 border border-secondary"
                    >
                      {t("skills")}
                    </DropdownMenuItem>
                  </ScrollLink>

                  <ScrollLink
                    to="project"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <DropdownMenuItem
                       className="flex items-center justify-center bg-background text-foreground; w-28 h-30 p-4 border border-secondary"
                    >
                      {t("project")}
                    </DropdownMenuItem>
                  </ScrollLink>

                  <ScrollLink
                    to="comment"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <DropdownMenuItem
                       className="flex items-center justify-center bg-background text-foreground; w-28 h-30 p-4 border border-secondary"
                    >
                      {t("comment")}
                    </DropdownMenuItem>
                  </ScrollLink>
                  
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </Menubar>
        <LanguageSwitcher />
      </Menubar>
    </div>
  );
}

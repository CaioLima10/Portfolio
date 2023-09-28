import Form from "./Form";
import { Button } from "./components/ui/button";
import { Menubar } from "./components/ui/menubar";
import LanguageSwitcher from "./components/languageSwitcher";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 1130);

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

  const { t } = useTranslation();

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
        <Menubar className="p-8 w-90 bg-background">
          {isMobileView ? (
            <>
              <ScrollLink to="start" spy={true} smooth={true} duration={1000}>
                <Button
                  className={`bg-background text-foreground w-35 h-30 p-4`}
                  variant="outline"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleButtonClick}
                >
                  {t("curriculum")}
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
                  className="bg-background text-foreground w-35 h-30 p-4"
                  variant="outline"
                >
                  {t("project")}
                </Button>
              </ScrollLink>

              <ScrollLink to="Knowledge" spy={true} smooth={true} duration={1000}>
                <Button
                  className="bg-background text-foreground w-35 h-30 p-4 "
                  variant="outline"
                >
                  {t("Knowledge")}
                </Button>
              </ScrollLink>
            </>
          ) : (
            <div id="navBar-mobile">
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
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
                    <Button
   
                      variant="outline"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleButtonClick}
                    >
                      {t("curriculum")}
                    </Button>
                  </ScrollLink>

                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <Button
                      className="bg-background text-foreground; w-28 h-30 p-4"
                      variant="outline"
                    >
                      {t("aboutBtn")}
                    </Button>
                  </ScrollLink>

                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <Button
                      className="bg-background text-foreground w-28 h-30 p-4"
                      variant="outline"
                    >
                      {t("project")}
                    </Button>
                  </ScrollLink>

                  <ScrollLink
                    to="Knowledge"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <Button
                      className="bg-background text-foreground w-28 h-30 p-4 "
                      variant="outline"
                    >
                      {t("Knowledge")}
                    </Button>
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

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import fr from "../assets/fr.png";
import en from "../assets/en.webp";
import ptBR from "../assets/prBR.webp";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const languageOptions = [
  {
    name: "Português",
    value: "pt",
    flag: ptBR,
    color: "green",
  },
  {
    name: "English",
    value: "en",
    flag: en,
    color: "red",
  },
  {
    name: "Français",
    value: "fr",
    flag: fr,
    color: "blue",
  },
];

export default function LanguageSwitcher() {
  const [isMobileLanguageView, setIsMobileLanguageView] = useState(window.innerWidth < 1030);

  const { i18n } = useTranslation();

  const selectOption = (option: string) => {
    i18n.changeLanguage(option);
    localStorage.setItem("language", option);
  };

  const selectedLanguage = localStorage.getItem("language");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileLanguageView(window.innerWidth < 1030);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {isMobileLanguageView ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-background p-2 md:p-4 w-16 md:w-24 h-[4.2rem] border rounded-md flex items-center justify-center text-center">
            {selectedLanguage ? (
              <img className="w-14" src={languageOptions.find((lang) => lang.value === selectedLanguage)?.flag} alt="" />
            ) : (
              "Select Language"
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col items-center justify-center mt-12 md:mt-0 gap-1 md:gap-2 w-12 h-90 fixed transform -translate-y-80 -translate-x-20">
            {languageOptions.map((languageOption) => (
              <div key={languageOption.value} className="bg-background p-0 md:p-2 border rounded-md flex items-center justify-center text-center">
                <div className="flex flex-col items-center">
                  <DropdownMenuItem className={`bg-background m-1 p-2 ${selectedLanguage === languageOption.value ? "opacity-1" : "opacity-50"}`} onClick={() => selectOption(languageOption.value)}>
                    <img className="w-10" src={languageOption.flag} alt={languageOption.name} />
                  </DropdownMenuItem>
                </div>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        languageOptions.map((languageOption) => (
          <div key={languageOption.value}>
            <div className="bg-background p-2 border rounded-md flex items-center justify-center text-center">
              <div className="flex flex-col items-center">
                <Button
                  className={`bg-background m-1 p-2 ${
                    selectedLanguage === languageOption.value ? "opacity-1" : "opacity-50"
                  }`}
                  onClick={() => {
                    selectOption(languageOption.value);
                  }}
                >
                  <img className="w-12" src={languageOption.flag} alt={languageOption.name} />
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

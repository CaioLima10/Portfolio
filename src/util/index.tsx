import  { useEffect, useState } from "react";
import astronautRocket from "../assets/astronaut-rocket-f-removebg-preview.png"
import astronautR from "../assets/open-astronaut-rocket.png"


export default function BackToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [nitro, setNitro] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNitro(true);
    setTimeout(() => {
      setNitro(false);
    }, 1000);
  };

  return (
    <div className="w-full relative">
      {showScrollButton ? (
        <button
          onClick={() => {
            scrollToTop();
          }}
          className="absolute right-10 bottom-14 z-10 text-5xl"
        > 
            {nitro ? <div className="fixed right-20 bottom-20"><img className="bg-100-white w-36 " src={astronautR} alt="Foguete" /></div> :  <img className="bg-100-white w-28" src={astronautRocket} alt="Foguete" />} 
        </button>
      ) : null}

     
    </div>
  );
}

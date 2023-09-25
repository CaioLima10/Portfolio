import NavBar from "./NavBar";
import Header from "./Header";
import { ThemeProvider } from "./components/theme-provider";
import Start from "./Start";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import BackToTop from "./util";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Project } from "./Project";
import { useEffect, useState } from "react";

export function App() {

  const [ scrollTop , setScrollTop ] = useState(0)

  function onScroll(){
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = ( winScroll / height ) * 20
    setScrollTop( scrolled )
  }

  useEffect(() => {
    window.addEventListener("scroll" , onScroll)

    return () => window.removeEventListener("scroll" , onScroll)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="dark:bg-white-200 mx-auto max-w-screen-xl  h-auto p-4 relative ">
          <Header />
          <div className="flex items-center justify-center ">
            <div className="w-2 h-80 bg-secondary left-2 top-44 fixed">
            <span className="absolute top-0 -mt-4 left-3 text-slate-200">0%</span>
            <span className="absolute top-20 -mt-2 left-3 text-slate-200">25%</span>
            <span className="absolute top-40 -mt-2 left-3 text-slate-200">50%</span>
            <span className="absolute top-60 -mt-2 left-3 text-slate-200">75%</span>
            <span className="absolute top-80 -mt-2 left-3 text-slate-200">100%</span>

              <div  style={{ height:`${scrollTop}rem`, width: "4px" , }} className="z-50 bg-primary flex rounded-full "/>
            </div>
          </div>
          <Start />
          <MdKeyboardDoubleArrowDown  className=" w-full text-5xl mb-5" />
          <NavBar />
          <About />
          <Skills />
          <Project />
          <Footer/>
          <BackToTop/>
        </div>
    </ThemeProvider>
  );
}

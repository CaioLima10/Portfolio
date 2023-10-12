import NavBar from "./NavBar";
import Header from "./Header";
import { ThemeProvider } from "./components/theme-provider";
import Start from "./Start";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import BackToTop from "./util";
import { useEffect, useState } from "react";
import Project from "./Project";

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import Suggestion from "./Suggestion";

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
                <div className="h-2 w-160 bg-secondary bottom-2  fixed z-50">
              <div  style={{ width:`${scrollTop}rem`, height: "4px", zIndex: "99"  }} className="z-50 bg-primary flex rounded-full "/>
            </div>
          </div>
          <Start />
          <NavBar />
          <About />
          <Skills />
          <Project />
          <Suggestion/>
          <Footer/>
          <ToastContainer/>
          <BackToTop/>
        </div>
    </ThemeProvider>
  );
}

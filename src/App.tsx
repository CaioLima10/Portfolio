import NavBar from "./NavBar";
import Header from "./Header";
import { ThemeProvider } from "./components/theme-provider";
import Start from "./Start";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import BackToTop from "./util";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="dark:bg-white-200 mx-auto max-w-screen-xl  h-auto p-4 ">
          <Header />
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

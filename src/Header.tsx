import Redes from "./components/ui/Redes";
import { ModeToggle } from "./components/mode-toggle";

export default function Header() {
  return (
    <div className="p-4 h-1 sm:p-8 flex items-center justify-between border-b relative z-99 " id="start">
    <h1 className="text-2xl sm:text-3xl font-bold">CL<span className="text-secondary ">D</span>S</h1>
    <div className="relative">
      <div className="mt-6 sm:mt-16 w-40 sm:w-96 h-16 bg-secondary/5 rounded-full border border-zinc-200 relative ">
        <div className="absolute "></div>
        <div className="relative z-10 flex items-center justify-center">
          <Redes/>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground"></span>
      <ModeToggle />
    </div>
  </div>
  
  );
}

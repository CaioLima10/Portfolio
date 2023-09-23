import Redes from "./components/ui/Redes";
import { ModeToggle } from "./components/mode-toggle";
import { Separator } from "./components/ui/separator";

export default function Header() {
  return (
    <div className="h-3 p-8 flex items-center justify-between border-b relative z-99">
      <h1 className="text-xl font-bold">Caio Lima</h1>
      <div>
        <Redes />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground"></span>
        <Separator className="h-10" orientation="vertical" />
        <ModeToggle />
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Menu, Sun } from "lucide-react";
export default function Navbar() {
  return (
    <div className="w-full h-12 flex flex-row-reverse my-2 pb-8 gap-2 items-center border-b border-gray-100 backdrop-blur-sm">
      <Button variant={"outline"} className="mr-4 px-3">
        <Menu />
      </Button>
      <Button
        variant={"outline"}
        className="mr-1 items-center justify-center px-3"
      >
        <Sun />
      </Button>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold items-start mr-auto ml-2">
        @snippetBase/react-components-hub
      </code>
    </div>
  );
}

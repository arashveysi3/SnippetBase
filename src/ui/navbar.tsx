import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { Menu } from "lucide-react";
export default function Navbar() {
  return (
    <div
      className="w-full h-12 flex flex-row-reverse mb-2 pb-1 pt-2 gap-2 items-center border-b border-gray-100 backdrop-blur-sm bg-gray-100 dark:bg-gray-900
"
    >
      <Button
        variant={"outline"}
        className="mr-4 px-3  dark:bg-gray-900 dark:text-white"
      >
        <Menu />
      </Button>
      <ThemeToggleButton />
      <code className="relative rounded bg-muted dark:text-white dark:bg-gray-800 px-3 py-[0.2rem] font-mono text-sm font-semibold items-start mr-auto ml-2 hover:text-blue-500 transition-all cursor-pointer">
        @snippetBase/react-components-hub
      </code>
    </div>
  );
}

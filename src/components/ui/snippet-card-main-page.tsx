import MacOSWindow from "@/ui/macOsWindow";
import { Button } from "./button";
interface Props {
  Code: string;
  Title: string;
  Description: string;
}
export default function SnippetCard({ Code, Title, Description }: Props) {
  return (
    <div className="w-[24rem] h-max bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
      <MacOSWindow codeSnippet={Code} title={Title}></MacOSWindow>
      <p className="text-sm font-medium leading-none truncate">{Description}</p>
      <Button variant={"outline"} className="my-3">
        See More
      </Button>
    </div>
  );
}

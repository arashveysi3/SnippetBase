import MacOSWindow from "@/ui/macOsWindow";
import { Button } from "./button";

export default function SnippetCard() {
  const code = `
    import React from 'react';
    const App = () => {
      return <div>Hello, world!</div>;
    };
    export default App;
  `;
  return (
    <div className="w-[24rem] h-max bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
      <MacOSWindow codeSnippet={code} title={"Demo Snippet"}></MacOSWindow>
      <p className="text-sm font-medium leading-none">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrs standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make...{" "}
      </p>
      <Button variant={"outline"} className="my-3">
        See More
      </Button>
    </div>
  );
}

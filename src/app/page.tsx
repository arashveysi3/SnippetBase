import MacOSWindow from "@/ui/macOsWindow";

export default function Home() {
  const code = `
    import React from 'react';
    const App = () => {
      return <div>Hello, world!</div>;
    };
    export default App;
  `;
  return (
    <div>
      <main>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 w-full justify-items-center ml-4">
          <div className="justify-self-end">
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
          </div>
          <div className="justify-self-start">
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
            <div className="w-[24rem] h-[22rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md my-4 px-4">
              <MacOSWindow codeSnippet={code} title={"Hello"}></MacOSWindow>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="w-[16rem] h-[65rem] bg-gray-200 rounded-md my-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

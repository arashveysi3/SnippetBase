"use client";
import { FC } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";

SyntaxHighlighter.registerLanguage("typescript", ts);

interface MacOSWindowProps {
  codeSnippet: string;
  title: string;
}

const MacOSWindow: FC<MacOSWindowProps> = ({ codeSnippet, title }) => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-3xl w-full overflow-hidden">
        <div className="flex items-center justify-between bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" />
            <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" />
          </div>
          <div className="text-sm text-gray-800 dark:text-gray-100 font-medium">
            {title}
          </div>
        </div>

        <div className="p-4 absolute scale-0 dark:scale-100">
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
            wrapLines={true}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
        <div className="p-4 scale-100 dark:scale-0">
          <SyntaxHighlighter
            language="typescript"
            style={atomOneLight}
            wrapLines={true}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default MacOSWindow;

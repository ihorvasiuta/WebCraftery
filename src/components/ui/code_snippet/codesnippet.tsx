import React, { useRef, useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./codesnippet.module.css";

type CodeExamples = {
  html: string;
  css: string;
  js: string;
};

type CodeSnippetProps = {
  codeExamples: CodeExamples;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ codeExamples }) => {
  const [activeTab, setActiveTab] = useState<keyof CodeExamples>("html");

  // Ctrl+A selecting the code in the Codesnippet
  const snippetRef = useRef<HTMLDivElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.ctrlKey && event.key === "a") {
      event.preventDefault();
      if (snippetRef.current) {
        const codeElement = snippetRef.current.querySelector("pre");
        if (codeElement) {
          const range = document.createRange();
          const selection = window.getSelection();
          range.selectNodeContents(codeElement);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }
    }
  };

  // Copy to the Clipboard the code in Codesnippet
  // const copyToClipboard = useCallback(() => {
  //   const codeElement = snippetRef.current?.querySelector("code");
  //   if (codeElement) {
  //     let codeText = codeElement.innerText;
  //     const cleanedCode = codeText
  //       .split("\n")  
  //       .map((line) => line.replace(/^\d+\s+/, ""))
  //       .join("\n");
  //     navigator.clipboard.writeText(cleanedCode);
  //   }
  // }, [snippetRef]);

  const getPaddedCode = (code: string): string => {
    const lines = code.split("\n");
    const requiredLines = 14;
    const missingLines = requiredLines - lines.length;

    if (missingLines > 0) {
      const padding = new Array(missingLines).fill("\n").join("");
      return code + padding;
    }
    return code;
  };
  return (
    <div
      className={styles.code_snippet}
      ref={snippetRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.filetabs}>
        <div className={styles.tabs}>
          {Object.keys(codeExamples).map((lang) => (
            <button
              className={`${styles.filetab} ${
                activeTab === lang ? styles.active : ""
              }`}
              onClick={() => setActiveTab(lang as keyof CodeExamples)}
            >
              {lang}.file
              <img
                src={require(`./file_icons/${lang}_icon.svg`)}
                alt={`${lang} icon`}
                className={styles.icon_style}
              />
            </button>
          ))}
        </div>
      </div>
      {/* <button className={styles.copy} onClick={copyToClipboard}>
        <span
          data-text-end="Copied!"
          data-text-initial="Copy to clipboard"
          className={styles.tooltip}
        ></span>
        <span>
          <svg
            xmlSpace="preserve"
            viewBox="0 0 6.35 6.35"
            y="0"
            x="0"
            height="20"
            width="20"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.clipboard}
          >
            <g>
              <path
                fill="currentColor"
                d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
              ></path>
            </g>
          </svg>
          <svg
            xmlSpace="preserve"
            viewBox="0 0 24 24"
            y="0"
            x="0"
            height="18"
            width="18"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.checkmark}
          >
            <g>
              <path
                data-original="#000000"
                fill="currentColor"
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              ></path>
            </g>
          </svg>
        </span>
      </button> */}
      <SyntaxHighlighter
        className={styles.syntax_highlighter}
        language={activeTab}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
      >
        {getPaddedCode(codeExamples[activeTab])}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;

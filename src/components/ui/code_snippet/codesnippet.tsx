import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./codesnippet.module.css";

type CodeExamples = {
  html: string;
  css: string;
  js?: string;
};

type CodeSnippetProps = {
  codeExamples: CodeExamples;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ codeExamples }) => {
  // Only include keys that have non-empty values
  const availableLanguages = Object.keys(codeExamples).filter(
    (key) =>
      codeExamples[key as keyof CodeExamples] &&
      codeExamples[key as keyof CodeExamples]!.trim() !== ""
  ) as Array<keyof CodeExamples>;

  const [activeTab, setActiveTab] = useState<keyof CodeExamples>(
    availableLanguages[0]
  );

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
          {availableLanguages.map((lang) => (
            <button
              key={lang}
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
      <SyntaxHighlighter
        language={activeTab}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        className={styles.syntax_highlighter}
      >
        {getPaddedCode(codeExamples[activeTab] || "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;

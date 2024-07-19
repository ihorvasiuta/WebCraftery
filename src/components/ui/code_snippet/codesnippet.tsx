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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
        <button
          className={styles.copy_button}
          onClick={() => copyToClipboard(codeExamples[activeTab] || "")}
        >
          <span className={styles.copy_text}>{copied ? "Copied" : "Copy"}</span>
          <span className={styles.copy_svg}>
            <svg
              fill="white"
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
            </svg>
          </span>
        </button>
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

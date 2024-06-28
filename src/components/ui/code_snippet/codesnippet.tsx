import React, { useState } from "react";
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
    <div className={styles.code_snippet}>
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

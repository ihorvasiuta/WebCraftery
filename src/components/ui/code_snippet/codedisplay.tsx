import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  jsx,
  javascript,
} from "react-syntax-highlighter/dist/esm/languages/prism";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

const codeString = `
function add(a, b) {
  return a + b;
}
`;

const CodeDisplay: React.FC = () => {
  return (
    <SyntaxHighlighter language="javascript" style={coy}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default CodeDisplay;
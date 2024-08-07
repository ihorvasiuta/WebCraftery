import React, { useState, useEffect } from "react";

type ProzentageProps = {
  code: {
    html: string;
    css: string;
    js: string;
  };
};

const ProcentageComp: React.FC<ProzentageProps> = ({ code }) => {
  const [procentage, setProzentage] = useState({
    html: "",
    css: "",
    js: "",
  });
  useEffect(() => {
    const htmllen = code.html.length;
    const csslen = code.css.length;
    const jslen = code.js.length;
    const totallen = htmllen + csslen + jslen;
    if (totallen > 0) {
      setProzentage({
        html: `${Math.round((htmllen / totallen) * 100)}%`,
        css: `${Math.round((csslen / totallen) * 100)}%`,
        js: `${Math.round((jslen / totallen) * 100)}%`,
      });
    }
  }, [code]);
  return (
    <div className="vidn_cont">
      <div className="skill-box">
        <span className="tt">HTML</span>

        <div className="skill-bar">
          <span className="skill-per html" style={{ width: procentage.html }}>
            <span className="tooltip">{procentage.html}</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="tt">CSS</span>

        <div className="skill-bar">
          <span className="skill-per scss" style={{ width: procentage.css }}>
            <span className="tooltip">{procentage.css}</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="tt">JS</span>
        <div className="skill-bar">
          <span className="skill-per Boostrap" style={{ width: procentage.js }}>
            <span className="tooltip">{procentage.js}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcentageComp;

import React, { useState, useEffect } from "react";
import ProcentageComp from "../procentage/procentage";
import "./detailsblock.css";

type DetailsData = {
  title: string;
  description: string;
  url: string;
  code: {
    html: string;
    css: string;
    js: string;
  };
  important?: string;
};
type DetailsProps = {
  details_data: DetailsData;
};
const DetailsBlock: React.FC<DetailsProps> = ({ details_data }) => {
  const [licenseText, setLicenseText] = useState<string>("");

  useEffect(() => {
    const text = `Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
    setLicenseText(text);
  }, []);
  return (
    <div className="details_block">
      <div className="important_part">
        <div className="title_important">
          <h1 className="important_text">Important</h1>
          <svg
            className="important_icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
        {details_data.important && (
          <div
            className="important_content"
            dangerouslySetInnerHTML={{ __html: details_data.important }}
          />
        )}
      </div>
      <div className="cl_bl_gg">
        <div className="percentage_detailsblock">
          <ProcentageComp
            code={{
              html: details_data.code.html,
              css: details_data.code.css,
              js: details_data.code.js,
            }}
          />
        </div>
        <div className="mit_l_bl">
          <div className="ttl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mit_b_ic"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12 2v1.75M16 21h-4m-4 0h4m9-16a4.821 4.821 0 0 1-4.055.12l-1.583-.68A8.532 8.532 0 0 0 12 3.75M3 5a4.821 4.821 0 0 0 4.055.12l1.583-.68A8.532 8.532 0 0 1 12 3.75M12 21V3.75m7 1.75-2.892 6.145a3.196 3.196 0 1 0 5.784 0L19 5.5Zm-14 0-2.892 6.145a3.196 3.196 0 1 0 5.784 0L5 5.5Z"></path>
            </svg>
            <p className="mit_tt_tx">MIT License</p>
          </div>
          <textarea
            name="licenseText"
            id="licenseText"
            className="mit_tx_ara custom_scrollbar"
            value={licenseText}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;

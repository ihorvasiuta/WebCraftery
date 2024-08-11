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
  const [showWarning, setShowWarning] = useState<boolean>(false);

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

    if (details_data.important && details_data.important.trim() !== "") {
      setShowWarning(true);
    }

    const handleScroll = () => {
      const importantSection = document.querySelector(".important_part");
      if (importantSection) {
        const rect = importantSection.getBoundingClientRect();
        const isAbove = rect.bottom <= 0; // User has scrolled past the section
        const isVisible = rect.top + 100 < window.innerHeight && rect.bottom >= 0; // Section is in view

        if (isVisible) {
          setShowWarning(false); // Hide warning if the section is in view
        } else if (isAbove) {
          setShowWarning(false); // Hide warning if the user has scrolled past the section
        } else {
          setShowWarning(true); // Show warning if the user is above the section
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user is already scrolled to the important section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [details_data.important]);

  return (
    <div className="details_block">
      {showWarning && (
        <div
          className={`warning_message ${!showWarning ? "warning_hidden" : ""}`}
        >
          <svg
            className="warning_icon"
            width="191"
            height="256"
            viewBox="0 0 191 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.4958 0C42.8388 0 0 39.8572 0 88.8434C0 135.997 86.645 246.164 90.3343 250.829L93.7774 255.188C94.1801 255.7 94.8213 256 95.4958 256C96.1808 256 96.8179 255.7 97.2247 255.188L100.666 250.829C104.357 246.164 191 135.997 191 88.8434C191 39.8572 148.154 0 95.4958 0Z"
              fill="#EA3323"
            />
            <path
              d="M95.4167 127.125C97.5535 127.125 99.3446 126.402 100.79 124.957C102.236 123.511 102.958 121.72 102.958 119.583C102.958 117.447 102.236 115.655 100.79 114.21C99.3446 112.764 97.5535 112.042 95.4167 112.042C93.2799 112.042 91.4887 112.764 90.0432 114.21C88.5977 115.655 87.875 117.447 87.875 119.583C87.875 121.72 88.5977 123.511 90.0432 124.957C91.4887 126.402 93.2799 127.125 95.4167 127.125ZM87.875 96.9583H102.958V51.7083H87.875V96.9583ZM95.4167 164.833C84.984 164.833 75.1799 162.854 66.0042 158.894C56.8285 154.935 48.8469 149.561 42.0594 142.774C35.2719 135.986 29.8984 128.005 25.9391 118.829C21.9797 109.653 20 99.8493 20 89.4167C20 78.984 21.9797 69.1799 25.9391 60.0042C29.8984 50.8285 35.2719 42.8469 42.0594 36.0594C48.8469 29.2719 56.8285 23.8984 66.0042 19.9391C75.1799 15.9797 84.984 14 95.4167 14C105.849 14 115.653 15.9797 124.829 19.9391C134.005 23.8984 141.986 29.2719 148.774 36.0594C155.561 42.8469 160.935 50.8285 164.894 60.0042C168.854 69.1799 170.833 78.984 170.833 89.4167C170.833 99.8493 168.854 109.653 164.894 118.829C160.935 128.005 155.561 135.986 148.774 142.774C141.986 149.561 134.005 154.935 124.829 158.894C115.653 162.854 105.849 164.833 95.4167 164.833ZM95.4167 149.75C112.26 149.75 126.526 143.905 138.216 132.216C149.905 120.526 155.75 106.26 155.75 89.4167C155.75 72.5736 149.905 58.3073 138.216 46.6177C126.526 34.9281 112.26 29.0833 95.4167 29.0833C78.5736 29.0833 64.3073 34.9281 52.6177 46.6177C40.9281 58.3073 35.0833 72.5736 35.0833 89.4167C35.0833 106.26 40.9281 120.526 52.6177 132.216C64.3073 143.905 78.5736 149.75 95.4167 149.75Z"
              fill="white"
            />
          </svg>
        </div>
      )}
      {details_data.important && details_data.important.trim() !== "" && (
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
          <div
            className="important_content"
            dangerouslySetInnerHTML={{ __html: details_data.important }}
          />
        </div>
      )}
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

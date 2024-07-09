import React, { useEffect, useRef } from "react";
import "./preview.css";

type RenderPreviewProps = {
  html: string;
  css: string;
  js: string;
};
type PreviewProps = {
  codes: RenderPreviewProps;
};
const RenderPreview: React.FC<PreviewProps> = ({ codes }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleNavigation = (e: any) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop the event from bubbling up to the parent
    const targetId = e.target.getAttribute("href").slice(1); // Remove the '#' to get the ID
    const targetElement =
      iframeRef.current?.contentWindow?.document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Effect to attach event listeners to links
  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentDocument;
    if (iframeDocument) {
      const links = iframeDocument.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", handleNavigation);
      });

      // Cleanup
      return () => {
        links.forEach((link) => {
          link.removeEventListener("click", handleNavigation);
        });
      };
    }
  }, [codes]); // Dependency on `codes` to re-apply when content changes

  return (
    <div className="preview_window_big">
      <div className="actionbar">
        <div className="leftActions">
          <div className="item" data-trigger="sPanelLogOptions"></div>
          <div className="group" data-app="finder">
            <div className="item bold" data-trigger="sPanelAppFinderOptions">
              Finder
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionFile">
              File
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionEdit">
              Edit
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionView">
              View
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionGo">
              Go
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionWindow">
              Window
            </div>
            <div className="item" data-trigger="sPanelAppFinderOptionHelp">
              Help
            </div>
          </div>
        </div>
        <div className="rightActions">
          <div
            className="item"
            data-trigger="sPanelBluetooth"
            data-connected=""
          ></div>
          <div className="item" data-trigger="sPanelPower" data-percentage="74">
            <i></i>
          </div>
          <div className="item sActionbarTime" data-trigger="sPanelTime">
            2:35
          </div>
          <div
            className="item sActionbarNotifications hasNotifications"
            data-trigger="sPanelNotifications"
          ></div>
        </div>
      </div>
      <div className="card">
        <div className="circles">
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
        </div>

        <div className="browser">
          <div className="chevrons">
            <svg
              viewBox="0 0 20 20"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              data-name="20"
              id="_20"
            >
              <path
                transform="translate(6.25 3.75)"
                d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z"
                id="Fill"
              ></path>
            </svg>
            <svg
              viewBox="0 0 20 20"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              data-name="20"
              id="_20"
            >
              <path
                transform="translate(6.625 3.75)"
                d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z"
                id="Fill"
              ></path>
            </svg>
          </div>
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7.89"
              height="7.887"
              viewBox="0 0 16.89 16.887"
            >
              <path
                id="Fill"
                d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z"
                transform="translate(0.003 0)"
              ></path>
            </svg>
            webcraftery.com
            <div></div>
          </div>
        </div>
      </div>
      <iframe
        className="big_iframe"
        srcDoc={`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
<style>
      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      ${codes.css}
    </style>
    <title>Responsive bottom navigation</title>
  </head>
  <body>
    ${codes.html}
    <script>
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
});

          ${codes.js}
    </script>
  </body>
  </html>
`}
        style={{ width: "100%", height: "100%" }}
        sandbox="allow-scripts allow-top-navigation-by-user-activation"
        title="Preview Window"
      />
    </div>
  );
};

export default RenderPreview;

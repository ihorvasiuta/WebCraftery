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

      <div className="address-bar">
        <div className="address-bar-icons">
          <div className="arrows_block">
            <img
              className="adressbar_icon back_icon"
              src={require(`./adressbar_big/arrow_back_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
              alt=""
            />
            <img
              className="adressbar_icon forward_icon"
              src={require(`./adressbar_big/arrow_forward_24dp_898A8F_FILL0_wght400_GRAD0_opsz24.png`)}
              alt=""
            />
          </div>
          <img
            className="adressbar_icon refresh_icon"
            src={require(`./adressbar_big/refresh_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
            alt=""
          />
        </div>
        <div className="address-bar-input">
          <div className="left_blockside">
            <img
              className="input_icon adressbar_icon info_icon"
              src={require(`./adressbar_big/page_info_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
              alt=""
            />
            <div className="input_url">webcraftery.com</div>
          </div>
          <img
            className="intput_icon adressbar_icon star_icon"
            src={require(`./adressbar_big/star_24dp_666666_FILL0_wght400_GRAD0_opsz24.png`)}
            alt=""
          />
        </div>
        <img
          className="adressbar_icon extention_icon"
          src={require(`./adressbar_big/extension_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
          alt=""
        />
        <img
          className="adressbar_icon download_icon"
          src={require(`./adressbar_big/download_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
          alt=""
        />
        <img
          className="adressbar_icon account_icon"
          src={require(`./adressbar_big/account_circle_24dp_434343_FILL0_wght400_GRAD0_opsz24.png`)}
          alt=""
        />
        <img
          className="adressbar_icon more_icon"
          src={require(`./adressbar_big/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.png`)}
          alt=""
        />
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

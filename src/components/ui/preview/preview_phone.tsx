import React, { useEffect, useRef } from "react";
import "./preview_phone.css";

type RenderPreviewProps = {
  html: string;
  css: string;
  js: string;
};
type PreviewProps = {
  codes: RenderPreviewProps;
};
const RenderPreviewPhone: React.FC<PreviewProps> = ({ codes }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle internal navigation
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
    <div className="iphone">
      <div className="screen">
        <div className="status_bar">
          <img className="time_img" src={require(`./time_iphone.png`)} alt="" />
          <img
            className="mob_wifi_batt_img"
            src={require(`./status_bar.png`)}
            alt=""
          />
        </div>
        <div className="preview_window">
          <iframe
            className="iframe_window"
            srcDoc={`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <style>${codes.css}</style>
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
            style={{ width: "100%", height: "420px" }}
            sandbox="allow-scripts"
            title="Preview Window"
          />
        </div>
      </div>
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default RenderPreviewPhone;

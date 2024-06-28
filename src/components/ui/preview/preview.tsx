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
    <div className="preview_window_big">
      <iframe className="big_iframe"
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
              targetElement.scrollIntoView({behavior: 'smooth'});
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
        sandbox="allow-scripts allow-same-origin"
        title="Preview Window"
      />
    </div>
  );
};


export default RenderPreview;

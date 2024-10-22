import React from "react";
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
  return (
    <div className="iphone">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="iphone_inner">
        <div className="screen">
          <div className="status_bar">
            <img
              className="time_img"
              src={require(`./time_iphone.png`)}
              alt=""
            />
            <img
              className="mob_wifi_batt_img"
              src={require(`./status_bar.png`)}
              alt=""
            />
          </div>
          <div className="browser-bar">
            <img
              className="translate_img"
              src={require(`./translate.png`)}
              alt=""
            />
            <div className="url-input">
              <img className="lock_img" src={require(`./lock.png`)} alt="" />
              <span className="url-text">webcraftery.com</span>
            </div>
            <img
              className="refresh_img"
              src={require(`./refresh_icon.png`)}
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
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
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
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
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
              style={{ width: "100%", height: "396px" }}
              sandbox="allow-scripts allow-top-navigation-by-user-activation"
              title="Preview Window"
            />
          </div>
        </div>
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
      </div>
    </div>
  );
};

export default RenderPreviewPhone;

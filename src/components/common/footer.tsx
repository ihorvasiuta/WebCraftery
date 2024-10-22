import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a className="footer__link" href="/elements">
                  Elements
                </a>
              </li>
              <li>
                <a className="footer__link" href="/inspirations">
                  Inspirations
                </a>
              </li>
              <li>
                <a className="footer__link" href="/">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Community</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="mailto:random38578394@gmail.com?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                  className="footer__link"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:random38578394@gmail.com?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                  className="footer__link"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="mailto:random38578394@gmail.com?subject=Support%20Request&body=Please%20describe%20your%20issue%20here."
                  className="footer__link"
                >
                  Usage help
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">MIT License</h3>
            <div className="un_l_bl">
              <p className="mit_txt_un">
                All content (Web Components) on this site are published under
                the{" "}
                <a
                  className="l_mit_txt"
                  href="https://opensource.org/license/mit"
                >
                  MIT License
                </a>
              </p>
            </div>
          </div>
          <div className="footer__social">
            <h3 className="footer__title">Follow Us</h3>
            <div className="social_icons_block_footer">
              <a
                href="https://discord.gg/5fMkyc2u"
                className="nav_social_icon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="26"
                  height="18"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.703 1.65784C21.8878 0.877051 19.9722 0.320287 18.004 0.00149691C17.9672 -0.00522617 17.9299 0.0111248 17.9119 0.0419491C17.6669 0.451936 17.3951 0.986558 17.2026 1.40857C15.081 1.10622 12.9229 1.10585 10.8012 1.40748C10.5883 0.939876 10.348 0.483641 10.0814 0.0408556C10.0623 0.0112094 10.0257 -0.00441125 9.98927 0.00149691C8.02098 0.319625 6.10523 0.876414 4.29027 1.65784C4.2749 1.66388 4.26188 1.67418 4.25294 1.68736C0.622376 6.7701 -0.372762 11.7271 0.116057 16.6218C0.118144 16.6468 0.131255 16.6697 0.152223 16.6852C2.26577 18.1523 4.62997 19.2721 7.14385 19.9968C7.18038 20.0064 7.21943 19.9938 7.24185 19.9651C7.782 19.2774 8.26149 18.5493 8.67214 17.7862C8.68416 17.765 8.68579 17.7399 8.67662 17.7175C8.66745 17.6951 8.64838 17.6774 8.62431 17.6692C7.87003 17.399 7.13976 17.0733 6.44037 16.6951C6.41434 16.681 6.39756 16.6556 6.39568 16.6274C6.39381 16.5993 6.40708 16.5722 6.43104 16.5551C6.57832 16.4519 6.72302 16.3454 6.86503 16.2359C6.89011 16.2171 6.92427 16.2128 6.95369 16.2249C11.5386 18.1852 16.4991 18.1852 21.0268 16.2249C21.0565 16.2124 21.0913 16.2166 21.1166 16.2359C21.2578 16.3419 21.4048 16.4513 21.5529 16.554C21.5771 16.5707 21.5908 16.5976 21.5894 16.6258C21.588 16.6539 21.5717 16.6795 21.5459 16.694C20.8482 17.0761 20.1172 17.4024 19.3608 17.6692C19.337 17.6777 19.3182 17.6954 19.3091 17.7177C19.3 17.74 19.3014 17.7649 19.313 17.7862C19.733 18.5493 20.2136 19.2752 20.7421 19.9651C20.7644 19.9939 20.8038 20.0063 20.8401 19.9957C23.3583 19.2729 25.7263 18.1526 27.8423 16.683C27.8628 16.6695 27.8763 16.6485 27.8796 16.6251C28.4629 10.964 26.9019 6.04743 23.7392 1.68955C23.732 1.67444 23.7192 1.66236 23.703 1.65566M9.35696 13.6404C7.97683 13.6415 6.84053 12.4553 6.84053 10.9968C6.84053 9.54052 7.957 8.35211 9.35696 8.35211C10.7686 8.35211 11.8955 9.55145 11.8734 10.9979C11.8734 12.4542 10.7569 13.6404 9.35696 13.6404ZM18.6609 13.6415C17.2807 13.6415 16.1444 12.4553 16.1444 10.9968C16.1444 9.54052 17.2586 8.35211 18.6609 8.35211C20.0725 8.35211 21.1983 9.55145 21.1773 10.9979C21.1773 12.4542 20.0736 13.6404 18.6609 13.6404"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/webcraftery"
                className="nav_social_icon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.377319C5.14718 0.377319 0 5.57942 0 12C0 18.4206 5.14718 23.6227 11.5 23.6227C17.8528 23.6227 23 18.4206 23 12C23 5.57942 17.8528 0.377319 11.5 0.377319ZM16.8327 8.28358C16.6611 10.1207 15.9099 14.5823 15.5296 16.6397C15.3673 17.5114 15.052 17.802 14.746 17.8301C14.0782 17.8911 13.5728 17.3849 12.9236 16.9537C11.9127 16.2836 11.3377 15.8665 10.3593 15.2103C9.22319 14.4558 9.96048 14.0387 10.605 13.3591C10.7766 13.181 13.7165 10.4769 13.7722 10.2332C13.7815 10.2004 13.7861 10.0879 13.7165 10.027C13.647 9.96606 13.5496 9.98949 13.48 10.0035L8.62964 13.242L7.38226 13.7059C6.96956 13.6966 6.18125 13.4716 5.59234 13.2795C4.87359 13.0451 4.29859 12.9186 4.3496 12.5156L5.20746 11.8735L11.9127 8.95376C15.1077 7.6134 15.7708 7.37907 16.202 7.36969C16.2994 7.36969 16.5081 7.39313 16.6472 7.5056C16.738 7.58628 16.7958 7.6982 16.8095 7.8196C16.8346 7.97288 16.8423 8.12853 16.8327 8.28358Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/WebCraftery"
                className="nav_social_icon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2099 0.122559H19.3318L12.5132 7.9139L20.5345 18.5176H14.2555L9.33392 12.0882L3.70929 18.5176H0.583027L7.8747 10.1823L0.185059 0.122559H6.62331L11.0673 5.99923L16.2099 0.122559ZM15.1133 16.6515H16.8423L5.68145 1.89131H3.82426L15.1133 16.6515Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/webcraftery_pub/"
                className="nav_social_icon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0025 5.11587C7.88098 5.11587 5.36319 7.51975 5.36319 10.5C5.36319 13.4803 7.88098 15.8841 11.0025 15.8841C14.1239 15.8841 16.6417 13.4803 16.6417 10.5C16.6417 7.51975 14.1239 5.11587 11.0025 5.11587ZM11.0025 14.0004C8.98528 14.0004 7.3362 12.4306 7.3362 10.5C7.3362 8.5694 8.98037 6.99961 11.0025 6.99961C13.0245 6.99961 14.6687 8.5694 14.6687 10.5C14.6687 12.4306 13.0196 14.0004 11.0025 14.0004ZM18.1877 4.89563C18.1877 5.59383 17.5988 6.15146 16.8724 6.15146C16.1411 6.15146 15.5571 5.58914 15.5571 4.89563C15.5571 4.20211 16.146 3.6398 16.8724 3.6398C17.5988 3.6398 18.1877 4.20211 18.1877 4.89563ZM21.9227 6.1702C21.8393 4.48795 21.4368 2.99782 20.146 1.77011C18.8601 0.542397 17.2994 0.15815 15.5374 0.0738034C13.7215 -0.0246011 8.27853 -0.0246011 6.46258 0.0738034C4.70552 0.153464 3.14479 0.537711 1.85399 1.76542C0.56319 2.99314 0.165644 4.48326 0.0773006 6.16551C-0.0257669 7.89931 -0.0257669 13.096 0.0773006 14.8298C0.160736 16.5121 0.56319 18.0022 1.85399 19.2299C3.14479 20.4576 4.70061 20.8419 6.46258 20.9262C8.27853 21.0246 13.7215 21.0246 15.5374 20.9262C17.2994 20.8465 18.8601 20.4623 20.146 19.2299C21.4319 18.0022 21.8344 16.5121 21.9227 14.8298C22.0258 13.096 22.0258 7.90399 21.9227 6.1702ZM19.5767 16.6901C19.1939 17.6086 18.4528 18.3161 17.4859 18.6863C16.038 19.2346 12.6025 19.1081 11.0025 19.1081C9.40245 19.1081 5.96196 19.2299 4.51902 18.6863C3.55706 18.3208 2.81595 17.6132 2.42822 16.6901C1.85399 15.3078 1.9865 12.0276 1.9865 10.5C1.9865 8.97239 1.8589 5.68755 2.42822 4.30989C2.81104 3.39144 3.55215 2.68387 4.51902 2.31368C5.96687 1.76542 9.40245 1.89194 11.0025 1.89194C12.6025 1.89194 16.0429 1.77011 17.4859 2.31368C18.4479 2.67918 19.189 3.38676 19.5767 4.30989C20.1509 5.69223 20.0184 8.97239 20.0184 10.5C20.0184 12.0276 20.1509 15.3125 19.5767 16.6901Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="footer__copy">
          &#169; 2024 WebCraftery. All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;

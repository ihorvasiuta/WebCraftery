import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container_small">
        <div className="footer__about">
          <h4 className="footer_h4">About WebCraftery</h4>
          <p>
            WebCraftery provides high-quality, ready-to-use web components that
            empower developers to build beautiful, responsive websites
            efficiently.
          </p>
        </div>
        <div className="footer__links">
          <h4 className="footer_h4">Quick Links</h4>
          <ul>
            <li>
              <a className="footer_all_links" href="/elements">Elements</a>
            </li>
            <li>
              <a className="footer_all_links" href="/inspirations">Inspirations</a>
            </li>
            <li>
              <a className="footer_all_links" href="/usage">How It Works</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer_h4">Follow Us</h4>
          <a className="footer_all_links" href="https://twitter.com/webcraftery">Twitter</a>
          <a className="footer_all_links" href="https://facebook.com/webcraftery">Facebook</a>
          <a className="footer_all_links" href="https://instagram.com/webcraftery">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

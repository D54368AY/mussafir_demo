import React from "react";
// @ts-ignore - import side-effect CSS
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container" role="contentinfo" aria-label="Footer">
      {/* Background layer */}
      <div className="footer-bg" aria-hidden="true" />

      {/* Foreground content */}
      <div className="footer-content">
        {/* Footer logo */}
        <img
          src="/footer-logo.svg"
          alt="musafir.com — Powered by JETT"
          className="footer-logo"
          width={360}
          height={80}
          loading="eager"
        />
      </div>
    </footer>
  );
};

export default Footer;

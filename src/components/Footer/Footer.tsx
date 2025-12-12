import React from "react";
// @ts-ignore - import side-effect CSS
import "./footer.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container" role="contentinfo" aria-label="Footer">

      {/* CLOUD BACKGROUND */}
      <div className="footer-bg" aria-hidden="true" />

      {/* Figma gradient filter overlay */}
      <div className="footer-filter" aria-hidden="true" />

      {/* CONTENT */}
      <div className="footer-content">
        <Image
          src="/footer-logo.svg"
          alt="musafir.com — Powered by JETT"
          className="footer-logo"
          width={271}
          height={87}
          loading="eager"
        />
      </div>

    </footer>
  );
};

export default Footer;

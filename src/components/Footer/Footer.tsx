import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="
        relative w-full overflow-hidden bg-white 
        flex justify-center items-start pt-[28px]
        min-h-[220px]
        md:min-h-[200px] md:pt-[24px]
        sm:min-h-[180px] sm:pt-[18px]
      "
    >
      {/* CLOUD BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 z-[1]
          bg-[url('/cloud.svg')] 
          bg-no-repeat bg-bottom bg-cover
        "
      />

      {/* GRADIENT FILTER */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 z-[2]
          pointer-events-none
          bg-gradient-to-b
          from-[rgba(74,129,253,0.60)]
          to-[rgba(162,38,247,0.40)]
          mix-blend-color-burn
        "
      />

      {/* CONTENT */}
      <div
        className="relative z-[3] text-center w-full"
      >
        <Image
          src="/footer-logo.svg"
          alt="musafir.com — Powered by JETT"
          width={271}
          height={87}
          loading="eager"
          className="
            inline-block max-w-[90%] pointer-events-auto
            sm:w-[220px]
          "
        />
      </div>
    </footer>
  );
};

export default Footer;

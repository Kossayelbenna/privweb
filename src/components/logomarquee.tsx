import React from "react";
import Marquee from "./magicui/marquee";

function LogoMarquee() {
  return (
    <div className="max-w-screen overflow-x-clip ">
      <Marquee
        // pauseOnHover
        className="[--duration:20s] bg-white p-0 gap-10 transform rotate-3 scale-105"
      >
        <img
          src="/images/liste_logo/img1.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
        <img
          src="/images/liste_logo/img2.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
        <img
          src="/images/liste_logo/img3.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
        <img
          src="/images/liste_logo/img4.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
        <img
          src="/images/liste_logo/img5.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
        <img
          src="/images/liste_logo/img6.png"
          alt=""
          className="w-24 h-24 object-contain"
        />
      </Marquee>
    </div>
  );
}

export default LogoMarquee;

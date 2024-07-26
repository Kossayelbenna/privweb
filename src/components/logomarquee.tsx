import React from "react";
import dynamic from 'next/dynamic';

// Dynamic import for Marquee to prevent SSR issues
const Marquee = dynamic(() => import('./magicui/marquee'), { ssr: false });

function LogoMarquee() {
  return (
    <div className="relative max-w-screen overflow-x-clip py-1">
      {/* Title Section */}
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold">Upcoming Listings and Collaborations</h1>
      </div>

      {/* Marquee Section */}
      <div
        className="relative max-w-screen overflow-x-clip py-1"
        style={{
          background: "linear-gradient(0deg, rgba(228,228,228,0) 15%, rgba(255,255,255,0.9016398795846463) 25%, rgba(255,255,255,0.856821952413778) 50%, rgba(255,255,255,0.9968779748227415) 75%, rgba(203,200,200,0) 85%, rgba(255,255,255,0) 100%)"
        }}
      >
        <Marquee
          className="flex items-center relative"
          style={{ "--duration": "15s", "--pauseOnHover": "true" }}
        >
          <img
            src="/images/liste_logo/1.png"
            alt="Logo 1"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/2.png"
            alt="Logo 2"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/3.png"
            alt="Logo 3"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/4.png"
            alt="Logo 4"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/5.png"
            alt="Logo 5"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/6.png"
            alt="Logo 6"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/7.png"
            alt="Logo 7"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/8.png"
            alt="Logo 8"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/9.png"
            alt="Logo 9"
            className="w-40 h-40 object-contain mx-2.5"
          />
          <img
            src="/images/liste_logo/10.png"
            alt="Logo 10"
            className="w-40 h-40 object-contain mx-2.5"
          />
        </Marquee>
      </div>
    </div>
  );
}

export default LogoMarquee;

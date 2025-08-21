"use client";
import React, { useEffect, useState } from "react";

const ScrollIcon = () => {

  ///////////////////// Scroll Icon ///////////////////////////////////
  const [hideScrollIcon, setHideScrollIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollIcon(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`scroll-downs absolute bottom-[250px] left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
        hideScrollIcon ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  );
};

export default ScrollIcon;

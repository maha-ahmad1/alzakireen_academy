"use client";

import { useEffect } from "react";

export default function FooterCollapseHandler() {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
        content.style.padding = "0px 0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
        content.style.padding = "10px 0px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

  return null; // this component doesn't render anything
}

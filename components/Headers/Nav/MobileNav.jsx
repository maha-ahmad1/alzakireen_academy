"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNav() {
  const { pathname } = usePathname();


  const handleActive1 = (event) => {
    const dropdown = event.currentTarget.closest(".dropdown2.parent-menu-1");
    const allDropdowns = document.querySelectorAll(".dropdown2.parent-menu-1");
    if (dropdown) {
      const ulElement = dropdown.querySelector("ul");
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");

        if (ulElement) {
          ulElement.style.height = `0px`;
          ulElement.style.padding = "0px 20px";
        }
      } else {
        dropdown.classList.add("open");

        if (ulElement) {
          ulElement.style.height = `${ulElement.scrollHeight + 30}px`;
          ulElement.style.padding = "15px 20px";
        }
        allDropdowns.forEach((elm) => {
          if (elm !== dropdown) {
            elm.classList.remove("open");
            const ulElement2 = elm.querySelector("ul");
            if (ulElement2) {
              ulElement2.style.height = `0px`;
              ulElement2.style.padding = "0px 20px";
            }
          }
        });
      }
    }
  };
  useEffect(() => {
    document.body.classList.remove("mobile-menu-visible");
  }, [pathname]);

  return (
    <div className="menu-outer">
      <div
        className="navbar-collapse collapse clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">
          <li className={"" == pathname?.split("/")[1] ? "current" : ""}>
            <Link href={`/`}>Home</Link>

            <div className="dropdown2-btn" onClick={handleActive1} />
          </li>
          <li className={"about-us" == pathname?.split("/")[1] ? "current" : ""}>
            <Link href={"/about-us"}>About Us</Link>

            <div className="dropdown2-btn" onClick={handleActive1} />
          </li>
          <li className={"contact" == pathname?.split("/")[1] ? "current" : ""}>
            <Link href={`/contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

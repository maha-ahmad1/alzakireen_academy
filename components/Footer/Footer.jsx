import React from "react";
import Image from "next/image";
import { footerData } from "@/lib/data/footerLinks";
import Link from "next/link";
import EmailForm from "./EmailForm";
import FooterCollapseHandler from "./FooterCollapseHandler";

export default function Footer() {
  return (
    <footer id="footer" className="clearfix home">
      <FooterCollapseHandler />
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="box-footer-top flex-three">
                <div className="icon">
                  <Image
                    data-src="/images/Footer/book.png"
                    alt="images"
                    src="/images/Footer/book.png"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="content">
                  <h5 className="title"> Master Tajweed </h5>
                  <p> Expert Quran guidance</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="box-footer-top flex-three">
                <div className="icon">
                  <Image
                    data-src="/images/Footer/teacher.png"
                    alt="images"
                    src="/images/Footer/teacher.png"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Certified Teachers </h5>
                  <p> Trusted Quran mentors</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="box-footer-top flex-three">
                <div className="icon">
                  <Image
                    data-src="/images/Footer/student.png"
                    alt="images"
                    src="/images/Footer/student.png"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="content">
                  <h5 className="title"> Kids & Adults </h5>
                  <p> For all levels </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="box-footer-top flex-three">
                <div className="icon">
                  <Image
                    data-src="/images/Footer/global.png"
                    alt="images"
                    src="/images/Footer/global.png"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="content">
                  <h5 className="title"> Global Community</h5>
                  <p>25+ countries served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            {footerData.map((column, index) => (
              <div className="col-lg-3 col-sm-6 col-12" key={index}>
                <div className="widget widget-menu footer-col-block">
                  <div className="footer-heading-desktop">
                    <h4>{column.heading}</h4>
                  </div>
                  <div className="footer-heading-mobie ">
                    <h4>{column.heading}</h4>
                  </div>
                  <ul className="box-menu tf-collapse-content">
                    {column.menuItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.href.startsWith("http") ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <Link href={item.href} className="">
                            {item.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <EmailForm />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="logo-footer style box-1">
                <Link href={`/`}>
                  <Image
                    className="lazyload"
                    data-src="/images/logo/logo_2.png"
                    alt="img"
                    width={150}
                    height={40}
                    src="/images/logo/logo_2.png"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="footer-bottom-right flex-six flex-wrap">
                <div className="title-bottom center">
                  © 2025 Alzakereen. All rights reserved
                </div>
                <div className="icon-social box-3 text-color-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=61580314023211&amp%3Bmibextid=ZbWKwL"
                  >
                    <i className="icon-autodeal-facebook" />
                  </a>
                  {/* <a href="#">
                    <i className="icon-autodeal-linkedin" />
                  </a> */}
                  {/* <a href="#">
                    <i className="icon-autodeal-twitter" />
                  </a> */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/alzakireen6/"
                  >
                    <i className="icon-autodeal-instagram" />
                  </a>
                  {/* <a href="#">
                    <i className="icon-autodeal-youtube" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

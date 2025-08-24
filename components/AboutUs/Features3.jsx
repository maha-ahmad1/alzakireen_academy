import Image from "next/image";
import React from "react";

export default function Features3() {
  return (
    <section className="tf-section3 section-why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-wcs relative">
              <ul className="icon-list">
                <li className="tf-icon-list ani5">
                  <i className="icon-autodeal-check" />
                  <span className="fs-18 fw-6 lh-25 text-color-2">
                    Proven Expertise
                  </span>
                </li>
                <li className="tf-icon-list ani4">
                  <i className="icon-autodeal-check" />
                  <span className="fs-18 fw-6 lh-25 text-color-2">
                    1 million visits per day
                  </span>
                </li>
                <li className="tf-icon-list ani5">
                  <i className="icon-autodeal-check" />
                  <span className="fs-18 fw-6 lh-25 text-color-2">
                    7,800 course sellers
                  </span>
                </li>
              </ul>
              <div className="image-inner1 hover-img-wrap img-style-hover">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/images/section/wcu_1.png"
                  alt="images"
                  src="/images/section/wcu_1.png"
                  width={615}
                  height={890}
                />
              </div>
              <div className="image-inner2">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/images/section/wcu-2.png"
                  alt="images"
                  src="/images/section/wcu-2.png"
                  width={661}
                  height={307}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-wcs">
              <div className="heading-section">
                <h2
                  className="wow fadeInUpSmall"
                  data-wow-delay="0.2s"
                  data-wow-duration="1000ms"
                >
                  Why Choose Auto Decourse
                </h2>
                <p
                  className="mt-18 wow fadeInUpSmall"
                  data-wow-delay="0.2s"
                  data-wow-duration="1000ms"
                >
                  Our experienced team excels in course sales with many years of
                  successfully navigating the market, delivering informed
                  decisions and optimal results.
                </p>
              </div>
              <div className="tf-icon-box-list">
                <div
                  className="tf-icon-box style-2 wow fadeInUpSmall"
                  data-wow-delay="0.2s"
                  data-wow-duration="1000ms"
                >

                  <div className="content">
                    <h5>
                      <a href="#">New range rover, defender, discovery</a>
                    </h5>
                    <p>
                      Experience the joy of owning a brand new Range Rover,
                      Defender or Discovery today!
                    </p>
                  </div>
                </div>
                <div
                  className="tf-icon-box style-2 wow fadeInUpSmall"
                  data-wow-delay="0.3s"
                  data-wow-duration="1000ms"
                >

                  <div className="content">
                    <h5>
                      <a href="#">Pre-Owned vehicles</a>
                    </h5>
                    <p>
                      AutoDecourse has a great selection of pre-owned vehicles.
                    </p>
                  </div>
                </div>
                <div
                  className="tf-icon-box style-2 wow fadeInUpSmall"
                  data-wow-delay="0.4s"
                  data-wow-duration="1000ms"
                >

                  <div className="content">
                    <h5>
                      <a href="#">Certified pre-owned vehicles</a>
                    </h5>
                    <p>
                      AutoDecourse Demo has a great selection of certified
                      pre-owned vehicles.
                    </p>
                  </div>
                </div>
                <div
                  className="tf-icon-box style-2 wow fadeInUpSmall"
                  data-wow-delay="0.5s"
                  data-wow-duration="1000ms"
                >
                  <div className="content">
                    <h5>
                      <a href="#">Financing</a>
                    </h5>
                    <p>
                      Get approved today and drive off in a new or used vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

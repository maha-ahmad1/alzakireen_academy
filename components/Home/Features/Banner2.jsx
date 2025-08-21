import Image from "next/image";
import React from "react";

export default function Banner2() {
  return (
    <section className="tf-section-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tf-image-box style1 bg-orange flex-three">
              <div className="image">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/images/img-box/find-course-2.png"
                  alt="images"
                  src="/images/img-box/find-course-2.png"
                  width={315}
                  height={257}
                />
              </div>
              <div className="content">
                <h3 className="text-color-1">
                  <a href="#">Are you looking for a course?</a>
                </h3>
                <p className="text-color-1">
                  Save time and effort as you no longer need to visit multiple
                  stores to find the right course.
                </p>
                <a href="#" className="find-courses">
                  <span>Find courses</span>
                  <i className="icon-autodeal-search" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tf-image-box style1 bg-black flex-three">
              <div className="image">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/images/img-box/find-course-3.png"
                  alt="images"
                  src="/images/img-box/find-course-3.png"
                  width={315}
                  height={257}
                />
              </div>
              <div className="content">
                <h3 className="text-color-1">
                  <a href="#">Do you want to sell a course?</a>
                </h3>
                <p className="text-color-1">
                  Find your perfect course match and sell your course quickly with our
                  user-friendly online service.
                </p>
                <a href="#" className="find-courses">
                  <span>Find courses</span>
                  <i className="icon-autodeal-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

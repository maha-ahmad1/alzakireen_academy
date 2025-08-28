import Image from "next/image";
import React from "react";

export default function Teachers() {
  return (
    <section className="tf-section3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="tf-icon-box style-3 mg-42">
              <div className="inner-wrap flex-three">
                <div className="icon">
                  <Image
                    src="/images/icons/online-training7.png"
                    alt="Native Arabic-speaking Instructors"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Native Arabic-speaking Instructors</h3>
              </div>
              <div className="content">
                <p>
                  Learn from native Arabic-speaking instructors for a natural
                  and authentic learning experience.
                </p>
                <div className="meta style d-none">
                  <a href="#" className="sc-button btn-svg btn-55">
                    <span>Learn More</span>
                    <i className="icon-autodeal-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image">
              <Image
                className="lazyload w-full h-auto"
                data-src="images/img-box/find-course.png"
                alt="images"
                src="/images/img-box/find-course.png"
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="tf-icon-box style-3 mg-42">
              <div className="inner-wrap flex-three">
                <div className="icon">
                  <Image
                    src="/images/icons/teachers2.png"
                    alt="Qualified teachers"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>Qualified Male & Female Teachers</h3>
              </div>
              <div className="content">
                <p>
                  With years of expertise, our instructors deliver top-quality
                  lessons.
                </p>
                <div className="meta style d-none">
                  <a href="#" className="sc-button btn-svg btn-55">
                    <span>Learn More</span>
                    <i className="icon-autodeal-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

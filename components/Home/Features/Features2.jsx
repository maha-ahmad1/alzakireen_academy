import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function Features2() {
  return (
    <section className="tf-section3 section-feature-specs">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="image-feature-specs relative">
              <div
                className="image-inner1"
                style={{ maxWidth: "250px", opacity: 0.2 }}
              >
                <Image
                  className="lazyload"
                  data-src="/images/section/specs1.jpg"
                  alt="images"
                  src="/images/section/specs1.jpg"
                  width={599}
                  height={506}
                />
              </div>
              <div className="image-inner2">
                <Image
                  className="lazyload"
                  data-src="/images/section/specs2.png"
                  alt="images"
                  src="/images/section/specs2.png"
                  width={701}
                  height={361}
                />
              </div>
              <div className="box-specs small ani5" />
              <div className="box-specs large ani4" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="content-feature-specs">
              <div className="feature-specs-box">
                <div className="content">
                  <div className="text-address "></div>
                  <h3 className="title">
                    Fun lessons teaching kids letter sounds and pronunciation
                    step-by-step, guiding them to fluency and confidence.
                  </h3>
                  <br />
                  <br />
                  <br />
                  <div className="days-box flex justify-space align-center d-none">
                    <div className="img-author flex-three">
                      <div className="author">
                        <Image
                          className="ls-is-cached lazyloaded"
                          data-src="/images/author/avt2.jpg"
                          alt="image"
                          src="/images/author/avt2.jpg"
                          width={450}
                          height={450}
                        />
                      </div>
                      <div className="content-author">
                        <p>Agent</p>
                        <span className="font fs-18 text-color-2 fw-5">
                          Gihan Zarea
                        </span>
                      </div>
                    </div>
                    <Link href={`/listing-detail-v1/${1}`} className="view-course">
                      View course
                    </Link>
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

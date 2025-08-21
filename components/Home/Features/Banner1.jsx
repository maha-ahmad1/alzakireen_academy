"use client";
import Link from "next/link";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Banner1() {
  const swiperOptions = {
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".snbn3",
      prevEl: ".snbp3",
    },
  };

  return (
    <>
      <section className="tf-section-banner2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 relative">
              <Swiper
                {...swiperOptions}
                modules={[EffectFade, Navigation]}
                className="swiper review-course courseousel-3 overflow-hidden"
              >
                <div className="slider-item">
                  <div className="img-slider">
                    <img
                      className="lazyload"
                      alt={"mentainance"}
                      src={"/images/section/course-maintenance.jpg"}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div className="content justify-content-between align-items-center row gap-5">
                    <div className="heading col-md-6">
                      <h1 className="text-color-1">Learn with Ease from Home</h1>
                      <p className="text-color-1 font fw-4">
                        Become part of a growing community of families enjoying
                        Quran, Tajweed, Arabic, and Islamic studies from the
                        comfort of their homes, with guaranteed satisfaction.
                      </p>
                      <div className="btn-wrap">
                        <Link href="/enrollment" className="sc-button">
                          <span>Join Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1
                        className="text-color-1 position-relative my-5 mt-lg-0 text-lg-end text-center"
                        style={{ fontSize: "150px" }}
                      >
                        7/24
                      </h1>
                    </div>
                  </div>
                </div>
              </Swiper>
              <div className="swiper-button-next style-1 snbn3" />
              <div className="swiper-button-prev style-1 snbp3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

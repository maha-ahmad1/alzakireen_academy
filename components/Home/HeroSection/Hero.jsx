"use client";
import { slides4 } from "@/lib/data/heroSlides";
import React from "react";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaHome,
  FaGlobeAmericas,
  FaUserTie,
} from "react-icons/fa";
import "@/styles/component/_scrollIcon.scss";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import ScrollIcon from "./ScrollIcon";

export default function Hero() {
  const swiperOptions = {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".snbn13",
      prevEl: ".snbp13",
    },
  };

  const stats = [
    {
      icon: (
        <FaUserGraduate
          size={50}
          className="mb-2"
          style={{ color: "#fb7726" }}
        />
      ),
      end: 1500,
      label: "Students",
    },
    {
      icon: <FaHome size={50} className="mb-2" style={{ color: "#fb7726" }} />,
      end: 600,
      label: "Families",
    },
    {
      icon: (
        <FaGlobeAmericas
          size={50}
          className="mb-2"
          style={{ color: "#fb7726" }}
        />
      ),
      end: 25,
      label: "Countries",
    },
    {
      icon: (
        <FaUserTie size={50} className="mb-2" style={{ color: "#fb7726" }} />
      ),
      end: 50,
      label: "Teachers",
    },
  ];

  return (
    <div className="position-relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        {...swiperOptions}
        className="swiper mainslider slider home3"
      >
        {slides4.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slider-item">
              <div className="img-slider">
                <Image
                  className="img-item lazyload"
                  data-src={slide.imgSrc}
                  alt=""
                  src={slide.imgSrc}
                  width={3840}
                  height={1920}
                />
              </div>
              <div className="container2 relative">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="content flex justify-space ">
                      <div className="po-content">
                        <div className="heading my-auto mt-5">
                          <h1 className="text-color-1 fade-item fade-item-1">
                            {slide.title}
                          </h1>
                          <p className="text-color-1 font fade-item fade-item-2">
                            {slide.description}
                          </p>
                          <div className="reserve-wrap fade-item fade-item-3">
                            <Link
                              href={slide.reserveLink}
                              className="reserve text-color-1 fs-16 fw-5 font sc-button mt-3 mx-auto"
                            >
                              {slide.reserveText}
                            </Link>
                          </div>
                        </div>
                        <div className="pb-4"></div>
                        <div className="specifications-wrap style2 mt-5 d-flex flex-wrap justify-content-center gap-4">
                          {slide.specifications.map((spec, specIndex) => (
                            <div
                              key={specIndex}
                              className="specifications wow fadeInUp"
                              data-wow-delay={spec.delay}
                              data-wow-duration="1000ms"
                            >
                              <div>
                                <div className="flex justify-center mb-1">
                                  {stats[specIndex].icon}
                                </div>
                                <div className="text-3xl font-bold text-white text-center fw-bolder fs-2 mb-2">
                                  +
                                  <CountUp
                                    end={stats[specIndex].end}
                                    duration={2}
                                    separator=","
                                  />
                                </div>
                                <div className="text-white mt-1  text-center fs-16">
                                  {stats[specIndex].label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <ScrollIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next snbn13 d-none" />
        <div className="swiper-button-prev snbp13 d-none" />
      </Swiper>
    </div>
  );
}

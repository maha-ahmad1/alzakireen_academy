"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OurServices() {
  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 10000,
    loop: true,
    observer: true,
    observeParents: true,

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="tf-section" style={{ padding: "100px 0 40px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="tf-title text-center">
              <h2 className="title">Our Services</h2>
              <p className="content">Explore our wide range of services</p>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              {...swiperOptions}
              modules={[Autoplay, Pagination]}
              className="swiper Teacherousel-1 overflow-hidden"
              style={{ paddingBottom: "70px" }}
            >
              <SwiperSlide className="swiper-slide">
                <a className="partner-item style-2">
                  <div className="icon flex-five">
                    <Image src="/images/icons/quran.png" alt="Quran" width={60} height={60} />
                  </div>
                  <div className="content center">
                    <div className="fs-16 fw-6 title text-color-2 font-2">
                      Quran Memorization
                    </div>
                    <span className="sub-title fs-12 fw-4 font-2">271 Teacher</span>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a className="partner-item style-2">
                  <div className="icon flex-five">
                    <Image src="/images/icons/verses.png" alt="Tajweed-Recitation" width={60} height={60} />
                  </div>
                  <div className="content center">
                    <div className="fs-16 fw-6 title text-color-2 font-2">
                      Tajweed & Recitation
                    </div>
                    <span className="sub-title fs-12 fw-4 font-2">271 Teacher</span>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a className="partner-item style-2">
                  <div className="icon flex-five">
                    <Image src="/images/icons/dhad.png" alt="Arabic-Learning" width={60} height={60} />
                  </div>
                  <div className="content center">
                    <div className="fs-16 fw-6 title text-color-2 font-2">
                      Arabic Language Learning
                    </div>
                    <span className="sub-title fs-12 fw-4 font-2">271 Teacher</span>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a className="partner-item style-2">
                  <div className="icon flex-five">
                    <Image src="/images/icons/decoration.png" alt="Islamic-Studies" width={60} height={60} />
                  </div>
                  <div className="content center">
                    <div className="fs-16 fw-6 title text-color-2 font-2">
                      Islamic Studies
                    </div>
                    <span className="sub-title fs-12 fw-4 font-2">271 Teacher</span>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <a className="partner-item style-2">
                  <div className="icon flex-five">
                    <Image src="/images/icons/graduation-hat.png" alt="School-Support" width={60} height={60} />
                  </div>
                  <div className="content center">
                    <div className="fs-16 fw-6 title text-color-2 font-2">
                    Support school subjects in Arabic
                    </div>
                    <span className="sub-title fs-12 fw-4 font-2">271 Teacher</span>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

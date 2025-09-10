"use client";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Link from "next/link";
export default function ContactPage() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mg6tp77", "template_ow64mbi", formRef.current, {
        publicKey: "pLuce3mYE90-WPvxW",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();

          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <section className="flat-title mb-40">
        <div className="container2">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-inner style">
                <div className="title-group fs-12">
                  <Link className="home fw-6 text-color-3" href={`/`}>
                    Home
                  </Link>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="flat-property">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-heading flex-two flex-wrap">
                <h1 className="heading-listing">Contact us</h1>
                <div className="social-listing flex-six flex-wrap">
                  <p>Share this page:</p>
                  <div className="icon-social style1">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="tf-section-map">
        <div className="container-fluid">
          <div className="map">
            <iframe
              className="map-content"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33663489056!2d31.21726479293497!3d30.059556316659574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1746305614432!5m2!1sen!2seg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section> */}
      <section className="tf-section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 contact-left">
              <div className="heading-section mb-30">
                <h2>Drop Us a Line</h2>
                <p className="mt-12">
                  Feel free to connect with us through our online channels for
                  updates, news, and more.
                </p>
              </div>
              <div id="comments" className="comments">
                <div className="respond-comment">
                  <form
                    onSubmit={sendMail}
                    ref={formRef}
                    id="loan-calculator"
                    className="comment-form form-submit"
                    acceptCharset="utf-8"
                  >
                    <div className="grid-sw-2">
                      <fieldset className="email-wrap style-text">
                        <label className="font-1 fs-14 fw-5">Name</label>
                        <input
                          type="text"
                          className="tb-my-input"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </fieldset>
                      <fieldset className="phone-wrap style-text">
                        <label className="font-1 fs-14 fw-5">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="tb-my-input"
                          name="email"
                          placeholder="Your email"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="grid-sw-2">
                      <fieldset className="email-wrap style-text">
                        <label className="font-1 fs-14 fw-5">
                          Phone Numbers
                        </label>
                        <input
                          type="tel"
                          className="tb-my-input"
                          name="tel"
                          placeholder="Phone Numbers"
                          required
                        />
                      </fieldset>
                      <fieldset className="phone-wrap style-text">
                        <label className="font-1 fs-14 fw-5">Subject</label>
                        <input
                          type="text"
                          className="tb-my-input"
                          name="subject"
                          placeholder="Enter Keyword"
                          required
                        />
                      </fieldset>
                    </div>
                    <fieldset className="phone-wrap style-text">
                      <label className="font-1 fs-14 fw-5">Your Message</label>
                      <textarea
                        id="comment-message"
                        name="message"
                        rows={4}
                        tabIndex={4}
                        placeholder="Your message"
                        aria-required="true"
                        required
                        defaultValue={""}
                      />
                    </fieldset>
                    <div
                      className={`tfSubscribeMsg  footer-sub-element ${
                        showMessage ? "active" : ""
                      }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          Message has been sent successfully
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    <div className="button-boxs">
                      <button className="sc-button" name="submit" type="submit">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 contact-right">
              <div className="contact-info box-sd">
                <h2 className="mb-30">Contact Us</h2>
                <div className="wrap-info">
                  <div className="box-info">
                    <h5>Address</h5>
                    <p>New cairo, Egypt</p>
                  </div>
                  <div className="box-info">
                    <h5>Infomation:</h5>
                    <p>+0201013301062</p>
                    <p>alzakireenacademy@gmail.com</p>
                  </div>
                  <div className="box-info">
                    <h5>Opentime:</h5>
                    <p> 24 hr</p>
                  </div>
                  <div className="box-info">
                    <h5>Follow Us:</h5>
                    <div className="icon-social style2">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
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
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
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
    <div className="col-lg-3 col-sm-6 col-12">
      <div className="widget widget-menu widget-form footer-col-block">
        <div className="footer-heading-desktop">
          <h4>Newsletter</h4>
        </div>
        <div className="footer-heading-mobie">
          <h4>Newsletter</h4>
        </div>
        <div className="tf-collapse-content">
          <div
            className={`tfSubscribeMsg  footer-sub-element ${
              showMessage ? "active" : ""
            }`}
          >
            {success ? (
              <p style={{ color: "rgb(52, 168, 83)" }}>
                You have successfully subscribed.
              </p>
            ) : (
              <p style={{ color: "red" }}>Something went wrong</p>
            )}
          </div>
          <form
            onSubmit={sendMail}
            ref={formRef}
            className="comment-form form-submit"
            acceptCharset="utf-8"
          >
            <p className="font-2">
              Stay on top of the latest course trends, tips, and tricks for selling
              your course.
            </p>
            <div className="text-wrap clearfix">
              <fieldset className="email-wrap style-text">
                <input
                  type="email"
                  className="tb-my-input"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </fieldset>
            </div>
            <button
              name="submit"
              type="submit"
              className="button btn-submit-comment btn-1 btn-8"
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

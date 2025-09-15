import { toggleItems } from "@/lib/data/faqs";
import React from "react";
import Accordion from "./Accordions";

export default function Faqs() {
  return (
    <section className="tf-section3 flat-property">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-heading flex-two flex-wrap gap-20">
              <h1 className="heading-listing">Frequently Asked Questions</h1>
            </div>
          </div>
          <div className="col-lg-12 mb-50">
            <div className="flat-accordion" style={{ whiteSpace: "pre-line" }}>
              <Accordion faqData={toggleItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

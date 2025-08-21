import Banner3 from "@/components/AboutUs/Banner3";
import Features3 from "@/components/AboutUs/Features3";
import Testimonials2 from "@/components/AboutUs/Testimonials2";
import Link from "next/link";
import React from "react";

export default function AboutUsPage() {
  return (
    <>
      <Banner3 />
      <div className="mt-5 pt-5"></div>
      <Features3 />
      <Testimonials2 />
    </>
  );
}

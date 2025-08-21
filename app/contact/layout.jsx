import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Headers/Header2";
import React from "react";

export default function ContactLayout({ children }) {
  return (
    <>
      <div className="header-fixed">
        <Header2 />
      </div>
      {children}
      <Footer />
    </>
  );
}

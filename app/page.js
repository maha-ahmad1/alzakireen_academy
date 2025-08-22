import Features2 from "@/components/Home/Features/Features2";
import Footer from "@/components/Footer/Footer";
import Header1 from "@/components/Headers/Header1";
import Hero from "@/components/Home/HeroSection/Hero";
import OurServices from "@/components/Home/OurServices/OurServices";
import Teachers from "@/components/Home/Teachers/Teachers";
import EnrollmentForm from "@/components/Home/Enrollment/EnrollmentForm";
import Banner2 from "@/components/Home/Features/Banner2";
import Banner1 from "@/components/Home/Features/Banner1";
import InfoVideoBanner from "@/components/Home/Features/InfoVideoBanner";
import Agents from "@/components/Home/OurOrganization/Agents";
import Partners from "@/components/Home/OurOrganization/Partners";
import Testimonials from "@/components/Home/OurOrganization/Testimonials";
import Faqs from "@/components/Home/OurOrganization/FAQs/Faqs";
import Features1 from "@/components/Home/Features/Features1";

export default function Home() {
  return (
    <div className={""}>
      <div className="header-fixed">
        {/* <Header1 /> */}
      </div>
      {/* <Hero /> */}
      <OurServices />
      <Teachers />
      <Banner1 />
      <div className="mt-5 pt-5"></div>
      <Features1 />
      <div className="mt-5 pt-5"></div>
      <Features2 />
      <Banner2 />
      <div className="mt-5 pt-5"></div>
      <InfoVideoBanner/>
      <Agents/>
      <Testimonials/>
      <div className="mt-5 pt-5"></div>
      <Faqs/>
      <Partners/>
      <Footer />
    </div>
  );
}

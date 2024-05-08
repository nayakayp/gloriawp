import HeaderSection from "@/components/HeaderSection";
import FacilitySection from "@/components/FacilitySection";
import WeWorkFastSection from "@/components/WeWorkFastSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomeID() {
  return (
    <main className="bg-[#0C1F23]">
      <Head>
        <title>WPEnigma – Unlimited Wordpress Creation Service</title>
      </Head>
      <Navbar />
      <HeaderSection />
      {/* <PortfolioSection /> */}
      <FacilitySection />
      <WeWorkFastSection />
      <WorkWithUsSection />
      <PricingSection currency="id" />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <Footer />
    </main>
  );
}

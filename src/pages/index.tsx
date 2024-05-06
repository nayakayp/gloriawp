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

export default function Home() {
  return (
    <main className="bg-[#0C1F23]">
      <Head>
        <title>WPEnigma – Unlimited Wordpress Creation Service</title>
      </Head>
      <Navbar />
      <HeaderSection />
      <PortfolioSection />
      <FacilitySection />
      <WeWorkFastSection />
      <WorkWithUsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

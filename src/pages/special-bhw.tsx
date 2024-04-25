import HeaderSection from "@/components/HeaderSection";
import FacilitySection from "@/components/FacilitySection";
import WeWorkFastSection from "@/components/WeWorkFastSection";
import WorkWithUsSection from "@/components/bhw/WorkWithUsSection";
import PricingSection from "@/components/bhw/PricingSection";
import FaqSection from "@/components/bhw/FaqSection";
import Footer from "@/components/bhw/Footer";
import Head from "next/head";
import Announcement from "@/components/Announcement";

export default function SpecialBHW() {
  return (
    <main className="bg-[#0C1F23]">
      <Head>
        <title>WPEnigma – Unlimited Wordpress Creation Service</title>
      </Head>
      <Announcement />
      <HeaderSection />
      <FacilitySection />
      <WeWorkFastSection />
      <WorkWithUsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

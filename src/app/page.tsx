import { Hero } from "@/components";
import { ApplySteps } from "@/components/ApplySteps";
import OffersSection from "@/components/Offers/OffersSection";
import WhyUs from "@/components/WhyUs/WhyUs";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <OffersSection />
      <ApplySteps />
      <WhyUs />

    <Footer />
    </div>
  );
}

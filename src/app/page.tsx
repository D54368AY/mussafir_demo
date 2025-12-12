import { Hero } from "@/components";
import { ApplySteps } from "@/components/ApplySteps";

import TestimonialsAndFaq from "@/components/TestimonialsAndFaq";
import OffersSection from "@/components/Offers/OffersSection";
import { TopDestinations } from "@/components/TopDestinations";
import { destinations } from "@/components/TopDestinations/data";
import WhyUs from "@/components/WhyUs/WhyUs";
import Footer from "@/components/Footer/Footer";
import React from "react";
 
export default function Home() {
  return (
    <div>
      <Hero />
      <TopDestinations destinations={destinations}/>
      
      <OffersSection />
      <WhyUs />
      <ApplySteps />
      
      <TestimonialsAndFaq />
      
      
      

    <Footer />
    </div>
  );
}
 
 
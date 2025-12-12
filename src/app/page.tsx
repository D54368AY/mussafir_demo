import { Hero } from "@/components";
import { ApplySteps } from "@/components/ApplySteps";
import WhyUs from "@/components/WhyUs/WhyUs";
import TestimonialsAndFaq from "@/components/TestimonialsAndFaq";
import React from "react";
 
export default function Home() {
  return (
    <div>
      <Hero />
      
      <ApplySteps />
      <WhyUs />
      <TestimonialsAndFaq />
    </div>
  );
}
 
 
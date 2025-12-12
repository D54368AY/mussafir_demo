"use client";

import { Testimonials, Faq } from "@/components";

const testimonialsData = [
  {
    id: "1",
    quote:
      "Musafir is the best visa app I have be ever used. Really user friendly and clean UI",
    author: "Abin Mathew",
    rating: 4,
  },
  {
    id: "2",
    quote: "Excellent service and quick processing. Highly recommended!",
    author: "Sarah Johnson",
    rating: 5,
  },
  {
    id: "3",
    quote: "Great experience from start to finish. Very professional.",
    author: "Michael Chen",
    rating: 4,
  },
];

const faqItems = [
  { id: "q1", question: "How do I know which visa I need?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { id: "q2", question: "How long does it take to get a visa?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { id: "q3", question: "What documents do I need?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { id: "q4", question: "Is my information secure?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { id: "q5", question: "Can I track my application?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
  { id: "q6", question: "Do you offer customer support?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
];

export default function TestimonialsAndFaq() {
  return (
    <>
      <Testimonials testimonials={testimonialsData} title="Testimonials" columns={3} />
      <Faq items={faqItems} />
    </>
  );
}

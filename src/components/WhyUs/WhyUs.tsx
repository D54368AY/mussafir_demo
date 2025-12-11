import { WhyUsItem } from "./WhyUs.types";
import WhyUsCard from "./WhyUsCard";

const whyUsData: WhyUsItem[] = [
  {
    icon: "/one-click.svg",
    title: "One-Click Discovery",
    desc: "Instantly see which visas you qualify for by destination and nationality.",
  },
  {
    icon: "/fast-reliable.svg",
    title: "Fast Reliable Processing",
    desc: "Instantly see which visas you qualify for by destination and nationality.",
  },
  {
    icon: "/digital-journey.svg",
    title: "Digital Journey",
    desc: "From search to payment to visa delivery, everything happens online",
  },
  {
    icon: "/clear-pricing.svg",
    title: "Clear Pricing, No Surprises",
    desc: "Upfront fees with full transparency, no hidden costs",
  },
];

const WhyUs = () => {
  return (
    <section className="w-full py-20 px-4 bg-[#FFFFFF]">
      <div className="max-w-7xl  mx-auto">
        <h2 className="text-[32px] text-[#003669] font-bold mb-10">
          Why choose musafir?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUsData.map((item: WhyUsItem, idx: number) => (
            <WhyUsCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

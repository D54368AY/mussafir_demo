import Card from "./Card";

const steps = [
  {
    icon: "./check-eligible.svg",
    title: "Check eligibility",
    desc: "Enter your destination or search by nationality to see available visas",
  },
  {
    icon: "./choose-visa.svg",
    title: "Choose your visa type",
    desc: "Pick the duration and entry type that matches your trip.",
  },
  {
    icon: "./complete-app.svg",
    title: "Complete application",
    desc: "Fill in details, upload documents and make payment.",
  },
  {
    icon: "./receive.svg",
    title: "Receive updates",
    desc: "Track status in real time and get your visa by email.",
  },
];

export const ApplySteps = () => {
  return (
    <section className="w-full bg-[#eaf1ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#132550] mb-12">
          How to apply
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {steps.map((step, idx) => (
            <Card step={step} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

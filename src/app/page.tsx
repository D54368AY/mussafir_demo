import { Card } from "@/components";
import { ApplySteps } from "@/components/ApplySteps";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      {/* <div className="flex  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        default landing page
        <Card>Children for Card</Card>
      </div> */}
      <ApplySteps />
      <WhyUs />
    </>
  );
}

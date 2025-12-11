import Image from "next/image";
import { CardProps } from "./ApplySteps.types";

const Card = ({ step }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4 border border-transparent hover:border-blue-200 transition-all duration-200 ">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
        <Image
          src={step.icon}
          alt={step.title}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>

      <h3 className="text-lg font-semibold text-[#132550]">{step.title}</h3>

      <p className="text-sm text-[#003669] leading-relaxed">{step.desc}</p>
    </div>
  );
};

export default Card;

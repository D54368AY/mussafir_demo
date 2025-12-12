import Image from "next/image";
import { WhyUsProps } from "./WhyUs.types";

const WhyUsCard = ({ item }: WhyUsProps) => {
  return (
    <div className="bg-white border rounded-2xl p-8 flex gap-6 items-start shadow-sm hover:shadow-md transition-all duration-200">
      {/* Icon Circle */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 border border-[#F2F2F8]">
        <Image
          src={item.icon}
          alt={item.title}
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-[#132550] mb-1 text-lg-[20px]">
          {item.title}
        </h3>
        <p className="text-[#003669] text-sm leading-relaxed text-[16px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;

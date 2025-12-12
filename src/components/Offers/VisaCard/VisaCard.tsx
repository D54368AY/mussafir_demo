import { VisaCardProps } from "./VisaCard.types";

export default function VisaCard({ image, country, price, time }: VisaCardProps) {
    return (
        <div className="w-[200px] h-[250px] rounded-[18px] overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
            <img
                src={image}
                alt={country}
                className="w-full h-40 object-cover"
            />

            <div className="p-3">
                <h3 className="text-[18px] font-semibold">{country}</h3>

                {price && (
                    <p className="text-[#1e90ff] mt-1 text-[14px]">
                        {price}
                    </p>
                )}

                {time && (
                    <p className="text-[#6f6f6f] text-[12px] mt-1">
                        {time}
                    </p>
                )}
            </div>
        </div>
    );
}

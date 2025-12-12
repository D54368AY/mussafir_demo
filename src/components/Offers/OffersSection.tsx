import SectionTitle from "./SectionTitle/SectionTitle";
import NationalitySelect from "./NationalitySelect/NationalitySelect";
import Carousel from "./Carousel/Carousel";
import VisaCard from "./VisaCard/VisaCard";
import BannerCarousel from "./BannerCarousel/BannerCarousel";

export default function OffersSection() {
    return (
        <div className="w-full px-5 py-5">

            {/* Offers Heading */}
            <h2 className="text-[24px] font-bold mb-3.5">Offers</h2>

            <BannerCarousel
                images={[
                    "/Rectangle 22514.png",
                    "/Rectangle 22514.png",
                    "/Rectangle 22514.png"
                ]}
            />

            <SectionTitle
                title="Find your visa"
                subtitle="based on your nationality"
            />

            <NationalitySelect />

            {/* ARC BACKGROUND */}
            <div
                className="
        w-full mt-10 pt-[140px] pb-20 relative overflow-hidden
        rounded-t-[100%]
        bg-[radial-gradient(circle_at_top_center,rgba(173,216,255,0.55)_0%,rgba(216,232,255,0.45)_45%,white_80%)]
    "
            >
                {/* GLOW EFFECT */}
                <div
                    className="
            absolute top-[-25px] left-1/2 -translate-x-1/2
            w-[85%] h-[60px]
            bg-[radial-gradient(circle,rgba(0,140,255,0.35),rgba(0,140,255,0)_70%)]
            blur-[20px]
        "
                />

                {/* <div
                    className="
            absolute top-[1%] left-1/2 -translate-x-1/2
            flex items-center gap-3 z-20
        "
                >
                    <button className="w-8 h-8 shadow rounded-full flex items-center justify-center">
                        <img src="/Polygon 3.svg" className="w-3" />
                    </button>

                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium shadow">
                        Asia
                    </button>

                    <button className="w-8 h-8 shadow rounded-full flex items-center justify-center">
                        <img src="/Polygon 1.svg" className="w-3" />
                    </button>
                </div> */}

                {/* Center Carousel */}
                <div className="max-w-[900px] mx-auto relative z-10">
                    <Carousel
                        items={[
                            <VisaCard key="id1" image="/india.png" country="India" />,
                            <VisaCard key="id2" image="/germany.jpg" country="Germany" price="Starts ₹2100" time="In 3 days" />,
                            <VisaCard key="id3" image="/usa.png" country="United kingdom" />,
                        ]}
                    />
                </div>
            </div>

            {/* View All */}
            <p className="text-center text-[#1e90ff] mt-3 cursor-pointer">
                View all
            </p>
        </div>
    );
}


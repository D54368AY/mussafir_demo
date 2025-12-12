import SectionTitle from "./SectionTitle/SectionTitle";
import NationalitySelect from "./NationalitySelect/NationalitySelect";
import Carousel from "./Carousel/Carousel";
import VisaCard from "./VisaCard/VisaCard";
import "./offers.css";
import BannerCarousel from "./BannerCarousel/BannerCarousel";

export default function OffersSection() {
    return (
        <div className="offers-wrapper">

            <h2 className="offers-heading">Offers</h2>

            <BannerCarousel images={[
                "/Rectangle 22514.png",
                "/Rectangle 22514.png",
                "/Rectangle 22514.png"
            ]} />
            <SectionTitle
                title="Find your visa"
                subtitle="based on your nationality"
            />

            <NationalitySelect />

            {/* <div className="offers-category">

                <button className="arrow-btn left-arrow">
                    <img src="/Polygon 3.svg" alt="left arrow" />
                </button>

                <button className="category-btn">Asia</button>

                <button className="arrow-btn right-arrow">
                    <img src="/Polygon 1.svg" alt="right arrow" />
                </button>

            </div> */}

            {/* ⭐ ARC BACKGROUND WRAPPER ADDED HERE ⭐ */}
            <div className="visa-section-bg">

                {/* ⭐ Center-align cards inside arc ⭐ */}
                <div className="visa-carousel-container">
                    <Carousel
                        items={[
                            <VisaCard key='id1' image="/india.png" country="India" />,
                            <VisaCard key='id2' image="/germany.jpg" country="Germany" price="Starts ₹2100" time="In 3 days" />,
                            <VisaCard key='id3' image="/usa.png" country="United kingdom" />,
                        ]}
                    />
                </div>
            </div>

            <p className="view-all">View all</p>
        </div>
    );
}

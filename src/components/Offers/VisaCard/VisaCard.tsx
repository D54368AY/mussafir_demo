import { VisaCardProps } from "./VisaCard.types";
import "./visaCard.css";

export default function VisaCard({ image, country, price, time }: VisaCardProps) {
    return (
        <div className="visa-card">
            <img src={image} alt={country} className="visa-thumb" />

            <div className="visa-content">
                <h3 className="visa-country">{country}</h3>
                {price && <p className="visa-price">{price}</p>}
                {time && <p className="visa-time">{time}</p>}
            </div>
        </div>
    );
}

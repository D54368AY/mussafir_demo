import "./nationality.css";

export default function NationalitySelect() {
    return (
        <div className="nationality-container">
            <select className="nationality-select">
                <option>🇮🇳 Indian</option>
                <option>🇺🇸 American</option>
                <option>🇬🇧 British</option>
            </select>
        </div>
    );
}

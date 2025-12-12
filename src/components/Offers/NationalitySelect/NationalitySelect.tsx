export default function NationalitySelect() {
    return (
        <div className="flex justify-center my-4">
            <select
                className="w-[220px] rounded-[10px] px-4 py-2.5 border border-gray-300"
            >
                <option>🇮🇳 Indian</option>
                <option>🇺🇸 American</option>
                <option>🇬🇧 British</option>
            </select>
        </div>
    );
}

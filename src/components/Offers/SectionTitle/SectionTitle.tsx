interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <div className="text-center mt-8 mb-2.5">
            <h2 className="text-[24px] font-bold">{title}</h2>

            {subtitle && (
                <p className="text-[14px] text-[#6f6f6f]">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

import Switch from "@/components/Switch";

export default function ExtraBed() {
    return (
        <div className="flex justify-between">
            <span className="flex">
                <img src="/icons/svg/double-bed.svg" alt="extra bed" className="md:w-[24px] w-[20px] md:h-[24px] h-[20px] mr-[6px]" />
                <span className="md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] font-semibold">Дополнительная односпальная кровать (+3 000 ₽) </span>
            </span>
            <Switch />
        </div>
    )
}
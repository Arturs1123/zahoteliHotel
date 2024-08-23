import Image from "next/image"

export default function HotelTypeItem({ thumb = '', label = '', selected = false, onSelect = () => { } }: { thumb?: string, label?: string, selected?: boolean, onSelect?: (label: string) => void }) {
    return (
        <div className={`${selected ? 'border border-accent' : ''} rounded-[16px] p-[24px] shadow-md cursor-pointer`} onClick={() => onSelect(label)}>
            <div className="lg:h-[200px] h-[245px] mb-[16px]">
                <img src={process.env.NEXT_PUBLIC_BACKEND_API_URL + thumb} alt={label} className="w-full h-full object-cover rounded-[8px]" />
            </div>
            <div className="flex justify-between items-center">
                <span className="text-h6">{label}</span>
                <Image src={selected ? '/icons/svg/Radio.svg' : '/icons/svg/RadioOff.svg'} alt='radio button' width={24} height={24} />
            </div>
        </div>
    )
}
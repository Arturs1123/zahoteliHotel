import { Rate } from "antd";

export default function HotelMainInfo({ thumb = "", hotelType = "", hotelTitle = "", address = "", description = "", star = 0 }: { thumb?: string, hotelType?: string, hotelTitle?: string, address?: string, description?: string, star?: number }) {
    return (
        <div className="flex md:flex-row flex-col border rounded-[12px] p-[4px]">
            <div className="md:w-[428px] md:h-[285px] h-[208px]">
                <img src={thumb} alt="thumb" className="w-full h-full object-fit md:rounded-bl-lg rounded-tl-lg md:rounded-tr-none rounded-tr-lg" />
            </div>
            <div className="p-[20px] bg-[#FFFFFF] grow">
                <div className="flex justify-between items-center md:mb-[17px] mb-[4px]">
                    <span className="flex items-center">
                        <span className="md:text-p2 text-p4 text-custom-gray mr-[8px]">{hotelType}</span>
                        <Rate count={star} value={star} disabled />
                    </span>
                    <span className="md:text-p2 text-p5 text-custom-gray">Отзывов пока нет</span>
                </div>
                <h4 className="md:text-h4 text-h6 md:mb-[8px] mb-[12px]">{hotelTitle}</h4>
                <div className="flex items-center md:mb-[16px] mb-[12px]">
                    <img src="/icons/svg/location.svg" alt="location" className="md:w-[24px] w-[20px] h-auto mr-[8px]" /><p className="md:text-p2 text-p5">{address}</p>
                </div>
                <h6 className="md:text-h6 text-btn md:mb-[8px] mb-[4px]">Описание</h6>
                <p className="md:text-p2 text-p5 text-custom-gray">Без описания</p>
            </div>
        </div>
    )
}
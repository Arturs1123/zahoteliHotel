import FullWidthBtn from "@/components/FullWidthBtn"
import { Rate } from "antd"
import Image from "next/image"

export default function HotelBookingItem({
    thumb = '',
    hotelType = '',
    star = 0,
    hotelName = '',
    from = '',
    to = '',
    address = '',
},) {
    return (
        <div>
            <div className="flex lg:flex-row flex-col p-[24px] bg-[#EEEEEE] rounded-xl lg:justify-between lg:items-start lg:mb-[24px] mb-[32px]">
                <div className="lg:flex ">
                    <img src={thumb} alt="hotel" className="rounded-xl lg:w-[158px] w-full lg:h-[118px] h-[200px] lg:mr-[16px] lg:mb-0 mb-[16px]" style={{ objectFit: 'cover' }} />
                    <div className="grow">
                        <div className="flex items-center lg:mb-[8px] mb-[4px]">
                            <span className="lg:text-p2 text-p4 text-custom-gray mr-[8px]">{hotelType}</span>
                            {star > 0 ? <Rate defaultValue={star} count={star} /> : null}
                        </div>
                        <h4 className="lg:text-h4 text-h6 mb-[16px] lg:h-[36px] lg:overflow-hidden">{hotelName}</h4>
                        <div className="flex items-center">
                            <img src="/icons/svg/location_black.svg" alt="location" className="lg:w-[32px] w-[20px] lg:h-[32px] h-[20px] mr-[6px]" />
                            <p className="text-p1 h-[32px] overflow-hidden">{address}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:order-last order-first lg:mb-0 mb-[16px] w-[191px] flex-none lg:h-[118px] lg:justify-between">
                    <div className="flex">
                        <span className="mr-[8px] text-p1">{from}</span>
                        <span className="mr-[8px] text-p1">-</span>
                        <span className="text-p1">{to}</span>
                    </div>
                    <div className="lg:block hidden">
                        <FullWidthBtn caption="Оставить отзыв" />
                    </div>
                </div>
                <div className="lg:hidden block mt-[16px]">
                    <FullWidthBtn caption="Оставить отзыв" />
                </div>
            </div>

        </div>
    )
}


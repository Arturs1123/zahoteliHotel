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
    programs: []
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
                        <h4 className="lg:text-h4 text-h6 mb-[16px]">{hotelName}</h4>
                        <div className="flex items-center">
                            <img src="/icons/svg/location_black.svg" alt="location" className="lg:w-[32px] w-[20px] lg:h-[32px] h-[20px] mr-[6px]" />
                            <p className="text-p1 h-[32px] overflow-hidden">{address}</p>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center lg:order-last order-first lg:mb-0 mb-[16px] w-[191px] flex-none">
                    <span className="mr-[8px] text-p1">{from}</span>
                    <span className="mr-[8px] text-p1">-</span>
                    <span className="text-p1">{to}</span>
                </div>
            </div>
            <div>
                <h3 className="md:text-h3 text-h4 mb-[24px]">Дополните свой отдых</h3>
                <div className="px-[16px] py-[8px] border-[3px] rounded-lg border lg:flex lg:justify-between middle:w-[827px] mb-[16px]">
                    <div className="flex lg:flex-row flex-col lg:grow">
                        <div className="flex w-[180px] text-p3 flex items-center lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} className="mr-[7px]" />
                            <span>6 марта</span>
                        </div>
                        <div className="mx-[12px] border-l w-[1px] lg:block hidden"></div>
                        <div className="flex text-p3 flex items-center grow lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/car black.svg" alt="car" width={24} height={24} className="mr-[7px]" />
                            <span className="text-[16px] leading-[24px] font-[700] grow">Трансфер из аэропорта до отеля</span>
                        </div>
                    </div>
                    <span className="text-[#3BA87E] bg-[#3BA87E1A] px-[6px] py-[2px] rounded-lg">Трансфер включен</span>
                </div>
                <div className="px-[16px] py-[8px] border-[3px] rounded-lg border lg:flex lg:justify-between middle:w-[827px] mb-[16px]">
                    <div className="flex lg:flex-row flex-col lg:grow">
                        <div className="flex lg:w-[180px] w-full text-p3 lg:mb-0 mb-[16px]">
                            <span className="flex grow">
                                <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} className="mr-[7px]" />
                                <span>7 марта, 20:00</span>
                            </span>
                            <Image src="/icons/svg/trash.svg" width={24} height={24} alt="trash" className="cursor-pointer lg:hidden block" />
                        </div>
                        <div className="mx-[12px] border-l w-[1px] lg:block hidden"></div>
                        <div className="flex text-p3 flex items-center grow lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/routing black.svg" alt="car" width={24} height={24} className="mr-[7px]" />
                            <span className="text-[16px] leading-[24px] font-[700] grow">Обзорная прогулка по вечернему Сочи: море огней</span>
                        </div>
                    </div>
                    <Image src="/icons/svg/trash.svg" width={24} height={24} alt="trash" className="cursor-pointer lg:block hidden" />
                </div>
                <div className="px-[16px] py-[8px] border-[3px] rounded-lg border lg:flex lg:justify-between middle:w-[827px] mb-[16px]">
                    <div className="flex lg:flex-row flex-col lg:grow">
                        <div className="flex lg:w-[180px] w-full text-p3 lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} className="mr-[7px]" />
                            <span>8 марта</span>
                        </div>
                        <div className="mx-[12px] border-l w-[1px] lg:block hidden"></div>
                        <div className="flex text-p3 flex items-center grow lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/routing.svg" alt="car" width={24} height={24} className="mr-[7px]" />
                            <span className="text-[16px] leading-[24px] font-[700] grow text-accent">Выбрать экскурсию</span>
                        </div>
                    </div>
                </div>
                <div className="px-[16px] py-[8px] border-[3px] rounded-lg border lg:flex lg:justify-between middle:w-[827px] mb-[16px]">
                    <div className="flex lg:flex-row flex-col lg:grow">
                        <div className="flex lg:w-[180px] w-full text-p3 lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} className="mr-[7px]" />
                            <span>9 марта</span>
                        </div>
                        <div className="mx-[12px] border-l w-[1px] lg:block hidden"></div>
                        <div className="flex text-p3 flex items-center grow lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/routing.svg" alt="car" width={24} height={24} className="mr-[7px]" />
                            <span className="text-[16px] leading-[24px] font-[700] grow text-accent">Выбрать экскурсию</span>
                        </div>
                    </div>
                </div>
                <div className="px-[16px] py-[8px] border-[3px] rounded-lg border lg:flex lg:justify-between middle:w-[827px] mb-[16px]">
                    <div className="flex lg:flex-row flex-col lg:grow">
                        <div className="flex w-[180px] text-p3 flex items-center lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} className="mr-[7px]" />
                            <span>10 марта</span>
                        </div>
                        <div className="mx-[12px] border-l w-[1px] lg:block hidden"></div>
                        <div className="flex text-p3 flex items-center grow lg:mb-0 mb-[16px]">
                            <Image src="/icons/svg/car black.svg" alt="car" width={24} height={24} className="mr-[7px]" />
                            <span className="text-[16px] leading-[24px] font-[700] grow">Трансфер из аэропорта до отеля</span>
                        </div>
                    </div>
                    <span className="text-[#3BA87E] bg-[#3BA87E1A] px-[6px] py-[2px] rounded-lg">Трансфер включен</span>
                </div>
            </div>
        </div>
    )
}
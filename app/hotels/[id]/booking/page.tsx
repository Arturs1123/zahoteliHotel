'use client'

import PrimaryInput from "@/components/PrimaryInput"
import GotoHotel from "./components/GotoHotel"
import { Input } from "antd"
import RatingBadge from "@/components/RatingBadge"
import { Rate } from "antd"
import FullWidthBtn from "@/components/FullWidthBtn"
import Image from "next/image"
import OutlineButton from "@/components/OutlineButton"

const hotelInfo = {
    houseType: 'Отель',
    star: 4,
    rating: { label: 'Отличный отель', number: 9.6 },
    hotelName: 'Гостевой дом в Тихой Гавани',
    commentAmount: 109,
    address: 'Сочи, посёлок городского типа Сириус, Континентальный проспект, 6, корп. 10',
    services: [
        { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
        { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
        { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
        { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
    ]
}
const { houseType, star, rating, hotelName, commentAmount, address, services } = hotelInfo
export default function Booking() {
    const { TextArea } = Input

    return (
        <div className="md:pt-[8px] pt-[16px] md:pb-[40px] pb-[32px] md:px-[120px] px-[16px]">
            <GotoHotel className="md:mt-0 mt-[8px] md:mb-[24px] mb-[16px]" />
            <h3 className="md:text-h3 text-h4 md:mb-[24px] mb-[20px]">Ваше бронирование</h3>
            <div className="middle:flex">
                <div className="grow middle:mr-[40px]">
                    <div className="bg-[#EEEEEE] p-[24px] rounded-xl">
                        <h5 className="text-h5 mb-[8px]">Введите данные покупателя</h5>
                        <p className="text-p5 mb-[16px]">Отправим ваучер и информацию о бронировании на вашу почту</p>
                        <div>
                            <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mb-[16px]">
                                <PrimaryInput placeholder="Имя" className="md:mb-0 mb-[16px]" />
                                <PrimaryInput placeholder="Фамилия" className="md:mb-0 mb-[16px]" />
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mb-[16px]">
                                <PrimaryInput placeholder="Почта" className="md:mb-0 mb-[16px]" />
                                <PrimaryInput placeholder="номер телефона" className="md:mb-0 mb-[16px]" />
                            </div>
                            <TextArea rows={4} placeholder="Комментарий к бронированию" className="h-[96px] p-[12px]" />
                        </div>
                    </div>
                    <div className="md:mt-[24px] mt-[20px] p-[24px] rounded-xl bg-[#EEEEEE] mb-[40px]">
                        <div className="lg:flex">
                            <img src="/thumbs/hotels/hotel_thumb1.jpeg" alt="hotel" className="lg:w-[120px] w-full lg:h-[90px] h-[200px] lg:mr-[16px] mr-0 rounded-lg" style={{ objectFit: 'cover' }} />
                            <div className="lg:grow lg:mt-0 mt-[16px]">
                                <div className="flex grow items-center justify-between">
                                    <div>
                                        <div className="flex">
                                            <span className="text-p4 text-custom-gray">{houseType}</span>&nbsp;
                                            {star > 0 ? <Rate defaultValue={star} count={star} /> : null}
                                        </div>
                                        <h5 className="text-h5 lg:h-auto h-[27px] overflow-hidden text-ellipsis">{hotelName}</h5>
                                    </div>
                                    <div className="flex flex-none items-center">
                                        <RatingBadge size="md" rating={rating.number} />
                                        <span className="ml-[8px] lg:block hidden">
                                            <h6 className="text-h6 mb-[4px]">{rating.label}</h6>
                                            <p className="text-p4 text-custom-gray">Рейтинг на основе {commentAmount} оценок</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex mt-[16px]">
                                    <img src="/icons/svg/location_black.svg" alt="location" className="w-[20px] h-[20px]" />
                                    <p className="text-p4 ml-[6px]">{address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mt-[24px] mt-[16px]">
                            <div className="bg-white rounded-xl p-[16px] md:mb-0 mb-[16px]">
                                <div className="flex items-center mb-[16px]">
                                    <img src="/icons/svg/calendar_accent.svg" alt="calendar" className="w-[24] h-[24] mr-[8px]" />
                                    <p className="text-btn">Даты проживания</p>
                                </div>
                                <div className="flex items-end">
                                    <div className="mr-[8px]">
                                        <p className="text-p3">6 марта, вс</p>
                                        <p className="text-p4 text-custom-gray">с 14:00</p>
                                    </div>
                                    <img src="/icons/svg/gang.svg" alt="gang" className="pb-[30px] mr-[8px]" />
                                    <div>
                                        <p className="text-p3">10 марта, пт</p>
                                        <p className="text-p4 text-custom-gray">до 12:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-[16px]">
                                <div className="flex items-center mb-[16px]">
                                    <img src="/icons/svg/profile-2user.svg" alt="users" className="w-[24] h-[24] mr-[8px]" />
                                    <p className="text-btn">Состав жильцов</p>
                                </div>
                                <p className="text-p3">2 взрослых, 1 ребенок</p>
                                <p className="text-p4 text-custom-gray">Размещение с животными не допускается</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-[16px] flex mt-[16px] justify-between">
                            <div className="md:mr-0 mr-[16px]">
                                <div className="flex flex-wrap items-center mb-[16px]">
                                    <img src="/icons/svg/hotel-please-clean 1.svg" alt="hotel" className="w-[24] h-[24] mr-[8px]" />
                                    <p className="text-btn">Номер</p>
                                </div>
                                <p className="text-p3 mb-[8px]">Номер повышенной комфортности • 20 м²</p>
                                <div className="flex md:flex-row flex-col md:items-center">
                                    <div className="flex md:flex-row flex-col md:items-center text-[#292D32] text-[14px] overflow-hidden">
                                        {services.map((service, i) => (
                                            <span key={i} className="flex mr-[12px] items-center flex-none md:mb-0 mb-[16px]">
                                                <img src={service.icon} alt="service icon" className="w-[20px] h-[20px] text-custom-gray" />
                                                <span className="ml-[6px] text-p4 text-custom-gray">{service.label}</span>
                                            </span>))}
                                    </div>
                                    <p className="text-accent grow text-p4">Ещё</p>
                                </div>
                            </div>
                            <img src="/thumbs/hotels/hotel_please.png" alt="thumb" className="w-[92px] h-[92px] rounded-lg md:ml-[16px]" />
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mt-[24px] mt-[16px]">
                            <div className="bg-white rounded-xl p-[16px]  md:mb-0 mb-[16px]">
                                <div className="flex items-center mb-[16px]">
                                    <img src="/icons/svg/double-bed-accent.svg" alt="bed" className="w-[24] h-[24] mr-[8px]" />
                                    <p className="text-btn">Кровати</p>
                                </div>
                                <p className="text-p3">1 односпальная, 2 двуспальные кровати</p>
                            </div>
                            <div className="bg-white rounded-xl p-[16px]">
                                <div className="flex items-center mb-[16px]">
                                    <img src="/icons/svg/apple-one 1.svg" alt="apple" className="w-[24] h-[24] mr-[8px]" />
                                    <p className="text-btn">Питание</p>
                                </div>
                                <p className="text-p3">Завтрак, обед и ужин</p>
                            </div>
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
                    <span className="text-accent flex flex-none w-[145px] items-center px-[20px] py-[10px] border border-accent rounded cursor-pointer mb-[16px]">
                        <span className="mr-[8px]">Добавить</span><Image src="/icons/svg/arrow-down-accent.svg" width={20} height={20} alt="arrow" />
                    </span>
                </div>

                <div className="middle:w-[333px] flex-none p-[24px] bg-[#EEEEEE] mb-[24px] rounded-xl h-full max-h-fit">
                    <p className="text-p3 text-custom-gray mb-[12px]">Бронь №12232112</p>
                    <p className="text-p3 mb-[26px] bg-[#3BA87E1A] text-[#3BA87E] rounded px-[6px] py-[2px] inline-block">Бесплатная отмена до 1 марта</p>
                    <div>
                        <h6 className="text-h6 mb-[12px]">Стоимость бронирования</h6>
                        <div className="flex justify-between mb-[12px]">
                            <span className="text-p3 text-custom-gray">За 6 ночей</span>
                            <span className="text-h6">85 000 ₽</span>
                        </div>
                        <div className="flex justify-between mb-[12px]">
                            <span className="text-p3 text-custom-gray">Предоплата</span>
                            <span className="text-[16px] leading-[24px] font-[800]">9 000 ₽ </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-p3 text-custom-gray">Оплата при заселении</span>
                            <span className="text-p3">76 000 ₽ </span>
                        </div>
                    </div>
                    <div className="mt-[24px]">
                        <h6 className="text-h6 mb-[12px]">Стоимость бронирования</h6>
                        <div className="flex justify-between">
                            <span className="text-p3 text-custom-gray">Предоплата</span>
                            <span className="text-[16px] leading-[24px] font-[800]">9 000 ₽ </span>
                        </div>
                    </div>
                    <div className="flex my-[24px]">
                        <PrimaryInput placeholder="Промокод" />
                        <span className="bg-[#B5B5B5] px-[12px] py-[10px] text-white rounded-lg ml-[8px]">Применить</span>
                    </div>
                    <div className="flex justify-between mb-[16px]">
                        <p className="text-[16px] leading-[24px] font-[500]">Итого к оплате</p>
                        <p className="text-h5">24 000 ₽ </p>
                    </div>
                    <FullWidthBtn caption="Перейти к оплате" />
                    <p className="mt-[12px] text-p5 text-custom-gray">
                        Нажимая «Перейти к оплате», вы соглашаетесь
                        с <span className="text-accent">пользовательским соглашением, </span>
                        и <span className="text-accent">условиями бронирования</span>
                    </p>
                </div>
            </div>
        </div >
    )
}
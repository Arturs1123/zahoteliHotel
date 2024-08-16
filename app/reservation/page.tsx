'use client'

import { Input } from "antd"
import { useEffect, useState } from "react"
import NavMenu from "../components/navmenu"
import { getBookingsUptoMyHotel } from "@/app/backend_apis";
import { formatDateInRussian, datePrettier, getNumberOfNights } from "@/helper/dateFormatter";

type reservationType = {
    booking_number: string
    createdDate: string
    status: string
    user: string
    resident: { amount: number, personType: string }[]
    checkIn: string
    checkOut: string
    price: {
        booking: {
            total: number
            prepay: number
        }
    }
    roomCategory: any
    buyerDetail: {
        name: string,
        surname: string,
        phonenumber: string,
        comments: string
    }
}
export default function ReservationPage() {
    const [reservations, setReservationData] = useState<reservationType[]>([])

    useEffect(() => {
        getBookingsUptoMyHotel()
            .then(res => {
                setReservationData(res.data)
            })
    }, [])

    return (
        <div className="px-[16px]">
            <div className="max-w-[1320px] mx-auto">
                <NavMenu />
                <div className="pt-[40px] md:pb-[80px] pb-[32px]">
                    <div className="md:flex items-center justify-between md:mb-[32px] mb-[20px]">
                        <h3 className="md:text-h3 text-h4 md:mb-0 mb-[16px]">Бронирования</h3>
                        <Input suffix={<img src="/icons/svg/search-normal.svg" />} placeholder="Поиск" className="p-[12px] md:w-[300px]" />
                    </div>
                    <div className="sm:block hidden mb-[32px] overflow-auto">
                        <table className="w-full bg-[#FFFFFF] ">
                            <thead>
                                <tr>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Бронирование</th>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Дата бронирования</th>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Гости</th>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Даты проживания</th>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Предоплата</th>
                                    <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Оплата при заселении</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reservations.map((reservation, i) => (
                                        <tr key={i}>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3 text-[#3C4EF2]">ID {reservation.booking_number}</p>
                                                <p className="text-p4 text-custom-gray">{reservation.roomCategory?.categoryName}</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{formatDateInRussian(reservation.createdDate, false, true, true)}</p>
                                                <p className={"text-p4" + (reservation.status == "confirmed" ? " text-green-600" : " text-red-600")}>{reservation.status}</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{`${reservation.buyerDetail?.name} ${reservation.buyerDetail?.surname}`}</p>
                                                <p className="text-p4 text-custom-gray">{reservation.resident.map(c => `${c.personType} ${c.amount}`).join(', ')}</p>
                                                <p></p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{datePrettier(reservation.checkIn)}-{datePrettier(reservation.checkOut)}</p>
                                                <p className="text-p4 text-custom-gray">{getNumberOfNights(reservation.checkIn, reservation.checkOut)} ночей</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{reservation.price.booking.prepay}₽</p>
                                                <p className="text-p4 text-custom-gray">Не оплачено</p>
                                            </td>
                                            <td>{reservation.price.booking.total- reservation.price.booking.prepay}₽</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="sm:hidden block">
                        {
                            reservations.map((reservation, i) => (
                                <div key={i} className="p-[16px] rounded-[16px] bg-[#FFFFFF] mb-[20px] shadow-sm">
                                    <div className="mb-[16px] flex justify-between">
                                        <span className="text-btn text-[#3C4EF2]">ID {reservation.booking_number}</span>
                                        <span className="text-btn text-custom-gray">roomCategoryId {reservation.roomCategory?.categoryName}</span>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Дата бронирования</p>
                                        <p className="text-p4 mb-[8px]">{reservation.createdDate}</p>
                                        <p className="text-p4 mb-[8px]">{reservation.status}</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Гости</p>
                                        <p className="text-p4 mb-[8px]">{reservation.user}</p>
                                        <p className="text-p4 mb-[8px]">{reservation.resident.map(c => c.personType + c.amount)}</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Даты проживания</p>
                                        <p className="text-p4 mb-[8px]">{reservation.checkIn}-{reservation.checkOut}</p>
                                        <p className="text-p4 mb-[8px]">{getNumberOfNights(reservation.checkIn, reservation.checkOut)} ночей</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Предоплата</p>
                                        <p className="text-p4 mb-[8px]">{reservation.price.booking.prepay}₽</p>
                                        <p className="text-p4 mb-[8px]">Не оплачено</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Оплата при заселении</p>
                                        <p className="text-p4 mb-[8px]">{reservation.price.booking.total - reservation.price.booking.prepay}₽</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
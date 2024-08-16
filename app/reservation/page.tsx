'use client'

import { Input } from "antd"
import { useState, useEffect } from "react"
import PendingStatus from "@/components/PendingStatus"
import NavMenu from "../components/navmenu"
import PendingInfo from "../information/components/pending-info"
import { getMyHotelData } from "@/app/backend_apis";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { HotelInfoType } from "../information/page"

export default function ReservationPage() {
    const [status, setStatus] = useState<'empty' | 'pending' | 'allowed'>('allowed')


    const router = useRouter()
    const [hotelData, setHotelData] = useState<HotelInfoType | null>(null)
    useEffect(() => {
        getMyHotelData()
            .then(res => {
                if (res.status === 'empty') {
                    toast.error('У вас нет отеля. Сначала вам нужно зарегистрировать свой отель.')
                    router.push('/register')
                    return
                } else if (res.status === 'pending') {
                    setStatus('pending')
                    setHotelData(res.hotel)
                } else if (res.status === 'allowed') {
                    setStatus('allowed')
                    setHotelData(res.hotel)
                }
            })
    }, [])
    const reservations = [
        {
            booking: {
                bookingID: 'ID 4738',
                roomCategory: 'SUPERIOR'
            },
            bookingDate: {
                date: '2024.12.12',
                status: 'Canceld'
            },
            guests: {
                name: 'Lerndo',
                person: '2 adults'
            },
            dateOfStay: {
                from: '12.08. 2024',
                to: '20.08.2024'
            },
            payment: {
                price: 9000,
                status: 'not paid'
            },
            paymentUponArrival: 76000
        },
        {
            booking: {
                bookingID: 'ID 4738',
                roomCategory: 'SUPERIOR'
            },
            bookingDate: {
                date: '2024.12.12',
                status: 'Canceld'
            },
            guests: {
                name: 'Lerndo',
                person: '2 adults'
            },
            dateOfStay: {
                from: '12.08. 2024',
                to: '20.08.2024'
            },
            payment: {
                price: 9000,
                status: 'not paid'
            },
            paymentUponArrival: 76000
        },
    ]
    return (
        <div className="px-[16px]">
            <div className="max-w-[1320px] mx-auto">
                {status === 'allowed' ? <div></div> : <div><PendingInfo /></div>}
                <NavMenu />
                {/* <PendingStatus /> */}
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
                                                <p className="text-p3">{reservation.booking.bookingID}</p>
                                                <p className="text-p4 text-custom-gray">{reservation.booking.roomCategory}</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{reservation.bookingDate.date}</p>
                                                <p className="text-p4 text-custom-gray">{reservation.bookingDate.status}</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{reservation.guests.name}</p>
                                                <p className="text-p4 text-custom-gray">{reservation.guests.person}</p>
                                                <p></p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{reservation.dateOfStay.from}-{reservation.dateOfStay.to}</p>
                                                <p className="text-p4 text-custom-gray">7 nights</p>
                                            </td>
                                            <td className="text-p3 p-[16px] h-[56px]">
                                                <p className="text-p3">{reservation.payment.price}₽</p>
                                                <p className="text-p4 text-custom-gray">{reservation.payment.status}</p>
                                            </td>
                                            <td>{reservation.paymentUponArrival}₽</td>
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
                                        <span className="text-btn">{reservation.booking.bookingID}</span>
                                        <span className="text-btn text-custom-gray">{reservation.booking.roomCategory}</span>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Дата бронирования</p>
                                        <p className="text-p4 mb-[8px]">{reservation.bookingDate.date}</p>
                                        <p className="text-p4 mb-[8px]">{reservation.bookingDate.status}</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Гости</p>
                                        <p className="text-p4 mb-[8px]">{reservation.guests.name}</p>
                                        <p className="text-p4 mb-[8px]">{reservation.guests.person}</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Даты проживания</p>
                                        <p className="text-p4 mb-[8px]">{reservation.dateOfStay.from}-{reservation.dateOfStay.to}</p>
                                        <p className="text-p4 mb-[8px]">7 nights</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Предоплата</p>
                                        <p className="text-p4 mb-[8px]">{reservation.payment.price}₽</p>
                                        <p className="text-p4 mb-[8px]">{reservation.payment.status}</p>
                                    </div>
                                    <div className="mb-[16px]">
                                        <p className="text-p3 text-custom-gray mb-[8px]">Оплата при заселении</p>
                                        <p className="text-p4 mb-[8px]">{reservation.paymentUponArrival}₽</p>
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
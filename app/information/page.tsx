'use client'

import { useEffect, useState } from "react"
import BookingInfo from "./components/booking-info"
import NavMenu from "./components/navmenu"
import PendingInfo from "./components/pending-info"
import { getHotelDetail } from "../backend_apis"
import HotelMainInfo from "./components/hotel-main-info"
import makeAddress, { AddressType } from "@/helper/makeAddress"
import ReaceptionReadMode from "./components/reception"

export type HotelInfoType = {
    address: {
        country: string
        region: string
        city: string
        house: string
        building: string
    }
    reception: {
        isAvailable: boolean
        isWholeDay: boolean
        from: string | null
        to: string | null
    }
    internet: {
        wifiInHotel: {
            available: boolean
            includedInThePrice: boolean
        }
        wifiInRoom: {
            available: boolean
            includedInThePrice: boolean
        }
    }
    transport: {
        parking: {
            available: boolean
            includedInThePrice: boolean
        }
        transfer: {
            available: boolean
            includedInThePrice: boolean
            price: number | null
        }
        services: string[]
    }
    forChildren: {
        possible: boolean
        services: string[]
    }
    _id: string
    hotelType: string
    thumbs: string[]
    hotelTitle: string
    star: number
    checkIn: string
    checkOut: string
    infrastructures: string[]
    services: string[]
    nutritions: string[]
    bars: string[]
    entertainmentsAndSports: string[]
    beautyAndHealth: string[]
    conferenceFacilities: string[]
    seaAndBeach: string[]
    petsAllowed: boolean
    accesibleEnvironments: string[]
    staffSays: string[]
    roomCategories: [
        {
            accommodation: {
                singleBeds: number
                doubleBeds: number
                additionalBeds: number
            },
            categoryName: string,
            size: number
            roomAmount: number
            adultAmount: number
            childrenAmount: number
            additionalPlaceAmount: number
            entertainments: string[]
            equipments: string[]
            bathroom: string[]
            photos: string[]
            _id: string
        }
    ]
    reviews: string[],
    applyStatus: string,
    capacity: string,
}

export default function Information() {
    const [hotelData, setHotelData] = useState<HotelInfoType | null>(null)

    useEffect(() => {
        getHotelDetail('66a7e26c6e6a667961b6c74d')
            .then(res => setHotelData(res))
    }, [])
    const isApplicationAllowed = false
    const address = makeAddress(hotelData?.address as AddressType)
    return (
        <div className="px-[16px]">
            <div className="max-w-[1320px] mx-auto ">
                {isApplicationAllowed ? <div><BookingInfo /></div> : <div><PendingInfo /></div>}
                <NavMenu />
                <div className="md:mt-[40px] mt-[32px] md:mb-[16px] mb-[20px]">
                    <HotelMainInfo thumb={hotelData?.thumbs[0]} hotelType={hotelData?.hotelType} hotelTitle={hotelData?.hotelTitle} address={address} description="" star={hotelData?.star} />
                </div>
                <div className="md:p-[32px] p-[24px] bg-[#FFFFFF] md:mb-[16px] mb-[20px]">
                    <div className="flex md:mb-[32px] mb-[24px] items-center">
                        <img src="/icons/svg/camera.svg" alt="camera" className="md:w-[36px] w-[28px] h-auto mr-[12px]" />
                        <h4 className="md:text-h4 text-h5">Фотографии</h4>&nbsp;
                        <span className="md:text-h4 text-h5 text-custom-gray">{hotelData?.thumbs.length}</span>
                    </div>
                    <div className="flex overflow-auto">
                        {hotelData?.thumbs.map((thumb, i) => <span key={i} className="relative block min-w-[227px] h-[136px]  mr-[16px]">
                            <img src={thumb} className="w-full h-full object-cover rounded-[8px]" />
                            {i === 0 ? <span className="px-[8px] py-[4px] bg-[#FFFFFF] rounded-[24px] absolute top-[8px] left-[8px]">Обложка</span> : null}
                        </span>)}
                    </div>
                </div>
                <ReaceptionReadMode data={hotelData?.reception} checkIn={hotelData?.checkIn} checkOut={hotelData?.checkOut} />
            </div>
        </div>
    )
}
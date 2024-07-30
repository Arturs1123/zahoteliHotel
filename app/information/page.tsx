'use client'

import { useEffect, useState } from "react"
import BookingInfo from "./components/booking-info"
import NavMenu from "../components/navmenu"
import PendingInfo from "./components/pending-info"
import { getHotelDetail } from "../backend_apis"
import HotelMainInfo from "./components/hotel-main-info"
import makeAddress, { AddressType } from "@/helper/makeAddress"
import ReaceptionReadMode from "./components/reception"
import CheckBoxList from "../register/components/CheckBoxList"
import { getAccessibleEnvironments, getAmentities, getBars, getBeautyAndHealth, getConferenceFacilities, getHotelStaffSays, getInfrastructures, getNutritions, getSeaAndBeachAllOptions, getServices, getSports } from "@/app/backend_apis";
import InternetReadMode from "./components/internet"
import TransportReadMode from "./components/transport"
import PetOptionReadMode from "./components/pet-options"
import ForChildrenReadMode from "./components/for-children"

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
    const [infrasturucturesAllOptions, setInfrastructuresAllOptions] = useState<string[]>([])
    const [servicesAllOptions, setServicesAllOptions] = useState<string[]>([])
    const [nutritionsAllOptions, setNutritionsAllOptions] = useState<string[]>([])
    const [barsAllOptions, setBarsAllOptions] = useState<string[]>([])
    const [sportsAllOptions, setSportsAllOptions] = useState<string[]>([])
    const [healthAllOptions, setHealthAllOptions] = useState<string[]>([])
    const [amentitiesAllOptions, setAmentitiesAllOptions] = useState<string[]>([])
    const [conferenceFacilitiesAllOptions, setConferenceFacilitiesAllOptions] = useState<string[]>([])
    const [seaAndBeachAllOptions, setSeaAndBeachAllOptions] = useState<string[]>([])
    const [staffSaysAllOptions, setStaffSaysAllOptions] = useState<string[]>([])
    const [accessibleEnvironmentsAllOptions, setAccessibleEnvironmentsAllOptions] = useState<string[]>([])
    const [hotelData, setHotelData] = useState<HotelInfoType | null>(null)

    useEffect(() => {
        getHotelDetail('66a7e26c6e6a667961b6c74d')
            .then(res => setHotelData(res))
    }, [])
    useEffect(() => {
        getInfrastructures()
            .then(res => {
                setInfrastructuresAllOptions(res.map((item: { label: string }) => item.label))
            })
        getHotelStaffSays()
            .then(res => {
                setStaffSaysAllOptions(res.map((item: { label: string }) => item.label))
            })
        getAccessibleEnvironments()
            .then(res => {
                setAccessibleEnvironmentsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getSeaAndBeachAllOptions()
            .then(res => {
                setSeaAndBeachAllOptions(res.map((item: { label: string }) => item.label))
            })
        getConferenceFacilities()
            .then(res => {
                setConferenceFacilitiesAllOptions(res.map((item: { label: string }) => item.label))
            })
        getAmentities()
            .then(res => {
                setAmentitiesAllOptions(res.map((item: { label: string }) => item.label))
            })
        getBeautyAndHealth()
            .then(res => {
                setHealthAllOptions(res.map((item: { label: string }) => item.label))
            })
        getSports()
            .then(res => {
                setSportsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getBars()
            .then(res => {
                setBarsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getNutritions()
            .then(res => {
                setNutritionsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getServices()
            .then(res => {
                setServicesAllOptions(res.map((item: { label: string }) => item.label))
            })
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
                <div className="md:mb-[16px] mb-[20px]">
                    <ReaceptionReadMode data={hotelData?.reception} checkIn={hotelData?.checkIn} checkOut={hotelData?.checkOut} />
                </div>
                <div className="md:mb-[16px] mb-[20px]">
                    <CheckBoxList disable icon="/icons/svg/HotelInfrastructure.svg" title="Инфраструктура отеля" data={infrasturucturesAllOptions} defaultValues={hotelData?.infrastructures} />
                </div>
                <div className="md:mb-[16px] mb-[20px]">
                    <CheckBoxList disable icon="/icons/svg/hotel-services.svg" title="Услуги в отеле" data={servicesAllOptions} defaultValues={hotelData?.services} />
                </div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/apple-one 1.svg" title="Питание" data={nutritionsAllOptions} defaultValues={hotelData?.nutritions} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/goblet-one 1.svg" title="Бар и ресторан" data={barsAllOptions} defaultValues={hotelData?.bars} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/game-handle 2.svg" title="Развлечения и спорт" data={sportsAllOptions} defaultValues={hotelData?.entertainmentsAndSports} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/Like32.svg" title="Красота и здоровье" data={healthAllOptions} defaultValues={hotelData?.beautyAndHealth} /></div>
                <div className="md:mb-[16px] mb-[20px]"><InternetReadMode data={hotelData?.internet} /></div>
                <div className="md:mb-[16px] mb-[20px]"><TransportReadMode data={hotelData?.transport} /></div>
                <div className="md:mb-[16px] mb-[20px]"><PetOptionReadMode petsAllowed={hotelData?.petsAllowed} /></div>
                <div className="md:mb-[16px] mb-[20px]"><ForChildrenReadMode data={hotelData?.forChildren} /></div>

                {/* <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/ammentities.svg" title="Удобства в номерах" data={amentitiesAllOptions} defaultValues={hotelData.am} /></div> */}
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/online-meeting 1.svg" title="Удобства в номерах" data={conferenceFacilitiesAllOptions} defaultValues={hotelData?.conferenceFacilities} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/SeaBlue.svg" title="Море и пляж" data={seaAndBeachAllOptions} defaultValues={hotelData?.seaAndBeach} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/wheelchair 1.svg" title="Доступная среда" data={accessibleEnvironmentsAllOptions} defaultValues={hotelData?.accesibleEnvironments} /></div>
                <div className="md:mb-[16px] mb-[20px]"><CheckBoxList disable icon="/icons/svg/people-speak 1.svg" title="Персонал говорит" data={staffSaysAllOptions} defaultValues={hotelData?.staffSays} /></div>
            </div>
        </div>
    )
}
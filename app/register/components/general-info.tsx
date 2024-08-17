'use client'
import StarSelector from './star-selector';
import type { Dayjs } from "dayjs"
import { useEffect, useState } from "react";
import Reception from "./reception";
import CheckBoxList from "./CheckBoxList";
import Internet from "./internet";
import Transport from "./transport";
import ForChildren from "./forChildren";
import PetOption from "./petOption";
import { getAccessibleEnvironments, getAmentities, getBars, getBeautyAndHealth, getConferenceFacilities, getHotelStaffSays, getInfrastructures, getNutritions, getSeaAndBeachAllOptions, getServices, getSports } from "@/app/backend_apis";
import FillButton from "@/components/FillButton";

export type GeneralDataType = {
    star: number,
    reception: {
        isAvailable: boolean,
        isWholeDay: boolean,
        from: string,
        to: string,
    },
    checkIn: string,
    checkOut: string,
    infrastructures: string[],
    services: string[],
    nutritions: string[],
    bars: string[],
    entertainmentsAndSports: string[],
    beautyAndHealth: string[],
    internet: {
        wifiInHotel: {
            available: boolean,
            includedInThePrice: boolean
        },
        wifiInRoom: {
            available: boolean,
            includedInThePrice: boolean
        }
    },
    transport: {
        parking: {
            available: boolean,
            includedInThePrice: boolean
        },
        transfer: {
            available: boolean,
            includedInThePrice: boolean,
            price: number
        }
    },
    conferenceFacilities: string[],
    seaAndBeach: string[],
    petsAllowed: boolean,
    forChildren: {
        possible: boolean,
        services: string[]
    },
    accesibleEnvironments: string[],
    staffSays: string[],
}

export default function GeneralInformation({ onNext = () => { } }: { onNext?: (obj: GeneralDataType) => void }) {

    const [star, setStar] = useState<number>(0)
    const [isAvailable, setIsAvabilable] = useState(false)
    const [isWholeDay, setIsWholeDay] = useState(false)
    const [from, setFrom] = useState<string>("12:00");
    const [to, setTo] = useState<string>("12:00");
    const [checkIn, setCheckIn] = useState<string>("12:00");
    const [checkOut, setCheckOut] = useState<string>("12:00");
    const [infrastructuresAllOptions, setInfrastructuresAllOptions] = useState<string[]>([])
    const [infrastructures, setInfrastructures] = useState<string[]>([])
    const [servicesAllOptions, setServicesAllOptions] = useState<string[]>([])
    const [services, setServices] = useState<string[]>([])
    const [nutritionsAllOptions, setNutritionsAllOptions] = useState<string[]>([])
    const [nutritions, setNutritions] = useState<string[]>([])
    const [barsAllOptions, setBarsAllOptions] = useState<string[]>([])
    const [bars, setBars] = useState<string[]>([])
    const [sportsAllOptions, setSportsAllOptions] = useState<string[]>([])
    const [entertainmentsAndSports, setSports] = useState<string[]>([])
    const [healthAllOptions, setHealthAllOptions] = useState<string[]>([])
    const [health, setHealth] = useState<string[]>([])
    const [amentitiesAllOptions, setAmentitiesAllOptions] = useState<string[]>([])
    const [amentities, setAmentities] = useState<string[]>([])
    const [conferenceFacilitiesAllOptions, setConferenceFacilitiesAllOptions] = useState<string[]>([])
    const [conferenceFacilities, setConferenceFacilities] = useState<string[]>([])
    const [seaAndBeachAllOptions, setSeaAndBeachAllOptions] = useState<string[]>([])
    const [seaAndBeach, setSeaAndBeach] = useState<string[]>([])
    const [staffSays, setStaffSays] = useState<string[]>([])
    const [isAvailableInHotel, setIsAvabilableInHotel] = useState(false)
    const [isAvailableInRoom, setIsAvabilableInRoom] = useState(false)
    const [isHotelWifiIncludedInPrice, setIsHotelWifiIncludedInPrice] = useState(false)
    const [isRoomWifiIncludedInPrice, setIsRoomWifiIncludedInPrice] = useState(false)
    const [wifiPrice, setWifiPrice] = useState('')
    const [canTransport, setCanTransport] = useState(false)
    const [canPark, setCanPark] = useState(false)
    const [parkFeeIncludedInPrice, setParkFeeIncludedInPrice] = useState(false)
    const [transportFeeIncludedInPrice, setTransportFeeIncludedInPrice] = useState(false)
    const [transportPrice, setTransportPrice] = useState(0)
    const [transportOptions, setTransportOptions] = useState<string[]>([])
    const [childrenAllowed, setChildrenAllowed] = useState<boolean>(false)
    const [childrenOptions, setChildrenOptions] = useState<string[]>([])
    const [petsAllowed, setPetAllowed] = useState<boolean>(false)
    const [staffSaysAllOptions, setStaffSaysAllOptions] = useState<string[]>([])
    const [accesibleEnvironments, setAccessibleEnvironments] = useState<string[]>([])
    const [accessibleEnvironmentsAllOptions, setAccessibleEnvironmentsAllOptions] = useState<string[]>([])

    const handleReceptionChange = ({ isAvailable, isWholeDay, from, to, checkIn, checkOut }: { isAvailable: boolean, isWholeDay: boolean, from: string, to: string, checkIn: string, checkOut: string }) => {
        setIsAvabilable(isAvailable)
        setIsWholeDay(isWholeDay)
        setFrom(from)
        setTo(to)
        setCheckIn(checkIn)
        setCheckOut(checkOut)
    }

    const handleInternetChange = ({ isAvailableInHotel, isAvailableInRoom, isHotelWifiIncludedInPrice, isRoomWifiIncludedInPrice, wifiPrice }: { isAvailableInHotel: boolean, isAvailableInRoom: boolean, isHotelWifiIncludedInPrice: boolean, isRoomWifiIncludedInPrice: boolean, wifiPrice: string }) => {
        setIsAvabilableInHotel(isAvailableInHotel)
        setIsAvabilableInRoom(isAvailableInRoom)
        setIsHotelWifiIncludedInPrice(isHotelWifiIncludedInPrice)
        setIsRoomWifiIncludedInPrice(isRoomWifiIncludedInPrice)
        setWifiPrice(wifiPrice)
    }

    const handleTransportChange = ({ canTransport, canPark, parkFeeIncludedInPrice, transportFeeIncludedInPrice, transportPrice }: { canTransport: boolean, canPark: boolean, parkFeeIncludedInPrice: boolean, transportFeeIncludedInPrice: boolean, transportPrice: number, transportOptions: string[] }) => {
        setCanPark(canPark)
        setCanTransport(canTransport)
        setParkFeeIncludedInPrice(parkFeeIncludedInPrice)
        setTransportFeeIncludedInPrice(transportFeeIncludedInPrice)
        setTransportPrice(transportPrice)
        setTransportOptions(transportOptions)
    }

    const handleForChildrenChange = ({ childrenAllowed, childrenOptions }: { childrenAllowed: boolean, childrenOptions: string[] }) => {
        setChildrenAllowed(childrenAllowed)
        setChildrenOptions(childrenOptions)
    }

    const handlePetOptionChange = (allowed: boolean) => {
        setPetAllowed(allowed)
    }



    const handleNextClick = () => {
        const generalData = {
            star,
            reception: {
                isAvailable,
                isWholeDay,
                from,
                to,
            },
            checkIn,
            checkOut,
            infrastructures,
            services,
            nutritions,
            bars,
            entertainmentsAndSports,
            beautyAndHealth: health,
            internet: {
                wifiInHotel: {
                    available: isAvailableInHotel,
                    includedInThePrice: isHotelWifiIncludedInPrice
                },
                wifiInRoom: {
                    available: isAvailableInRoom,
                    includedInThePrice: isRoomWifiIncludedInPrice
                }
            },
            transport: {
                parking: {
                    available: canPark,
                    includedInThePrice: parkFeeIncludedInPrice
                },
                transfer: {
                    available: canTransport,
                    includedInThePrice: transportFeeIncludedInPrice,
                    price: transportPrice
                }
            },
            conferenceFacilities,
            seaAndBeach,
            petsAllowed,
            forChildren: {
                possible: childrenAllowed,
                services: childrenOptions
            },
            accesibleEnvironments,
            staffSays,
        }
        onNext(generalData)
    }

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

    return (
        <div className="">
            <p className="md:text-h3 text-h4 md:mb-[32px] mb-[20px]">Общая информация</p>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Reception onChange={handleReceptionChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/HotelInfrastructure.svg" title="Инфраструктура отеля" data={infrastructuresAllOptions} onCheckBoxListChange={setInfrastructures} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/hotel-services.svg" title="Услуги в отеле" data={servicesAllOptions} onCheckBoxListChange={setServices} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/apple-one 1.svg" title="Питание" data={nutritionsAllOptions} onCheckBoxListChange={setNutritions} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/goblet-one 1.svg" title="Бар и ресторан" data={barsAllOptions} onCheckBoxListChange={setBars} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/game-handle 2.svg" title="Развлечения и спорт" data={sportsAllOptions} onCheckBoxListChange={setSports} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/Like32.svg" title="Красота и здоровье" data={healthAllOptions} onCheckBoxListChange={setHealth} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Internet onChange={handleInternetChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Transport onChange={handleTransportChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><PetOption onChange={handlePetOptionChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><ForChildren onChange={handleForChildrenChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/ammentities.svg" title="Удобства в номерах" data={amentitiesAllOptions} onCheckBoxListChange={setAmentities} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/online-meeting 1.svg" title="Удобства в номерах" data={conferenceFacilitiesAllOptions} onCheckBoxListChange={setConferenceFacilities} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/SeaBlue.svg" title="Море и пляж" data={seaAndBeachAllOptions} onCheckBoxListChange={setSeaAndBeach} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/wheelchair 1.svg" title="Доступная среда" data={accessibleEnvironmentsAllOptions} onCheckBoxListChange={setAccessibleEnvironments} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/people-speak 1.svg" title="Персонал говорит" data={staffSaysAllOptions} onCheckBoxListChange={setStaffSays} /></div>
            <div className="flex justify-center">
                <FillButton caption="Добавить фотографии" withArrow onBtnClick={handleNextClick} />
            </div>
        </div>

    )
}


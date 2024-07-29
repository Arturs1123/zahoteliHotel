'use client'
import CollapseContainer, { CollapseTitle } from "@/components/CollapseContainer";
import CustomSwitch from "@/components/CustomSwitch";
import { AppleOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import type { CollapseProps } from 'antd';
import { Card, Radio, Input, Button, Collapse, Checkbox, Switch } from "antd"
import type { RadioChangeEvent } from 'antd';
import StarSelector from './star-selector';
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

import { useEffect, useState } from "react";
import Reception from "./reception";
import CheckBoxList from "./CheckBoxList";
import Internet from "./internet";
import Transport from "./transport";
import ForChildren from "./forChildren";
import PetOption from "./petOption";
import { getAccessibleEnvironments, getHotelStaffSays, getSeaAndBeachAllOptions } from "@/app/backend_apis";

const text = `
 Подключение самозанятых возможно при регистрации напрямую в Экстранете, а также через менеджеры каналов: Контур.Отель, Агаст (OtelMS), Бронируй Онлайн, BookingLite, Ecvi (Эделинк), Shelter, Trip Advance, U hotels, WuBook.
`;
export default function GeneralInformation() {
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const HotelInfrastructureData = [
        "Банкомат", "Bicycles for rent", "Вертолетная площадка", "SPA center", "Водные виды спорта", "Helipad", "Горные лыжи", "Aquapark", "Каток",
        "Лес рядом", "Water sports", "Бильярдный клуб", "Theater", "Парк аттракционов"
    ]

    const ForChildrenData = [
        {
            "value": "Playground",
            "text": "Детская площадка",
        }, {
            "value": "High chair for child",
            "text": "Высокий стул для ребенка",
        }, {
            "value": "Children's potty",
            "text": "Детский горшок",
        }, {
            "value": "Protective covers on sockets",
            "text": "Защитные крышки на розетках",
        }, {
            "value": "Playpen bed",
            "text": "Кровать-манеж",
        }, {
            "value": "Chair for babies",
            "text": "Стульчик для кормления",
        }, {
            "value": "Cot",
            "text": "Детская кроватка",
        }, {
            "value": "Window protection",
            "text": "Защита на окнах",
        }, {
            "value": "Games/toys for children",
            "text": "Игры/игрушки для детей",
        }, {
            "value": "Changing table",
            "text": "Пеленальный стол",
        },

    ]

    //     {
    //         key: '6',
    //         label: <div><img src="/icons/svg/LC_Hotel/Pet.svg" className="inline w-6 md:w-8" /> Питомцы</div>,
    //         children:
    //             <div>
    //                 <span>Можно с питомцами</span>
    //                 <Switch />
    //             </div>
    //     },
    //     // Hotel infrastructure
    //     {
    //         key: '7',
    //         label: <div><img src="/icons/svg/LC_Hotel/ForChildren.svg" className="inline w-6 md:w-8" /> Детям</div>,
    //         children:
    //             <div>
    //                 <div>
    //                     <span>Можно с питомцами</span>
    //                     <Switch />
    //                 </div>
    //                 <div className="grid lg:grid-cols-3">
    //                     {HotelInfrastructureData.map((c, i) =>
    //                         <div key={i} className="no-reception">
    //                             <Checkbox />
    //                             <span className="ml-2 text-base">{c.text}</span>
    //                         </div>
    //                     )}
    //                 </div>
    //             </div>
    //     }
    // ];

    const [star, setStar] = useState(0)
    const [isAvailable, setIsAvabilable] = useState(false)
    const [isWholeDay, setIsWholeDay] = useState(false)
    const [from, setFrom] = useState<Dayjs | null>(null);
    const [to, setTo] = useState<Dayjs | null>(null);
    const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
    const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
    const [infrastuructures, setInfrastructures] = useState<string[]>([])
    const [services, setServices] = useState<string[]>([])
    const [nutririons, setNutririons] = useState<string[]>([])
    const [bars, setBars] = useState<string[]>([])
    const [entertainmentsAndSports, setSports] = useState<string[]>([])
    const [health, setHealth] = useState<string[]>([])
    const [amentities, setAmentities] = useState<string[]>([])
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
    const [transportPrice, setTransportPrice] = useState('')
    const [transportOptions, setTransportOptions] = useState<string[]>([])
    const [childrenAllowed, setChildrenAllowed] = useState<boolean>(false)
    const [childrenOptions, setChildrenOptions] = useState<string[]>([])
    const [petAllowed, setPetAllowed] = useState<boolean>(false)
    const [staffSaysAllOptions, setStaffSaysAllOptions] = useState<string[]>([])
    const [accesibleEnvironments, setAccesibleEnvironments] = useState<string[]>([])
    const [accesibleEnvironmentsAllOptions, setAccesibleEnvironmentsAllOptions] = useState<string[]>([])

    const handleReceptionChange = ({ isAvailable, isWholeDay, from, to, checkIn, checkOut }: { isAvailable: boolean, isWholeDay: boolean, from: Dayjs | null, to: Dayjs | null, checkIn: Dayjs | null, checkOut: Dayjs | null }) => {
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

    const handleTransportChange = ({ canTransport, canPark, parkFeeIncludedInPrice, transportFeeIncludedInPrice, transportPrice }: { canTransport: boolean, canPark: boolean, parkFeeIncludedInPrice: boolean, transportFeeIncludedInPrice: boolean, transportPrice: string, transportOptions: string[] }) => {
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
        setPetAllowed(petAllowed)
    }

    useEffect(() => {
        getHotelStaffSays()
            .then(res => {
                setStaffSaysAllOptions(res.map((item: { label: string }) => item.label))
            })
        getAccessibleEnvironments()
            .then(res => {
                setAccesibleEnvironmentsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getSeaAndBeachAllOptions()
            .then(res => {
                setSeaAndBeachAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])

    return (
        <div className="choose-hoteltype space-y-4 ">
            <p className="md:text-h3 text-h4 md:mb-[32px] mb-[20px]">Общая информация</p>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Reception onChange={handleReceptionChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/HotelInfrastructure.svg" title="Инфраструктура отеля" data={HotelInfrastructureData} onCheckBoxListChange={setInfrastructures} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/hotel-services.svg" title="Услуги в отеле" data={HotelInfrastructureData} onCheckBoxListChange={setServices} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/apple-one 1.svg" title="Питание" data={HotelInfrastructureData} onCheckBoxListChange={setNutririons} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/goblet-one 1.svg" title="Бар и ресторан" data={HotelInfrastructureData} onCheckBoxListChange={setBars} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/game-handle 2.svg" title="Развлечения и спорт" data={HotelInfrastructureData} onCheckBoxListChange={setSports} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/Like32.svg" title="Красота и здоровье" data={HotelInfrastructureData} onCheckBoxListChange={setHealth} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Internet onChange={handleInternetChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Transport onChange={handleTransportChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><PetOption onChange={handlePetOptionChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><ForChildren onChange={handleForChildrenChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/ammentities.svg" title="Удобства в номерах" data={HotelInfrastructureData} onCheckBoxListChange={setAmentities} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/online-meeting 1.svg" title="Удобства в номерах" data={HotelInfrastructureData} onCheckBoxListChange={setConferenceFacilities} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/SeaBlue.svg" title="Море и пляж" data={seaAndBeachAllOptions} onCheckBoxListChange={setSeaAndBeach} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/wheelchair 1.svg" title="Доступная среда" data={accesibleEnvironmentsAllOptions} onCheckBoxListChange={setAccesibleEnvironments} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/people-speak 1.svg" title="Персонал говорит" data={staffSaysAllOptions} onCheckBoxListChange={setStaffSays} /></div>
        </div>

    )
}


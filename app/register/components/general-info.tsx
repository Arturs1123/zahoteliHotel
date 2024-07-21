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

import { useState } from "react";
import Reception from "./reception";
import CheckBoxList from "./CheckBoxList";

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
    // const items: CollapseProps['items'] = [
    //     // Stardom
    //     {
    //         key: '1',
    //         label: <div><img src="/icons/svg/LC_Hotel/Stardom.svg" className="inline w-6 md:w-8" /> Звездность</div>,
    //         children: <div className="w-full ">
    //             <Radio.Group onChange={onChange} value={value} className="flex flex-col lg:flex-row lg:justify-between">

    //                 <Radio value='five-star'>
    //                     {[0, 0, 0, 0, 0].map((c, i) => <StarFilled key={i} style={{ fontSize: '20px', color: "#FFC226", marginRight: "6px" }} />)}
    //                 </Radio>
    //                 <Radio value='four-star'>
    //                     {[0, 0, 0, 0].map((c, i) => <StarFilled key={i} style={{ fontSize: '20px', color: "#FFC226", marginRight: "6px" }} />)}

    //                 </Radio>
    //                 <Radio value='three-star'>
    //                     {[0, 0, 0].map((c, i) => <StarFilled key={i} style={{ fontSize: '20px', color: "#FFC226", marginRight: "6px" }} />)}

    //                 </Radio>
    //                 <Radio value='two-star'>
    //                     {[0, 0].map((c, i) => <StarFilled key={i} style={{ fontSize: '20px', color: "#FFC226", marginRight: "6px" }} />)}
    //                 </Radio>
    //                 <Radio value='one-star'>
    //                     {[0].map((c, i) => <StarFilled key={i} style={{ fontSize: '20px', color: "#FFC226", marginRight: "6px" }} />)}
    //                 </Radio>
    //                 <Radio value="no-star">
    //                     Без рейтинга
    //                 </Radio>
    //             </Radio.Group>
    //         </div>
    //     },

    //     // Reseption
    //     {
    //         key: '2',
    //         label: <div><img src="/icons/svg/LC_Hotel/Reseption.svg" className="inline w-6 md:w-8" /> Стойка регистрации</div>,
    //         children:
    //             <div className="flex flex-wrap justify-between">
    //                 <div className="max-w-[650px] space-y-4">
    //                     <p className="front-desk-operations text-lg">Работа стойки регистрации</p>

    //                     <div className="choose-time grid md:grid-cols-3 gap-4">
    //                         <CustomSwitch className="md:col-span-2" option1="Круглосуточно" option2="Укажу время" />
    //                         <div className="grid grid-cols-2 gap-4">
    //                             <Input placeholder="9:00" />
    //                             <Input placeholder="24:00" />
    //                         </div>
    //                     </div>

    //                     <div className="no-reception">
    //                         <Checkbox />
    //                         <span className="ml-2 text-base">Нет стойки регистрации</span>
    //                     </div>
    //                 </div>

    //                 <div className="space-y-4">
    //                     <p className="text-lg">Заезд и выезд</p>
    //                     <div className="grid grid-cols-2 gap-4">
    //                         <Input placeholder="15:00" />
    //                         <Input placeholder="12:00" />
    //                     </div>
    //                 </div>
    //             </div>
    //     },
    //     // Hotel infrastructure
    //     {
    //         key: '3',
    //         label: <div><img src="/icons/svg/LC_Hotel/HotelInfrastructure.svg" className="inline w-6 md:w-8" /> Инфраструктура отеля</div>,
    //         children:
    //             <div className="grid md:grid-cols-3">
    //                 {HotelInfrastructureData.map((c, i) =>
    //                     <div key={i} className="no-reception">
    //                         <Checkbox />
    //                         <span className="ml-2 text-base">{c.text}</span>
    //                     </div>
    //                 )}
    //             </div>
    //     },

    //     // Internet
    //     {
    //         key: '4',
    //         label: <div><img src="/icons/svg/LC_Hotel/Internet.svg" className="inline w-6 md:w-8" /> Интернет</div>,
    //         children:
    //             <div className="grid md:grid-cols-3">
    //                 <div className="Wi-Fi-in-hotel space-y-4">
    //                     <div>
    //                         <span>Wi-Fi в отеле</span>
    //                         <Switch />
    //                     </div>
    //                     <Radio.Group className="flex flex-col space-y-4">
    //                         <Radio value="Included in the price">Входит в стоимость</Radio>
    //                         <Radio value="Not included in the price">Не входит в стоимость</Radio>
    //                     </Radio.Group>
    //                 </div>
    //                 <div className="Wi-Fi-in-rooms space-y-4">
    //                     <div>
    //                         <span>Wi-Fi в номерах</span>
    //                         <Switch />
    //                     </div>
    //                     <Radio.Group className="flex flex-col space-y-4">
    //                         <Radio value="Included in the price">Входит в стоимость</Radio>
    //                         <Radio value="Not included in the price">Не входит в стоимость</Radio>
    //                     </Radio.Group>
    //                     <Input />
    //                 </div>
    //             </div>
    //     },
    //     // Hotel infrastructure
    //     {
    //         key: '5',
    //         label: <div><img src="/icons/svg/LC_Hotel/Internet.svg" className="inline w-6 md:w-8" /> Интернет</div>,
    //         children:
    //             <div className="grid lg:grid-cols-3 gap-4">
    //                 <div className="Wi-Fi-in-hotel space-y-4">
    //                     <div>
    //                         <span>Wi-Fi в отеле</span>
    //                         <Switch />
    //                     </div>
    //                     <Radio.Group className="flex flex-col space-y-4">
    //                         <Radio value="Included in the price">Входит в стоимость</Radio>
    //                         <Radio value="Not included in the price">Не входит в стоимость</Radio>
    //                     </Radio.Group>
    //                 </div>
    //                 <div className="Wi-Fi-in-rooms space-y-4">
    //                     <div>
    //                         <span>Wi-Fi в номерах</span>
    //                         <Switch />
    //                     </div>
    //                     <Radio.Group className="flex flex-col space-y-4">
    //                         <Radio value="Included in the price">Входит в стоимость</Radio>
    //                         <Radio value="Not included in the price">Не входит в стоимость</Radio>
    //                     </Radio.Group>
    //                     <Input />
    //                 </div>
    //                 <div>
    //                     {HotelInfrastructureData.map((c, i) =>
    //                         <div key={i} className="no-reception">
    //                             <Checkbox />
    //                             <span className="ml-2 text-base">{c.text}</span>
    //                         </div>
    //                     )}
    //                 </div>
    //             </div>
    //     },
    //     // Hotel infrastructure
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

    console.log(infrastuructures)
    const handleReceptionChange = ({ isAvailable, isWholeDay, from, to, checkIn, checkOut }: { isAvailable: boolean, isWholeDay: boolean, from: Dayjs | null, to: Dayjs | null, checkIn: Dayjs | null, checkOut: Dayjs | null }) => {
        setIsAvabilable(isAvailable)
        setIsWholeDay(isWholeDay)
        setFrom(from)
        setTo(to)
        setCheckIn(checkIn)
        setCheckOut(checkOut)
    }

    return (
        <div className="choose-hoteltype space-y-4 ">
            <p className="md:text-h3 text-h4 md:mb-[32px] mb-[20px]">Общая информация</p>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><Reception onChange={handleReceptionChange} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/HotelInfrastructure.svg" title="Инфраструктура отеля" data={HotelInfrastructureData} onCheckBoxListChange={setInfrastructures} /></div>
            <div className="md:mb-[16px] mb-[16px]"><CheckBoxList icon="/icons/svg/hotel-services.svg" title="Услуги в отеле" data={HotelInfrastructureData} onCheckBoxListChange={setServices} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>
            <div className="md:mb-[16px] mb-[16px]"><StarSelector onStarChange={setStar} /></div>

        </div>

    )
}

'use client'
import CustomSwitch from "@/components/CustomSwitch";
import FillButton from "@/components/FillButton";
import MapComponent from "@/components/MapComponent";
import { Input } from "antd"
import { useState } from "react";
import { toast } from "react-toastify"

export default function WriteAddress({ onNext = () => { } }: { onNext?: ({ country, region, city, street, house, building, distanceFromTheSea, distanceFromTheCityCenter }: { country: string, region: string, city: string, street: string, house: string, building: string, distanceFromTheSea: number, distanceFromTheCityCenter: number }) => void }) {
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [building, setBuilding] = useState('')
    const [country, setCountry] = useState('Россия')
    const [distanceFromTheSea, setDistanceFromTheSea] = useState<number>(0)
    const [distanceFromTheCityCenter, setDistanceFromTheCityCenter] = useState<number>(0)

    const handleSwitchChange = (country: string) => {
        setCountry(country)
    }

    const handleNextClick = () => {
        if (!country || !region || !city || !street || !house || !building) {
            return toast.error('введите все поля')
        }
        onNext({ country, region, city, street, house, building, distanceFromTheSea, distanceFromTheCityCenter })
    }

    return (
        <div>
            <div className="md:grid md:grid-cols-2 md:gap-4 md:mb-[32px] mb-[20px]">
                <div className="address-input-form">
                    <h3 className="md:text-h3 text-h4 md:mb-[32px] mb-[20px]">Адрес</h3>
                    <div className="bg-white rounded-lg w-full p-2 md:p-6 space-y-4">
                        <p className="text-p3 text-custom-gray mb-[8px]">Страна</p>
                        <CustomSwitch option1="Россия" option2="Абхазия" selectedValue="Россия" onSwitchChange={handleSwitchChange} />
                        <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 rounded-[16px]">
                            <Input placeholder="Регион, область, край" className="p-[12px] col-span-2 my-1 md:col-span-2" value={region} onChange={e => setRegion(e.target.value)} />
                            <Input placeholder="Город, поселок" className="p-[12px] col-span-2 my-1 md:col-span-2" value={city} onChange={e => setCity(e.target.value)} />
                            <Input placeholder="Улица" className="p-[12px] col-span-2 my-1 md:col-span-2" value={street} onChange={e => setStreet(e.target.value)} />
                            <Input placeholder="Дом" className="p-[12px] col-span my-1" value={house} onChange={e => setHouse(e.target.value)} />
                            <Input placeholder="Корпус" className="p-[12px] col-span my-1" value={building} onChange={e => setBuilding(e.target.value)} />
                            <Input placeholder="расстояние от моря" className="p-[12px] col-span-2 my-1 md:col-span-2" value={distanceFromTheSea} onChange={e => setDistanceFromTheSea(parseFloat(e.target.value))} suffix="Km" />
                            <Input placeholder="расстояние от центра города" className="p-[12px] col-span-2 my-1 md:col-span-2" value={distanceFromTheCityCenter} onChange={e => setDistanceFromTheCityCenter(parseFloat(e.target.value))} suffix="Km" />
                        </div>
                    </div>
                </div>
                <MapComponent />
            </div>
            <div className="flex justify-center">
                <FillButton caption="Далее" withArrow onBtnClick={handleNextClick} />
            </div>
        </div>
    )
}


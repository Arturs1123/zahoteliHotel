import { useState, useEffect } from "react"
import CollapseTitle from "./collapse-title"
import { Input } from "antd"
import Switch from "@/components/Switch"
import { Radio } from "antd"
import type { RadioChangeEvent } from 'antd';

export default function Internet({ onChange = () => { } }: { onChange?: ({ isAvailableInHotel, isAvailableInRoom, isHotelWifiIncludedInPrice, isRoomWifiIncludedInPrice, wifiPrice }: { isAvailableInHotel: boolean, isAvailableInRoom: boolean, isHotelWifiIncludedInPrice: boolean, isRoomWifiIncludedInPrice: boolean, wifiPrice: string }) => void }) {
    const [toggle, setToggle] = useState(false)
    const [isAvailableInHotel, setIsAvabilableInHotel] = useState(false)
    const [isAvailableInRoom, setIsAvabilableInRoom] = useState(false)
    const [isHotelWifiIncludedInPrice, setIsHotelWifiIncludedInPrice] = useState(false)
    const [isRoomWifiIncludedInPrice, setIsRoomWifiIncludedInPrice] = useState(false)
    const [wifiPrice, setWifiPrice] = useState('')

    useEffect(() => {
        onChange({ isAvailableInHotel, isAvailableInRoom, isHotelWifiIncludedInPrice, isRoomWifiIncludedInPrice, wifiPrice })
    }, [isAvailableInHotel, isAvailableInRoom, isHotelWifiIncludedInPrice, isRoomWifiIncludedInPrice, wifiPrice])

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Internet.svg" title="Интернет" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="md:flex">
                        <div className="md:w-[357px] md:mr-[32px] md:mb-0 mb-[32px]">
                            <div className="flex items-center mb-[16px]">
                                <span className="text-btn mr-[12px]">Wi-Fi в отеле</span><Switch onSwitchChange={setIsAvabilableInHotel} defaultValue={isAvailableInHotel} />
                            </div>
                            <Radio.Group disabled={!isAvailableInHotel} onChange={(e: RadioChangeEvent) => setIsHotelWifiIncludedInPrice(e.target.value)} value={isHotelWifiIncludedInPrice}>
                                <Radio value={true} className="mb-[16px]"><span className="text-p3">Входит в стоимость</span></Radio>
                                <Radio value={false}><span className="text-p3">Не входит в стоимость</span></Radio>
                            </Radio.Group>
                        </div>
                        <div className="md:w-[357px]">
                            <div className="flex items-center mb-[16px]">
                                <span className="text-btn mr-[12px]">Wi-Fi в номерах</span><Switch onSwitchChange={setIsAvabilableInRoom} defaultValue={isAvailableInRoom} />
                            </div>
                            <Radio.Group disabled={!isAvailableInRoom} onChange={(e: RadioChangeEvent) => setIsRoomWifiIncludedInPrice(e.target.value)} value={isRoomWifiIncludedInPrice}>
                                <Radio value={true} className="mb-[16px]"><span className="text-p3">Входит в стоимость</span></Radio>
                                <Radio value={false} className="mb-[16px]"><span className="text-p3">Не входит в стоимость</span></Radio>
                            </Radio.Group>
                            <Input placeholder="Стоимость" className="p-[12px]" onChange={e => setWifiPrice(e.target.value)} value={wifiPrice} />
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
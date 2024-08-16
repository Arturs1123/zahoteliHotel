import { useEffect, useState } from "react"
import CollapseTitle from "./collapse-title"
import CustomSwitch from "@/components/CustomSwitch"
import { Checkbox, TimePicker } from "antd"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

export default function Reception({ onChange = () => { } }: { onChange?: ({ isAvailable, isWholeDay, from, to, checkIn, checkOut }: { isAvailable: boolean, isWholeDay: boolean, from: string, to: string, checkIn: string, checkOut: string }) => void }) {
    const [toggle, setToggle] = useState(false)
    const [isAvailable, setIsAvabilable] = useState(false)
    const [isWholeDay, setIsWholeDay] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Круглосуточно')
    const [from, setFrom] = useState<string>("12:00");
    const [to, setTo] = useState<string>("12:00");
    const [checkIn, setCheckIn] = useState<string>("12:00");
    const [checkOut, setCheckOut] = useState<string>("12:00");

    const handleSwitchChange = (option: string) => {
        setSelectedOption(option)
        setIsWholeDay(option === 'Круглосуточно')
    }
    const format = 'HH:mm'

    useEffect(() => {
        onChange({ isAvailable, isWholeDay, from, to, checkIn, checkOut })
    }, [isAvailable, isWholeDay, from, to, checkIn, checkOut])

    const handleChangeTime = (field: string) => (e: any) => {
        switch (field) {
            case 'from': setFrom(dayjs(e).format(format)); break;
            case 'to': setTo(dayjs(e).format(format)); break;
            case 'checkIn': setCheckIn(dayjs(e).format(format)); break;
            case 'checkOut': setCheckOut(dayjs(e).format(format)); break;
            default: break;
        }
    }
    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Reseption.svg" title="Стойка регистрации" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="flex flex-wrap justify-between items-start">
                        <div className="max-w-[650px] grow">
                            <p className="text-btn mb-[16px]">Работа стойки регистрации</p>

                            <div className="md:flex">
                                <CustomSwitch className="md:max-w-[372px] md:mr-[16px] md:mb-0 mb-[16px]" option1="Круглосуточно" option2="Укажу время" selectedValue={selectedOption} onSwitchChange={handleSwitchChange} />
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="p-[12px]" value={dayjs(from, format)} onChange={handleChangeTime('from')} />
                                    <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="p-[12px]" value={dayjs(to, format)} onChange={handleChangeTime('to')} />
                                </div>
                            </div>

                            <div className="mt-[16px] lg:mb-0 mb-[32px]">
                                <Checkbox value={isAvailable} onChange={(e) => setIsAvabilable(e.target.value)} />
                                <span className="text-p3 ml-[6px]">Нет стойки регистрации</span>
                            </div>
                        </div>

                        <div className="md:max-w-[357px] w-full">
                            <p className="text-btn mb-[16px]">Заезд и выезд</p>
                            <div className="grid grid-cols-2 gap-4">
                                <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="p-[12px]" value={dayjs(checkIn, format)} onChange={handleChangeTime('checkIn')} />
                                <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="p-[12px]" value={dayjs(checkOut, format)} onChange={handleChangeTime('checkOut')} />
                            </div>
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
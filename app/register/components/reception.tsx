import { useEffect, useState } from "react"
import CollapseTitle from "./collapse-title"
import CustomSwitch from "@/components/CustomSwitch"
import { Checkbox, TimePicker } from "antd"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

export default function Reception({ onChange = () => { } }: { onChange?: ({ isAvailable, isWholeDay, from, to, checkIn, checkOut }: { isAvailable: boolean, isWholeDay: boolean, from: Dayjs | null, to: Dayjs | null, checkIn: Dayjs | null, checkOut: Dayjs | null }) => void }) {
    const [toggle, setToggle] = useState(false)
    const [isAvailable, setIsAvabilable] = useState(false)
    const [isWholeDay, setIsWholeDay] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Круглосуточно')
    const [from, setFrom] = useState<Dayjs | null>(null);
    const [to, setTo] = useState<Dayjs | null>(null);
    const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
    const [checkOut, setCheckOut] = useState<Dayjs | null>(null);

    const handleSwitchChange = (option: string) => {
        setSelectedOption(option)
        setIsWholeDay(option === 'Круглосуточно')
    }
    const format = 'HH:mm'

    useEffect(() => {
        onChange({ isAvailable, isWholeDay, from, to, checkIn, checkOut })
    }, [isAvailable, isWholeDay, from, to, checkIn, checkOut])
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
                                    <TimePicker defaultValue={dayjs('12:08', format)} format={format} className="p-[12px]" value={from} onChange={setFrom} />
                                    <TimePicker defaultValue={dayjs('12:08', format)} format={format} className="p-[12px]" value={to} onChange={setTo} />
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
                                <TimePicker defaultValue={dayjs('12:08', format)} format={format} className="p-[12px]" value={checkIn} onChange={setCheckIn} />
                                <TimePicker defaultValue={dayjs('12:08', format)} format={format} className="p-[12px]" value={checkOut} onChange={setCheckOut} />
                            </div>
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
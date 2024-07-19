'use client'
import { useState } from "react"

export type CustomSwitchType = 'option1' | 'option2'

type CustomSwitchProps = { option1?: string, option2?: string }

export default function CustomSwitch({ option1 = "", option2 = "", ...props }: CustomSwitchProps & React.HTMLAttributes<HTMLDivElement>) {
    const selectedClass = "bg-white rounded-full shadow-md"
    const commonClass = "px-[12px] py-[8px] text-[18px] font-semibold"
    const [selected, setSelected] = useState<CustomSwitchType>('option1')
    const { className } = props

    const handleClick = (option: CustomSwitchType): void => {
        setSelected(option)
    }

    return (
        <div className={`rounded-full grid grid-cols-2 p-[3px] bg-[#EEEEEE] ${className}`}>
            <button className={selected == 'option1' ? `${selectedClass} ${commonClass}` : commonClass} onClick={() => handleClick('option1')}>{option1}</button>
            <button className={selected == 'option2' ? `${selectedClass} ${commonClass}` : commonClass} onClick={() => handleClick('option2')}>{option2}</button>
        </div >
    )
}
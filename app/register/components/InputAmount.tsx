import ControlButton from "@/components/ControlButton"
import { Input } from "antd"
import { useEffect, useState } from "react"

type PersonAmountProps = {
    label?: string
    price?: number
    amount?: number
    icon?: string
    onValueChange?: (value: number) => void
}

export default function InputAmount({ label = '', price = 0, amount = 0, icon = '', onValueChange = () => { }, ...props }: PersonAmountProps & React.HTMLAttributes<HTMLDivElement>) {
    const [value, setValue] = useState<number>(amount)
    const handlePlus = () => {
        setValue(value + 1)
    }

    const handleMinus = () => {
        if (value == 0)
            setValue(0)
        else
            setValue(value - 1)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(parseInt(e.target.value))) {
            setValue(0)
        } else {
            setValue(parseInt(e.target.value))
        }
    }

    useEffect(() => {
        onValueChange(value)
    }, [value])
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <label className="text-custom-gray text-p4 mb-[12px] block flex items-center">
                {icon ? <img src={icon} alt="icon" className="w-[24px] h-auto mr-[6px]" /> : null}
                {label}
            </label>
            <div className="flex items-center justify-between">
                <img src="/icons/svg/minus_btn.svg" className="w-[32px] h-auto mr-[8px] cursor-pointer" onClick={handleMinus} />
                <Input placeholder="Укажите название объекта" value={value} className="text-center p-[12px] text-p3" onChange={handleInputChange} />
                <img src="/icons/svg/plus_btn.svg" className="w-[32px] h-auto ml-[8px] cursor-pointer" onClick={handlePlus} />
            </div>
        </div>
    )
}
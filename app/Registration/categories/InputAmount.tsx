import ControlButton from "@/components/ControlButton"
import { Input } from "antd"

type PersonAmountProps = {
    label?: string
    price?: number
    amount?: number
}

export default function InputAmount({ label = '', price = 0, amount = 0, ...props }: PersonAmountProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''} grid md:px-8`}>
            <label className="text-[#919494] text-base mb-5">{label}</label>
            <div className="flex items-center justify-around">
                <button className="bg-[#EBEDFE] rounded text-base font-bold text-[#3C4EF2] px-3 py-1 mr-4">-</button>
                <Input placeholder="Укажите название объекта" value={amount} size='large' />
                <button className="bg-[#EBEDFE] rounded text-base font-bold text-[#3C4EF2] px-3 py-1 ml-4" >+</button>
            </div>
        </div>
    )
}
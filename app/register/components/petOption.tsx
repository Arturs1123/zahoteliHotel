import { useEffect, useState } from "react"
import Switch from "@/components/Switch"

export default function PetOption({ onChange = () => { } }: { onChange?: (v: boolean) => void }) {
    const [petAllowed, setPetAllowed] = useState<boolean>(false)

    const handleSwitchChange = (v: boolean) => {
        onChange(v)
        setPetAllowed(v)
    }
    return (
        <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
            <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer">
                <div className="flex items-center">
                    <img src="/icons/svg/pet.svg" alt="icon" className="md:w-[36px] w-[28px] mr-[12px]" />
                    <h4 className="md:text-h4 text-h5">Питомцы</h4>
                </div>
            </div>
            <div className="flex items-center mb-[16px]">
                <span className="text-btn mr-[12px]">Можно с питомцами</span><Switch onSwitchChange={handleSwitchChange} defaultValue={petAllowed} />
            </div>
        </div>
    )
}
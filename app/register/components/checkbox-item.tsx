import Image from "next/image"
import { useState } from "react"

export default function CheckBoxItem(
    { label = '', defaultValue = false, onCheckChange = () => { }, disable = false }:
        { disable?: boolean, label?: string, defaultValue?: boolean, onCheckChange?: ({ label, checked }: { label: string, checked: boolean }) => void }) {
    const [checked, setChecked] = useState(defaultValue)
    const handleClick = () => {
        if (disable) return
        const _checked = !checked
        setChecked(_checked)
        onCheckChange({ label, checked: _checked })
    }
    return (
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
            <Image src={checked ? disable ? '/icons/svg/check-on-disable.svg' : '/icons/svg/checkbox-on.svg' : disable ? '/icons/svg/check-off-disable.svg' : '/icons/svg/checkbox-off.svg'} width={24} height={24} alt="check" />
            <span className="text-p3 ml-[6px]">{label}</span>
        </div>
    )
}
import Image from "next/image"
import { useState } from "react"

export default function CheckBoxItem(
    { label = '', defaultValue = false, onCheckChange = () => { } }:
        { label?: string, defaultValue?: boolean, onCheckChange?: ({ label, checked }: { label: string, checked: boolean }) => void }) {
    const [checked, setChecked] = useState(defaultValue)
    const handleClick = () => {
        const _checked = !checked
        setChecked(_checked)
        onCheckChange({ label, checked: _checked })
    }
    return (
        <div className="flex items-center" onClick={handleClick}>
            <Image src={checked ? '/icons/svg/checkbox-on.svg' : '/icons/svg/checkbox-off.svg'} width={24} height={24} alt="check" />
            <span className="text-p3 ml-[6px]">{label}</span>
        </div>
    )
}
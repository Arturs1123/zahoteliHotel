import { useState } from "react"

export default function Switch({ onSwitchChange = () => { }, defaultValue = false }: { onSwitchChange?: (v: boolean) => void, defaultValue?: boolean }) {
    const [toggle, setToggle] = useState<boolean>(defaultValue)
    const handleClick = () => {
        const _toggle = toggle
        setToggle(!_toggle)
        onSwitchChange(!_toggle)
    }

    if (toggle) return <img src="/icons/svg/switch on.svg" className="w-[44px] h-[24px] cursor-pointer" onClick={handleClick} />
    else return <img src="/icons/svg/switch off.svg" className="w-[44px] h-[24px] cursor-pointer" onClick={handleClick} />
}
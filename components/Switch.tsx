import { useState } from "react"

export default function Switch() {
    const icons = {
        on: '/icons/svg/switch on.svg',
        off: '/icons/svg/switch off.svg',
    }
    const [toggle, setToggle] = useState<boolean>(false)
    const handleClick = () => {
        setToggle(!toggle)
    }

    if (toggle) return <img src="/icons/svg/switch on.svg" className="w-[44px] h-[24px] cursor-pointer" onClick={handleClick} />
    else return <img src="/icons/svg/switch off.svg" className="w-[44px] h-[24px] cursor-pointer" onClick={handleClick} />
}
'use client'

import Image from "next/image"
import { useState } from "react"

export type RadioProps = {
    label?: string,
}

export default function Radio({
    label = '',
    ...props
}: RadioProps & React.HTMLAttributes<HTMLDivElement>) {
    const [checked, setChecked] = useState<boolean>(false)
    const handleClick = () => {
        setChecked(!checked)
    }
    return (
        <div className={`flex ${props.className ? props.className : ''}`} onClick={handleClick}>
            {
                checked ? <span>
                    <Image className="md:block hidden mr-[6px]" src="/icons/svg/Radio.svg" width={24} height={24} alt="radio icon" />
                    <Image className="md:hidden block" src="/icons/svg/Radio.svg" width={20} height={20} alt="radio icon" />
                </span> :
                    <span>
                        <Image className="md:block hidden mr-[6px]" src="/icons/svg/RadioOff.svg" width={24} height={24} alt="radio icon" />
                        <Image className="md:hidden block" src="/icons/svg/RadioOff.svg" width={20} height={20} alt="radio icon" />
                    </span>
            }
            <span className="md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] font-semibold">{label}</span>
        </div>
    )
}
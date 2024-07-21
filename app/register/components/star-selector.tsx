import Image from "next/image"
import { useState } from "react"
import { Rate } from "antd"
import CollapseTitle from "./collapse-title"

function StarSelctorItem({ count = 0, selected = 0, onSelect = () => { } }: { count?: number, selected?: number, onSelect?: (v: number) => void }) {
    return (
        <div className="flex items-center md:mb-0 mb-[16px]" onClick={() => { onSelect(count) }}>
            <Image src={selected === count ? '/icons/svg/Radio.svg' : '/icons/svg/RadioOff.svg'} alt="icon" width={24} height={24} className="mr-[6px]" />
            {count !== 0 ? <Rate count={count} defaultValue={count} disabled /> : <span className="text-p3">Без рейтинга</span>}
        </div>
    )
}

export default function StarSelector({ onStarChange = () => { } }: { onStarChange?: (v: number) => void }) {
    const [toggle, setToggle] = useState(false)
    const [star, setStar] = useState(0)
    const handleStarSelect = (count: number) => {
        setStar(count)
        onStarChange(count)
    }
    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Stardom.svg" title="Звездность" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="md:grid md:grid-cols-6">
                        {
                            [5, 4, 3, 2, 1, 0].map((count, i) => <StarSelctorItem count={count} selected={star} key={i} onSelect={handleStarSelect} />)
                        }
                    </div> : null}
            </div>
        </div >
    )
}
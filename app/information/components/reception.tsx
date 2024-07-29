import { useState } from "react"
import CollapseTitle from "@/app/register/components/collapse-title"

export type ReceptionType = {
    isAvailable: boolean
    isWholeDay: boolean
    from: string | null
    to: string | null
}

export default function ReaceptionReadMode({ data, checkIn, checkOut }: { data?: ReceptionType, checkIn?: string, checkOut?: string }) {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div>
            <div className="md:p-[32px] p-[24px] border rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Reseption.svg" title="Стойка регистрации" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="md:flex">
                        {data?.isAvailable ? <div className="lg:min-w-[397px] md:mb-0 mb-[24px] md:mr-[16px]">
                            <p className="text-btn mb-[8px]">Работа стойки регистрации</p>
                            <p className="text-p3 text-custom-gray">С &nbsp;<span>{data.from}</span> &nbsp;до&nbsp; <span>{data.to}</span></p>
                        </div> : null}
                        <div className="lg:min-w-[397px]">
                            <p className="text-btn mb-[8px]">Заезд и выезд</p>
                            <p className="text-p3 text-custom-gray flex items-center">С&nbsp; <span>{checkIn}</span>&nbsp; до&nbsp; <span>{checkOut}</span></p>
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
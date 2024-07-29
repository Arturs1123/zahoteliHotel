import { useState } from "react"
import CollapseTitle from "@/app/register/components/collapse-title"

export type InternetType = {
    wifiInHotel: {
        available: boolean
        includedInThePrice: boolean
    }
    wifiInRoom: {
        available: boolean
        includedInThePrice: boolean
    }
}

export default function InternetReadMode({ data }: { data?: InternetType }) {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Internet.svg" title="Интернет" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="grid md:grid-cols-3 grid-cols-1">
                        <div>
                            {data?.wifiInHotel.available ? <p className="text-btn mb-[16px]">Wi-Fi в отеле</p> : <p className="text-btn text-custom-gray mb-[16px]">Wi-Fi в отеле отсутствует</p>}
                            {data?.wifiInHotel.includedInThePrice ? <p className="text-p3">Входит в стоимость</p> : <p className="text-p3">не включено в цену</p>}
                        </div>
                        <div>
                            {data?.wifiInRoom.available ? <p className="text-btn mb-[16px]">Wi-Fi в номерах</p> : <p className="text-btn text-custom-gray mb-[16px]">В номере нет Wi-Fi.</p>}
                            {data?.wifiInRoom.includedInThePrice ? <p className="text-p3">Входит в стоимость</p> : <p className="text-p3">не включено в цену</p>}
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
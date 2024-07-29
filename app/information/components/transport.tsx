import { useEffect, useState } from "react"
import CollapseTitle from "@/app/register/components/collapse-title"
import { getHotelTransportOptions } from "@/app/backend_apis"
import CheckBoxItem from "../../register/components/checkbox-item"

export type TransportType = {
    parking: {
        available: boolean
        includedInThePrice: boolean
    }
    transfer: {
        available: boolean
        includedInThePrice: boolean
        price: number | null
    }
    services: string[]
}

export default function TransportReadMode({ data }: { data?: TransportType }) {
    const [toggle, setToggle] = useState<boolean>(false)
    const [transportAllOptions, setTransportAllOptions] = useState<string[]>([])

    useEffect(() => {
        getHotelTransportOptions()
            .then(res => {
                setTransportAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Car.svg" title="Транспорт" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="grid md:grid-cols-3 grid-cols-1">
                        <div>
                            {data?.parking.available ? <p className="text-btn mb-[16px]">парковка доступна</p> : <p className="text-btn text-custom-gray mb-[16px]">парковка недоступна</p>}
                            {data?.parking.available ? data.parking.includedInThePrice ? <p className="text-p3">Входит в стоимость</p> : <p className="text-p3">не включено в цену</p> : null}
                        </div>
                        <div>
                            {data?.transfer.available ? <p className="text-btn mb-[16px]">транспорт доступен</p> : <p className="text-btn text-custom-gray mb-[16px]">транспорт недоступен</p>}
                            {data?.transfer.available ? data.transfer.includedInThePrice ? <p className="text-p3">Входит в стоимость</p> : <p className="text-p3">не включено в цену</p> : null}
                        </div>
                        <div className="md:mt-0 mt-[16px]">
                            {
                                transportAllOptions.map((label, i) => <div className="mb-[16px]" key={i}>
                                    <CheckBoxItem label={label} disable defaultValue={data?.services.includes(label)} />
                                </div>)
                            }
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
import { useState, useEffect } from "react"
import CollapseTitle from "@/app/register/components/collapse-title"
import CheckBoxItem from "@/app/register/components/checkbox-item"
import { getHotelChildrenOptions } from "@/app/backend_apis"

export type ForChildrenType = {
    possible: boolean
    services: string[]
}

export default function ForChildrenReadMode({ data }: { data?: ForChildrenType }) {
    const [toggle, setToggle] = useState(false)
    const [childrenAllOptions, setChildrenAllOptions] = useState<string[]>([])

    useEffect(() => {
        getHotelChildrenOptions()
            .then(res => {
                setChildrenAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/rocking-horse 1.svg" title="Детям" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div>
                        <p className="text-btn mb-[20px]">{data?.possible ? 'Можно с детьми' : 'Дети не допускаются.'}</p>
                        {
                            data?.possible ?
                                <div className="md:grid md:grid-cols-3">
                                    <div className="md:col-span-2">
                                        <div className="md:grid md:grid-cols-2">
                                            {
                                                childrenAllOptions.map((label, i) => <div className="mb-[16px]" key={i}>
                                                    <CheckBoxItem disable label={label} defaultValue={data.services.includes(label)} />
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                </div> : null
                        }
                    </div> : null}
            </div>
        </div >
    )
}
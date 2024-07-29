import { useState, useEffect } from "react"
import CollapseTitle from "./collapse-title"
import Switch from "@/components/Switch"
import CheckBoxItem from "./checkbox-item"
import { getHotelChildrenOptions } from "@/app/backend_apis"

export default function ForChildren({ onChange = () => { } }: { onChange?: ({ childrenAllowed, childrenOptions }: { childrenAllowed: boolean, childrenOptions: string[] }) => void }) {
    const [toggle, setToggle] = useState(false)
    const [childrenAllowed, setChildrenAllowed] = useState(false)
    const [childrenOptions, setChildrenOptions] = useState<string[]>([])
    const [childrenAllOptions, setChildrenAllOptions] = useState<string[]>([])

    useEffect(() => {
        onChange({ childrenAllowed, childrenOptions })
    }, [childrenAllowed, childrenOptions])

    useEffect(() => {
        getHotelChildrenOptions()
            .then(res => {
                setChildrenAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])

    const handelCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...childrenOptions]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setChildrenOptions(_labels)
    }

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/rocking-horse 1.svg" title="Детям" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div>
                        <div className="flex items-center mb-[16px]">
                            <span className="text-btn mr-[12px]">Можно с детьми</span><Switch onSwitchChange={setChildrenAllowed} defaultValue={childrenAllowed} />
                        </div>
                        {
                            childrenAllowed ?
                                <div className="md:grid md:grid-cols-3">
                                    <div className="md:col-span-2">
                                        <div className="md:grid md:grid-cols-2">
                                            {
                                                childrenAllOptions.map((label, i) => <div className="mb-[16px]" key={i}>
                                                    <CheckBoxItem label={label} onCheckChange={handelCheckChange} defaultValue={childrenOptions.includes(label)} />
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
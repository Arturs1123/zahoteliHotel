import { useState, useEffect } from "react"
import CollapseTitle from "./collapse-title"
import { Input } from "antd"
import Switch from "@/components/Switch"
import { Radio } from "antd"
import type { RadioChangeEvent } from 'antd';
import CheckBoxItem from "./checkbox-item"
import { getHotelTransportOptions } from "@/app/backend_apis"

export default function Transport({ onChange = () => { } }: { onChange?: ({ canTransport, canPark, transportFeeIncludedInPrice, parkFeeIncludedInPrice, transportPrice }: { canTransport: boolean, canPark: boolean, transportFeeIncludedInPrice: boolean, parkFeeIncludedInPrice: boolean, transportPrice: number, transportOptions: string[] }) => void }) {
    const [toggle, setToggle] = useState(false)
    const [canTransport, setCanTransport] = useState(false)
    const [canPark, setCanPark] = useState(false)
    const [transportFeeIncludedInPrice, setTransportFeeIncludedInPrice] = useState(false)
    const [parkFeeIncludedInPrice, setParkFeeIncludedInPrice] = useState(false)
    const [transportPrice, setTransportPrice] = useState(0)
    const [transportOptions, setTransportOptions] = useState<string[]>([])
    const [transportAllOptions, setTransportAllOptions] = useState<string[]>([])

    useEffect(() => {
        onChange({ canTransport, canPark, transportFeeIncludedInPrice, parkFeeIncludedInPrice, transportPrice, transportOptions })
    }, [canTransport, canPark, transportFeeIncludedInPrice, parkFeeIncludedInPrice, transportPrice, transportOptions])

    useEffect(() => {
        getHotelTransportOptions()
            .then(res => {
                setTransportAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])

    const handelCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...transportOptions]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setTransportOptions(_labels)
    }

    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon="/icons/svg/Car.svg" title="Транспорт" />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="md:flex">
                        <div className="md:w-[357px] md:mr-[32px] md:mb-0 mb-[32px]">
                            <div className="flex items-center mb-[16px]">
                                <span className="text-btn mr-[12px]">Трансфер</span><Switch onSwitchChange={setCanPark} defaultValue={canPark} />
                            </div>
                            <Radio.Group disabled={!canPark} onChange={(e: RadioChangeEvent) => setParkFeeIncludedInPrice(e.target.value)} value={parkFeeIncludedInPrice}>
                                <Radio value={true} className="mb-[16px]"><span className="text-p3">Входит в стоимость</span></Radio>
                                <Radio value={false} className="mb-[16px]"><span className="text-p3">Не входит в стоимость</span></Radio>
                            </Radio.Group>
                        </div>
                        <div className="md:w-[357px] md:mr-[32px] md:mb-0 mb-[32px]">
                            <div className="flex items-center mb-[16px]">
                                <span className="text-btn mr-[12px]">Парковка</span><Switch onSwitchChange={setCanTransport} defaultValue={canTransport} />
                            </div>
                            <Radio.Group disabled={!canTransport} onChange={(e: RadioChangeEvent) => setTransportFeeIncludedInPrice(e.target.value)} value={transportFeeIncludedInPrice}>
                                <Radio value={true} className="mb-[16px]"><span className="text-p3">Входит в стоимость</span></Radio>
                                <Radio value={false} className="mb-[16px]"><span className="text-p3">Не входит в стоимость</span></Radio>
                            </Radio.Group>
                            <Input placeholder="Стоимость" className="p-[12px]" onChange={e => setTransportPrice(parseInt(e.target.value))} value={transportPrice} />
                        </div>
                        <div className="md:w-[357px]">
                            {
                                transportAllOptions.map((label, i) => <div className="mb-[16px]" key={i}>
                                    <CheckBoxItem label={label} onCheckChange={handelCheckChange} defaultValue={transportOptions.includes(label)} />
                                </div>)
                            }
                        </div>
                    </div> : null}
            </div>
        </div >
    )
}
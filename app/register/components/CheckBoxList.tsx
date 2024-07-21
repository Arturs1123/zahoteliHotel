import { useState } from "react"
import CollapseTitle from "./collapse-title"
import CheckBoxItem from "./checkbox-item"

export default function CheckBoxList({ title = '', icon = '', data = [], onCheckBoxListChange = () => { } }: { title?: string, icon?: string, data?: string[], onCheckBoxListChange?: (labels: string[]) => void }) {
    const [toggle, setToggle] = useState(false)
    const [labels, setLabels] = useState<string[]>([])
    const handelCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...labels]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setLabels(_labels)
        onCheckBoxListChange(_labels)
    }
    return (
        <div>
            <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <CollapseTitle icon={icon} title={title} />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {toggle ?
                    <div className="grid md:grid-cols-3 gap-[16px]">
                        {
                            data.map((label, i) => <CheckBoxItem label={label} key={i} onCheckChange={handelCheckChange} defaultValue={labels.includes(label)} />)
                        }
                    </div> : null}
            </div>
        </div >
    )
} 
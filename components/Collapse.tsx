import { useState } from "react"

export default function Collapse({ title = '', content = '', ...props }: { title?: string, content?: string } & React.HTMLAttributes<HTMLDivElement>) {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="md:p-[32px] md:border border-b md:rounded-[16px]">
                <div className="flex items-center justify-between mb-[16px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <h4 className="max-w-[800px] font-[600] md:text-[30px] md:leading-[36px] text-[16px] leading-[20px]">{title}</h4>
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {
                    toggle ? <p className="md:text-p1 text-p4 max-w-[800px] md:mb-0 mb-[16px]">
                        {content}
                    </p> : null
                }
            </div>
        </div>
    )
}
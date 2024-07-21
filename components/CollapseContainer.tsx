import { useState } from "react"

type CollapseTitleProps = {
    icon?: string
    title?: string
}

export const CollapseTitle: React.FC<CollapseTitleProps> = ({ title = '', icon = '' }) => {
    return (
        <div className="flex items-center">
            <img src={icon} alt="icon" className="md:w-[36px] w-[28px] mr-[12px]" />
            <h4 className="md:text-h4 text-h5">{title}</h4>
        </div>
    )
}

type CollapseContainerProps = {
    TitleComponent: React.ComponentType<CollapseTitleProps>
    // children: React.ReactNode
}

export default function CollapseContainer({ TitleComponent, ...props }: CollapseContainerProps) {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div className="md:p-[32px] border md:rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer" onClick={() => setToggle(!toggle)}>
                    <TitleComponent />
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="md:w-[44px] w-[24px] h-auto" />
                </div>
                {/* <div>
                    {
                        toggle ? children : null
                    }
                </div> */}
            </div>
        </div >
    )
}
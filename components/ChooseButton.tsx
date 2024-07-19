'use client'

import { ArrowRightOutlined } from "@ant-design/icons"

export type ChooseButtonProps = {
    caption?: string,
    withoutArrow?: boolean
    onClick?: () => void
}

export default function ChooseButton({ caption = 'Выбрать', withoutArrow = false, onClick = () => { }, ...props }: ChooseButtonProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <button className={`bg-accent hover:bg-[#4d5ef9] active:bg-accent outline-none px-[20px] py-[10px] text-[14px] font-[700] leading-[20px] rounded-lg text-white ${props.className ? props.className : ''}`}
            onClick={onClick}>
            <span>{caption}</span>
            {
                withoutArrow ? null : <span>&nbsp;<ArrowRightOutlined /></span>
            }
        </button>
    )
} 
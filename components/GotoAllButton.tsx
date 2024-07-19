'use client'

import { CSSProperties } from "react"
import { Button } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"

type AdditionalProps = {
    caption?: string,
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    className?: string,
}

type GotoAllButtonProps = React.PropsWithChildren<AdditionalProps>

export default function GotoAllButton({ caption = "caption", onClick = () => { }, ...props }: GotoAllButtonProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        onClick(event)
    }
    return (
        <Button className={`${props.className}`} type="primary" ghost onClick={handleClick}>
            <div className="flex flex-row items-center">
                {caption} &nbsp;<ArrowRightOutlined />
            </div>
        </Button>
    )
}
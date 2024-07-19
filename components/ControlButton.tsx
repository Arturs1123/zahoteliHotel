import Image from "next/image"

type ControlButtonProps = {
    disable?: boolean,
    type?: 'plus' | 'minus'
}

export default function ControlButton({ disable = false, type = 'plus', ...props }: ControlButtonProps & React.HTMLAttributes<HTMLDivElement>) {
    const bgColor = disable ? '#EEEEEE' : '#3C4EF21A'
    const icon = type === 'plus' ? '/icons/svg/Plus.svg' : disable ? '/icons/svg/minus disable.svg' : '/icons/svg/minus enable.svg'
    return (
        <span className={`bg-[${bgColor}] rounded-lg px-[4px] py-[4px] cursor-pointer w-[32px] h-[32px] inline-block`}>
            <Image src={icon} width={24} height={24} alt={type} />
        </span>
    )
}
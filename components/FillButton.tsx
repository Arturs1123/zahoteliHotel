import Image from "next/image"

export default function FillButton(
    { size = 'md', caption = '', onBtnClick = () => { }, isFullWidth = false, withArrow = false, ...props }:
        { size?: 'lg' | 'md' | 'sm', caption?: string, onBtnClick?: () => void, isFullWidth?: boolean, withArrow?: boolean } & React.HTMLAttributes<HTMLDivElement>
) {
    const properties = {
        lg: { rounded: '12px', px: '32px', py: '20px', fsize: 'md:text-h5 text-h6' },
        md: { rounded: '8px', px: '24px', py: '12px', fsize: 'text-[18px] font-[700] leading-[26px]' },
        sm: { rounded: '8px', px: '20px', py: '10px', fsize: 'text-[14px] font-[700] leading-[20px]' }
    }

    const { rounded, px, py, fsize } = properties[size]

    return (
        <button className={`${props.className ? props.className : ''} ${isFullWidth ? 'w-full' : ''} bg-accent text-white rounded-[${rounded}] px-[${px}] py-[${py}] ${fsize} flex items-center`} onClick={onBtnClick}>
            <span>{caption}</span>
            {withArrow ? <Image src="/icons/svg/arrow-right-white.svg" width={20} height={20} alt="arrow" className="ml-[8px]" /> : null}
        </button>
    )
}
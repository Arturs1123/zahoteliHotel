export default function GhostButton({ caption = '', onBtnClick = () => { }, plusIcon = false, ...props }: { caption?: string, onBtnClick?: () => void, plusIcon?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <button
            className={`${props.className ? props.className : ''} border border-[1.5px] border-accent rounded-[8px] px-[20px] py-[10px] text-accent font-[700] text-[14px] leading-[20px] flex justify-center`}
            onClick={onBtnClick}
        >
            {plusIcon ? <img src="/icons/svg/Plus.svg" className="w-[20px] h-auto mr-[8px]" /> : null}
            {caption}
        </button>
    )
}
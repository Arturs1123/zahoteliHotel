export default function GhostButton({ caption = '', ...props }: { caption?: string } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <button
            className={`${props.className ? props.className : ''} border border-[1.5px] border-accent rounded-[8px] px-[20px] py-[10px] text-accent font-[700] text-[14px] leading-[20px]`}
        >
            {caption}
        </button>
    )
}
type OutlineButtonProps = {
    caption?: string,
}

export default function OutlineButton({ caption = '' }: OutlineButtonProps) {
    return (
        <span className="text-[#3C4EF2] border-[1.5px] border-[#3C4EF2] px-[20px] py-[10px] rounded-lg cursor-pointer hover:bg-[#fffbfb]">{caption}</span>
    )
}
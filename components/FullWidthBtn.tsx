export default function FullWidthBtn({ caption, onClick }: { caption: string, onClick?: () => void }) {
    return (
        <button className="w-full px-[20px] py-[10px] text-white bg-accent rounded-lg outline-none hover:bg-[#596afd] active:bg-accent" onClick={onClick}>{caption}</button>
    )
}
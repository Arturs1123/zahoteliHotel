import Image from "next/image"

export default function ProfileButton({ onBtnClick = () => { }, ...props }: { onBtnClick?: () => void } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <button className={`${props.className ? props.className : ''} border border-[1.5px] border-accent rounded-[8px] w-[40px] h-[40px]`} onClick={onBtnClick}>
            <Image src="/icons/svg/user-profile.svg" width={20} height={20} alt="profile" className="mx-auto" />
        </button>
    )
}
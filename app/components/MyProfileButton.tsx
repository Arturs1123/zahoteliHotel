import Image from "next/image"

export default function MyProfileButton({
    onBtnClick = () => { },
    hasNewEmail = false,
    ...props
}: { onBtnClick?: () => void, hasNewEmail?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
    return <button className={`${props.className ? props.className : ''} bg-[#EEEEEE] rounded-[8px] w-[40px] h-[40px] relative`} onClick={onBtnClick}>
        <Image src="/icons/svg/user.svg" width={20} height={20} alt="profile" className="mx-auto" />
        {hasNewEmail ? <Image src="/icons/svg/new alarm.svg" width={12} height={12} alt="new alarm" className="absolute top-[-4px] right-[-4px]" /> : null}
    </button>
}
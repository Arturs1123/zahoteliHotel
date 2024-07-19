import Image from "next/image"

type ShareBtnProps = {
    type?: 'share' | 'favorite' | 'dislike'
}

const icons = {
    dislike: '/icons/svg/dislike.svg',
    favorite: '/icons/svg/favorite.svg',
    share: '/icons/svg/Share.svg'
}

export default function ShareBtn({ type = 'dislike', ...props }: ShareBtnProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <span className={`${props.className ? props.className : ''} p-[10px] rounded-full bg-[#FFFFFFCC] cursor-pointer`}>
            <Image src={icons[type]} width={20} height={20} alt="share" />
        </span>
    )
}
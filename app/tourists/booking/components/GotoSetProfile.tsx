import Image from "next/image"
import ChooseButton from "@/components/ChooseButton"
import Link from "next/link"

export default function GotoSetProfile() {
    return (
        <div className="md:flex md:items-center lg:w-[880px]">
            <div className="md:mr-[24px] flex-none">
                <Image src="/icons/svg/ic_hotel.svg" width={240} height={240} alt="hotel" />
            </div>
            <div className="grow">
                <p className="text-p1 mb-[24px]">Войдите в профиль, чтобы видеть историю ваших бронирований </p>
                <Link href="/tourists/profile"><ChooseButton caption="Войти в профиль" withoutArrow /></Link>
            </div>
        </div>
    )
}
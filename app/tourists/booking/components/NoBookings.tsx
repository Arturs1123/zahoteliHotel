import Image from "next/image"
import ChooseButton from "@/components/ChooseButton"
import Link from "next/link"

export default function NoBookings({ category = 'hotel', zeroHistory = false }: { category: 'hotel' | 'excursion', zeroHistory: boolean }) {
    return (
        <div className="md:flex md:items-center lg:w-[880px]">
            <div className="md:mr-[24px] flex-none">
                {category === 'hotel' ? <Image src="/icons/svg/ic_hotel.svg" width={240} height={240} alt="hotel" /> :
                    <Image src="/icons/svg/ic_hill&moutain.svg" width={240} height={240} alt="hotel" />
                }
            </div>
            <div className="grow">
                <p className="text-p1 mb-[24px]">
                    {category === 'hotel' ? zeroHistory ? 'У вас еще нет бронирований' : 'У вас еще нет предстоящих бронирований' : zeroHistory ? 'У вас еще нет бронирований' : 'У вас еще нет предстоящих бронирований'}
                </p>
                <Link href="/tourists/profile">
                    <ChooseButton caption={category === 'hotel' ? 'Забронировать отель' : 'Забронировать экскурсию'} withoutArrow />
                </Link>
            </div>
        </div>
    )
}
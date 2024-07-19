import ChooseButton from "@/components/ChooseButton"
import Image from "next/image"

export default function EmptyFavorite() {

    return (
        <div>
            <h3 className="md:text-h3 text-h4 md:mb-[24px] mb-[8px]">Избранное</h3>
            <div className="md:flex md:items-center lg:w-[880px]">
                <div className="md:mr-[24px] flex-none">
                    <Image src="/icons/svg/ic_favorite.svg" width={240} height={240} alt="profile" />
                </div>
                <div className="grow">
                    <p className="text-p1 mb-[24px]">Нажимайте на значок сердечка у понравившихся отелей и экскурсий, чтобы сохранить и просматривать их в этом разделе </p>
                    <ChooseButton caption="Выбрать отель" withoutArrow />
                </div>
            </div>
        </div>
    )
}
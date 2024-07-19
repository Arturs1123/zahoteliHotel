import ChooseButton from "@/components/ChooseButton"
import PrimaryButton from "@/components/PrimaryButton"
import PrimaryInput from "@/components/PrimaryInput"
import Image from "next/image"

export default function TouristMyProfile() {

    return (
        <div className="md:px-[120px] px-[16px] md:pt-[40px] pt-[16px] md:pb-[80px] pb-[32px]">
            <h3 className="md:text-h3 text-h4 md:mb-[24px] mb-[8px]">Профиль</h3>
            <div className="lg:flex lg:justify-between">
                <div className="lg:grow lg:pr-[10px]">
                    <div className="md:flex md:mb-[24px]">
                        <PrimaryInput placeholder="Имя" className="md:mr-[16px] md:mb-0 mb-[16px]" />
                        <PrimaryInput placeholder="Фамилия" className="md:mb-0 mb-[16px]" />
                    </div>
                    <div className="md:flex md:mb-[24px]">
                        <PrimaryInput placeholder="Имя" className="md:mr-[16px] md:mb-0 mb-[16px]" />
                        <PrimaryInput placeholder="Фамилия" className="md:mb-0 mb-[16px]" />
                    </div>
                    <img src="/adv/adv sm.svg" alt="advertise" className="w-full sm:hidden block mb-[16px]" />
                    <PrimaryButton caption="Выйти из профиля" className="md:mb-[24px] mb-[16px]" />
                </div>
                <img src="/adv/adv.svg" alt="advertise" className="middle:w-[560px] w-[50%] sm:block hidden" />
            </div>
        </div>
    )
}
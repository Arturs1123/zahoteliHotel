'use client'

import { useState } from "react";
import ChooseButton from "@/components/ChooseButton"
import Image from "next/image"
import PrimaryModal from "@/components/PrimaryModal";
import PrimaryInput from "@/components/PrimaryInput";
import FullWidthBtn from "@/components/FullWidthBtn";

const telephone = '+7 900 949 83 73'
const time = '00:59'
export default function TouristProfileWithoutAuth() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [smsModalOpen, setSMSModalOpen] = useState<boolean>(false);

    const handleClick = () => {
        setModalOpen(false)
        setSMSModalOpen(true)
    }
    return (
        <div className="md:px-[120px] px-[16px] md:pt-[40px] pt-[16px] md:pb-[80px] pb-[32px]">
            <h3 className="md:text-h3 text-h4 md:mb-[24px] mb-[8px]">Профиль</h3>
            <div className="md:flex md:items-center lg:w-[880px]">
                <div className="md:mr-[24px] flex-none">
                    <Image src="/icons/svg/profile.svg" width={240} height={240} alt="profile" />
                </div>
                <div className="grow">
                    <p className="text-p1 mb-[24px]">Войдите в профиль, чтобы видеть историю бронирований и накапливать кэшбек </p>
                    <ChooseButton caption="Войти в профиль" withoutArrow onClick={() => { setModalOpen(true) }} />
                </div>
            </div>
            <PrimaryModal
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <div>
                    <h4 className="text-h4 mb-[12px]">Вход в профиль</h4>
                    <p className="text-p3 mb-[60px]">Введите номер телефона, чтобы войти или зарегистрироваться</p>
                    <PrimaryInput placeholder="Номер телефона" className="mb-[24px]" />
                    <FullWidthBtn caption="Получить код по СМС" onClick={handleClick} />
                </div>
            </PrimaryModal>
            <PrimaryModal
                centered
                open={smsModalOpen}
                onOk={() => setSMSModalOpen(false)}
                onCancel={() => setSMSModalOpen(false)}
            >
                <div>
                    <h4 className="text-h4 mb-[12px]">Проверочный код</h4>
                    <p className="text-p3 mb-[12px]">Введите проверочный код из сообщения, отправленного на номер <span className="text-p3 font-[800]">{telephone}</span></p>
                    <p className="text-p3 mb-[24px]">Повторная отправка кода через: <span className="text-accent">{time}</span></p>
                    <PrimaryInput placeholder="Код из СМС" className="mb-[24px]" />
                    <FullWidthBtn caption="Отправить код повторно" />
                </div>
            </PrimaryModal>
        </div>
    )
}
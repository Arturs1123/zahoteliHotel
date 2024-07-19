import Link from 'next/link'
import GhostButton from "@/components/GhostButton"
import ProfileButton from "@/components/ProfileButton"
import { useState } from 'react'
import LoginModal from '@/components/LoginModal'

export default function Header() {
    const supporterPhoneNumber = '+7 900 900 90-90'
    const [modalVisible, setModalVisible] = useState(false)

    const handleShowLoginModal = () => {
        setModalVisible(true)
    }

    return (
        <div className="md:h-[94px] h-[48px] top-0 left-0 right-0 bg-[#FFFFFF] z-[100] md:border-b-[1px] fixed">
            <div className="max-w-[1440px] md:px-[120px] md:py-[20px] px-[16px] py-[8px] flex justify-between items-center mx-auto">
                <Link href="/">
                    <img src="/icons/svg/Logo.svg" alt="logo" title="logo" className="lg:w-[180px] lg:h-auto w-[144px] h-auto" />
                </Link>
                <div className="flex items-center">
                    <div className="lg:mr-[56px] mr-[12px]">
                        <h6 className="lg:text-[20px] lg:leading-[27.32px] font-[800] text-[14px] leading-[20px] lg:mb-[2px] mb-0">{supporterPhoneNumber}</h6>
                        <p className="lg:text-p4 text-p5 text-custom-gray">Ваша поддержка</p>
                    </div>
                    <GhostButton caption="Войти в кабинет" className="lg:block hidden" onBtnClick={handleShowLoginModal} />
                    <ProfileButton className="lg:hidden block" onBtnClick={handleShowLoginModal} />
                </div>
            </div>
            <LoginModal isOpen={modalVisible} onClose={() => { setModalVisible(false) }} />
        </div>
    )
}
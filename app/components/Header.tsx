import Link from 'next/link'
import { jwtDecode } from "jwt-decode"
import GhostButton from "@/components/GhostButton"
import ProfileButton from "@/components/ProfileButton"
import { useEffect, useState } from 'react'
import LoginModal from '@/components/LoginModal'
import MyProfileMenu from './MyProfileMenu'

type JwtPayload = {
    name: string
    mail: string
}
export default function Header() {
    useEffect(() => {
        const token = localStorage.getItem('hotel-owner-token')
        if (token) {
            const { name, mail } = jwtDecode(token) as JwtPayload
            setIsAuthenticated(true)
            setName(name)
            setMail(mail)
        } else {
            setIsAuthenticated(false)
            setName('')
            setMail('')
        }
    }, [])
    const supporterPhoneNumber = '+7 900 900 90-90'
    const [modalVisible, setModalVisible] = useState(false)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [hasNewEmail, setHasNewEmail] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleShowLoginModal = () => {
        setModalVisible(true)
    }

    return (
        <div className="md:h-[94px] h-[48px] top-0 left-0 right-0 z-[100] md:border-b-[1px] fixed bg-[#F9F9F9]">
            <div className="max-w-[1440px] md:px-[120px] md:py-[20px] px-[16px] py-[8px] flex justify-between items-center mx-auto">
                <Link href="/">
                    <img src="/icons/svg/Logo.svg" alt="logo" title="logo" className="lg:w-[180px] lg:h-auto w-[144px] h-auto" />
                </Link>
                <div className="flex items-center">
                    <div className="lg:mr-[56px] mr-[12px]">
                        <h6 className="lg:text-[20px] lg:leading-[27.32px] font-[800] text-[14px] leading-[20px] lg:mb-[2px] mb-0">{supporterPhoneNumber}</h6>
                        <p className="lg:text-p4 text-p5 text-custom-gray">Ваша поддержка</p>
                    </div>
                    {!isAuthenticated ? <><GhostButton caption="Войти в кабинет" className="lg:block hidden" onBtnClick={handleShowLoginModal} />
                        <ProfileButton className="lg:hidden block" onBtnClick={handleShowLoginModal} /></> : <>
                        <MyProfileMenu name={name} mail={mail} hasNewEmail={hasNewEmail} />
                    </>}
                </div>
            </div>
            <LoginModal isOpen={modalVisible} onClose={() => { setModalVisible(false) }} />
        </div>
    )
}
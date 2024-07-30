import Link from 'next/link'
import GhostButton from "@/components/GhostButton"
import ProfileButton from "@/components/ProfileButton"
import { useEffect, useState } from 'react'
import LoginModal from '@/components/LoginModal'
import RegisterModal from './RegisterModal'
import MyProfileMenu from './MyProfileMenu'
import decodedJWT, { DecodedJWTType } from '@/helper/decodedJWT'
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    useEffect(() => {
        const decodedData: DecodedJWTType = decodedJWT()
        if (decodedData.isAuthenticated) {
            const { name, mail } = decodedData
            setIsAuthenticated(true)
            setName(name)
            setMail(mail)
        } else {
            setIsAuthenticated(false)
            setName(undefined)
            setMail(undefined)
            router.push('/')
        }
    }, [])
    const supporterPhoneNumber = '+7 900 900 90-90'
    const [modalVisible, setModalVisible] = useState(false)
    const [name, setName] = useState<string | undefined>()
    const [mail, setMail] = useState<string | undefined>()
    const [hasNewEmail, setHasNewEmail] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const handleShowLoginModal = () => {
        setModalVisible(true)
    }
    const closeSignupModal = () => {
        setIsSignupModalOpen(false);
    };

    const handleClickGotoRegister = () => {
        setModalVisible(false)
        setIsSignupModalOpen(true)
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
            <LoginModal isOpen={modalVisible} onClose={() => { setModalVisible(false) }} onClickGotoRegister={handleClickGotoRegister} />
            <RegisterModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
        </div>
    )
}
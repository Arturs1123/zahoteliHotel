import { useState } from "react";
import Clamp from 'react-multiline-clamp';
import MyProfileButton from "./MyProfileButton";
import { useRouter } from 'next/navigation';

export default function MyProfileMenu({ name = '', mail = '', hasNewEmail = true }: { name?: string, mail?: string, hasNewEmail?: boolean }) {
    const router = useRouter();

    const [toggle, setToggle] = useState<boolean>(false)

    const handleClickWorkspace = () => {
        router.push('/information')
    }

    const handleClickLogout = () => {
        localStorage.removeItem('hotel-owner-token')
        window.location.href = "/"
    }

    return (
        <div onClick={() => setToggle(!toggle)} className="cursor-pointer relative">
            <div className="flex items-center">
                <MyProfileButton hasNewEmail={hasNewEmail} />
                <div className="lg:flex hidden items-center ml-[16px]">
                    <div className="w-[253px] mr-16px">
                        <div>
                            <h6 className="text-h6 mb-[2px]">{name}</h6>
                            <div className="flex justify-between items-center">
                                <Clamp lines={1} withTooltip>
                                    <span className="text-p4 text-[#919494] inline-block">{mail}</span>
                                </Clamp>
                                {hasNewEmail ? <span className="rounded-[24px] ml-[8px] bg-[#FFC226] text-p5 px-[6px] py-[2px] flex-none">Подтвердите почту</span> : null}
                            </div>
                        </div>
                    </div>
                    <img src={toggle ? '/icons/svg/collapse-up.svg' : '/icons/svg/collapse-down.svg'} className="w-[20px] h-auto" />
                </div>
            </div>
            {toggle ? <div className="w-[300px] bg-[#F9F9F9] absolute md:top-[74px] md:top-[10px] p-[10px] shadow-md right-0  rounded-b-lg text-custom-gray text-p3 text-right">
                <p className=" cursor-pinter p-[10px] border-b" onClick={handleClickLogout}>выйти</p>
                <p className=" cursor-pinter p-[10px]" onClick={handleClickWorkspace}>управление</p>
            </div> : null}

        </ div >
    )
}
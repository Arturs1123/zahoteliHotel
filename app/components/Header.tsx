'use client'

import Image from "next/image"
import { useState } from "react"
import Link from 'next/link'

export default function Header() {
    const [expanded, setExpanded] = useState(false)

    const MenuItems = ({ className = "" }: { className?: string }) => {
        return (
            <div className={className}>
                <nav className="flex lg:flex-row flex-col lg:items-center lg:shadow-none shadow-md">
                    <span className="cursor-pointer rounded-lg flex items-center hover:bg-[#3C4EF21A] bg-[#3C4EF21A] text-base leading-[24px] px-[16px] py-[12px] lg:mr-[8px] text-accent"><Image src="/icons/svg/home-2.svg" alt="home" title="home" width={24} height={24} className="mr-1" />Главная</span>
                    <span className="cursor-pointer rounded-lg flex items-center hover:bg-[#3C4EF21A] text-base leading-[24px] px-[16px] py-[12px] lg:mr-[8px]"><Image src="/icons/svg/Like1.svg" alt="like" title="like" width={24} height={24} className="mr-1" />Избранное</span>
                    <span className="cursor-pointer rounded-lg flex items-center hover:bg-[#3C4EF21A] text-base leading-[24px] px-[16px] py-[12px] lg:mr-[8px]"><Image src="/icons/svg/briefcase.svg" alt="briefcase" title="briefcase" width={24} height={24} className="mr-1" />Бронирования</span>
                    <span className="cursor-pointer rounded-lg flex items-center hover:bg-[#3C4EF21A] text-base leading-[24px] px-[16px] py-[12px] lg:mr-[8px]"><Image src="/icons/svg/user.svg" alt="user" title="user" width={24} height={24} className="mr-1" />Мой профиль</span>
                    <span className="lg:block hidden cursor-pointer"><Image src="/icons/svg/Search.svg" alt="search" title="search" width={24} height={24} /></span>
                </nav>
            </div>
        )
    }

    return (
        <div className="fixed lg:h-[94px] h-auto top-0 left-0 right-0 bg-[#FFFFFF] z-[100]">
            <div className="max-w-[1440px] mx-auto lg:px-[120px] lg:py-[20px] px-[16px] py-[8px]">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <img src="/icons/svg/Logo.svg" alt="logo" title="logo" width={180} height={37.6} className="lg:w-[180px] lg:h-[37.6px] w-[144px] h-[30px]" />
                    </Link>
                    <span className="lg:hidden block flex">
                        <span className="cursor-pointer mr-[24px]"><Image src="/icons/svg/Search.svg" alt="search" title="search" width={24} height={24} /></span>
                        {
                            expanded ?
                                <span className="cursor-pointer" onClick={() => { setExpanded(false) }}><Image src="/icons/svg/Close.svg" alt="close" title="close" width={24} height={24} /></span>
                                : <span className="cursor-pointer" onClick={() => { setExpanded(true) }}><Image src="/icons/svg/menu.svg" alt="menu" title="menu" width={24} height={24} /></span>
                        }
                    </span>
                    <div className="lg:block hidden">
                        <MenuItems />
                    </div>
                </div>
                {
                    expanded ? <div className="lg:hidden block mt-[28px]">
                        <MenuItems />
                    </div> : null
                }
            </div>
        </div>
    )
}


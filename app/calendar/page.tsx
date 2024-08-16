'use client'

import { useState, useEffect } from "react"
import PendingStatus from "@/components/PendingStatus"
import NavMenu from "../components/navmenu"
import PendingInfo from "../information/components/pending-info"
import { getMyHotelData } from "@/app/backend_apis";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { HotelInfoType } from "../information/page"

export default function RatePage() {
    const router = useRouter()
    const [status, setStatus] = useState<'empty' | 'pending' | 'allowed'>('allowed')
    const [hotelData, setHotelData] = useState<HotelInfoType | null>(null)
    useEffect(() => {
        getMyHotelData()
            .then(res => {
                if (res.status === 'empty') {
                    toast.error('У вас нет отеля. Сначала вам нужно зарегистрировать свой отель.')
                    router.push('/register')
                    return
                } else if (res.status === 'pending') {
                    setStatus('pending')
                    setHotelData(res.hotel)
                } else if (res.status === 'allowed') {
                    setStatus('allowed')
                    setHotelData(res.hotel)
                }
            })
    }, [])
    return (
        <div className="px-[16px]">
            <div className="max-w-[1320px] mx-auto ">
                {status === 'allowed' ? <div></div> : <div><PendingInfo /></div>}
                <NavMenu />
                <PendingStatus />
            </div>
        </div>
    )
}
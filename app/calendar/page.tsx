'use client'

import { useState } from "react"
import PendingStatus from "@/components/PendingStatus"
import NavMenu from "../components/navmenu"
import PendingInfo from "../information/components/pending-info"

export default function CalendarPage() {
    const [status, setStatus] = useState<'empty' | 'pending' | 'allowed'>('empty')

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
import { useState } from "react"

export default function NavMenu() {
    type MenuItem = 'info' | 'number' | 'rate' | 'calendar' | 'reservation'
    const [curmenu, setCurmenu] = useState<MenuItem>('info')
    const handleClickMenu = (menuItem: MenuItem) => {
        setCurmenu(menuItem)
    }

    return (
        <div className="md:py-[12px] py-[8px] flex justify-between overflow-auto border-t border-b">
            <span className="flex items-center px-[24px] md:py-[12px] py-[10px] rounded-[8px] bg-[#3C4EF21A] cursor-pointer md:min-w-[193px] min-w-[140px]" style={{ backgroundColor: curmenu === 'info' ? '#3C4EF21A' : 'transparent' }} onClick={() => handleClickMenu('info')}>
                <img src="/icons/svg/house-2.svg" className="md:w-[24px] w-[20px] h-auto mr-[8px]" />
                <span className="md:text-p2 text-p4">Информация</span>
            </span>
            <span className="flex items-center px-[24px] md:py-[12px] py-[10px] rounded-[8px] bg-[#3C4EF21A] cursor-pointer md:min-w-[193px] min-w-[140px]" style={{ backgroundColor: curmenu === 'number' ? '#3C4EF21A' : 'transparent' }} onClick={() => handleClickMenu('number')}>
                <img src="/icons/svg/pull-door 1.svg" className="md:w-[24px] w-[20px] h-auto mr-[8px]" />
                <span className="md:text-p2 text-p4">Номера</span>
            </span>
            <span className="flex items-center px-[24px] md:py-[12px] py-[10px] rounded-[8px] bg-[#3C4EF21A] cursor-pointer md:min-w-[193px] min-w-[140px]" style={{ backgroundColor: curmenu === 'rate' ? '#3C4EF21A' : 'transparent' }} onClick={() => handleClickMenu('rate')}>
                <img src="/icons/svg/note-2.svg" className="md:w-[24px] w-[20px] h-auto mr-[8px]" />
                <span className="md:text-p2 text-p4">Тарифы</span>
            </span>
            <span className="flex items-center px-[24px] md:py-[12px] py-[10px] rounded-[8px] bg-[#3C4EF21A] cursor-pointer md:min-w-[193px] min-w-[140px]" style={{ backgroundColor: curmenu === 'calendar' ? '#3C4EF21A' : 'transparent' }} onClick={() => handleClickMenu('calendar')}>
                <img src="/icons/svg/calendar_accent.svg" className="md:w-[24px] w-[20px] h-auto mr-[8px]" />
                <span className="md:text-p2 text-p4">Календарь и цены</span>
            </span>
            <span className="flex items-center px-[24px] md:py-[12px] py-[10px] rounded-[8px] bg-[#3C4EF21A] cursor-pointer md:min-w-[193px] min-w-[140px]" style={{ backgroundColor: curmenu === 'reservation' ? '#3C4EF21A' : 'transparent' }} onClick={() => handleClickMenu('reservation')}>
                <img src="/icons/svg/receipt-text.svg" className="md:w-[24px] w-[20px] h-auto mr-[8px]" />
                <span className="md:text-p2 text-p4">Бронирования</span>
            </span>
        </div>
    )
}
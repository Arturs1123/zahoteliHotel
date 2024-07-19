'use client'

import { useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import RecommendPlaces from './RecommendPlaces';
import { useDebouncedCallback } from 'use-debounce';
import RangePicker from '@/components/RangePicker';
import moment from 'moment';

export default function SearchBar({ className = '', places = [] }: { className?: string, places?: string[] }) {
    const searchParams = useSearchParams();
    const initialTerm = searchParams.get('search')?.toString()
    const pathname = usePathname();
    const { replace } = useRouter();
    const [term, setTerm] = useState<string>(initialTerm ? initialTerm : '')
    const [recommendPlacesVisible, setRecommendPlacesVisible] = useState<boolean>(false)
    const [calendarVisible, setCalendarVisible] = useState<boolean>(false)
    const [checkInDay, setCheckInDay] = useState<moment.Moment | null>(null)
    const [checkOutDay, setCheckOutDay] = useState<moment.Moment | null>(null)

    const onSearchChange = (term: string) => {
        setTerm(term)
        debouncedCallback(term)
    }

    const debouncedCallback = useDebouncedCallback((term: string) => {
        setTerm(term)
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 1000)
    const handleClose = (place?: string) => {
        if (place) onSearchChange(place)
        setTimeout(() => {
            setRecommendPlacesVisible(false)
        }, 100)
    }
    const handleCheckInOutClick = () => {
        setCalendarVisible(!calendarVisible)
    }

    const handleCalendarChange = (startDay: moment.Moment | null, endDay: moment.Moment | null) => {
        setCheckInDay(startDay)
        setCheckOutDay(endDay)
    }

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    return (
        <div className={`${className} relative`}>
            <div className="bg-accent flex middle:flex-row flex-col p-[3px] rounded-xl ">
                <div className="middle:p-[24px] p-[16px] rounded-xl grow bg-white flex middle:flex-row flex-col">

                    <div className="flex items-center middle:justify-center middle:border-r middle:text-[20px] text-[16px] middle:border-b-0 border-b middle:pb-0 pb-3">
                        <img src="/icons/svg/location.svg" alt="location" className="w-24[px] h-[24px]" />&nbsp;
                        <input
                            type="text"
                            placeholder="Куда вы хотите поехать?"
                            value={term}
                            className="outline-none middle:grow-0 grow "
                            onChange={(e) => {
                                onSearchChange(e.target.value)
                            }}
                            onFocus={() => setRecommendPlacesVisible(true)}
                            onBlur={() => handleClose()}
                        />
                    </div>

                    <div className="middle:flex middle:justify-between middle:border-b-0 border-b grid grid-cols-2 divide-x middle:py-0 py-[10px]">
                        <div className="flex items-center middle:justify-center border-r middle:px-5 text-[20px] cursor-pointer" onClick={handleCheckInOutClick}>
                            <img src="/icons/svg/calendar.svg" alt="calendar" className="w-[24px] h-[24p]" />&nbsp;&nbsp;
                            <span className="text-base text-custom-gray middle:text-[20px] text-[16px]">{checkInDay ? checkInDay.format('DD') + ' ' + months[checkInDay.get('month') + 1] : 'Дата заезда'}</span>
                        </div>
                        <div className="flex items-center middle:justify-center justify-end middle:border-r border-r-0 middle:px-5 text-[20px] cursor-pointer" onClick={handleCheckInOutClick}>
                            <img src="/icons/svg/calendar.svg" alt="calendar" className="w-[24px] h-[24px]" />&nbsp;&nbsp;
                            <span className="text-base text-custom-gray middle:text-[20px] text-[16px]">{checkOutDay ? checkOutDay.format('DD') + ' ' + months[checkOutDay.get('month') + 1] : 'Дата выезда'}</span>
                        </div>
                    </div>

                    <div className="flex items-center middle:justify-center middle:px-5 middle:text-[20px] text-[16px] middle:py-0 pt-[10px] cursor-pointer">
                        <span>2 взрослых</span>&nbsp;
                        <img src="/icons/svg/arrow-down.svg" alt="arrow down" className="w-[24px] h-[24px]" />
                    </div>

                </div>
                <div className="text-white middle:py-[24px] middle:px-[24px] text-[20px] font-bold text-center py-[16px]">Найти</div>
            </div >
            <RecommendPlaces
                search={term}
                places={places}
                className={`absolute middle:top-[84px] top-[59px] left-[10px] ${recommendPlacesVisible ? 'visible' : 'invisible'}`}
                handleClick={(place) => handleClose(place)}
            />
            <RangePicker
                className={`z-[50] bg-white absolute middle:top-[84px] top-[110px] left-[10px] ${calendarVisible ? 'visible' : 'invisible'}`}
                onCalendarChange={handleCalendarChange}
                onClose={() => { setCalendarVisible(false) }}
            />
        </div >
    )
}
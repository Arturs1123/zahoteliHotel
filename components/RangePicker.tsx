'use client'

import { useEffect, useState } from "react"
import MonoCalendar from "./MonoCalendar"
import moment from "moment"
import Image from "next/image"

type RangePickerProps = {
    from?: moment.Moment
    to?: moment.Moment
    onCalendarChange?: (startDay: moment.Moment | null, endDay: moment.Moment | null) => void,
    onClose?: () => void,
}

export default function RangePicker({ from, to, onCalendarChange = () => { }, onClose = () => { }, ...props }: RangePickerProps & React.HTMLAttributes<HTMLDivElement>) {
    const currentDate = moment().toString()
    const [leftCalendarDate, setLeftCalendarDate] = useState(moment(currentDate))
    const [rightCalendarDate, setRightCalendarDate] = useState(moment(currentDate).add(1, 'months'))
    const [leftArrowVisible, setLeftArrowVisible] = useState(false)
    const [startDay, setStartDay] = useState<moment.Moment | null>(null)
    const [endDay, setEndDay] = useState<moment.Moment | null>(null)
    const [clickAmount, setClickAmount] = useState(1)
    let day1: moment.Moment | null = null
    let day2: moment.Moment | null = null

    const handleRightArrow = () => {
        setLeftCalendarDate(moment(leftCalendarDate.toString()).add(2, 'months'))
        setRightCalendarDate(moment(rightCalendarDate.toString()).add(2, 'months'))
    }

    const handleLeftArrow = () => {
        setLeftCalendarDate(moment(leftCalendarDate.toString()).subtract(2, 'months'))
        setRightCalendarDate(moment(rightCalendarDate.toString()).subtract(2, 'months'))
    }

    useEffect(() => {
        if (moment(currentDate).isBefore(leftCalendarDate)) {
            setLeftArrowVisible(true)
        } else {
            setLeftArrowVisible(false)
        }
    }, [leftCalendarDate])

    const handleClick = (day: moment.Moment) => {
        if (clickAmount === 1) {
            setEndDay(null)
            setStartDay(day)
            setClickAmount(2)
        }
        if (clickAmount === 2) {
            if (startDay?.isBefore(day)) {
                setEndDay(day)
            } else {
                setEndDay(startDay)
                setStartDay(day)
            }
            setClickAmount(1)
            onClose()
        }
    }

    useEffect(() => {
        onCalendarChange(startDay, endDay)
    }, [startDay, endDay])

    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="grid grid-cols-2 rounded-[16px] shadow-md gap-[32px] w-[744px] p-[24px] relative">
                <MonoCalendar year={leftCalendarDate.get('year')} month={leftCalendarDate.get('month') + 1} startDay={startDay} endDay={endDay} onClick={handleClick} />
                <MonoCalendar year={rightCalendarDate.get('year')} month={rightCalendarDate.get('month') + 1} startDay={startDay} endDay={endDay} onClick={handleClick} />
                {
                    leftArrowVisible ? <Image src="/icons/svg/calendar-arrow-right.svg" width={40} height={40} alt="arrow" className="cursor-pointer rotate-180 absolute top-[24px] left-[24px]" onClick={handleLeftArrow} /> : null
                }
                <Image src="/icons/svg/calendar-arrow-right.svg" width={40} height={40} alt="arrow" className="cursor-pointer absolute top-[24px] right-[24px]" onClick={handleRightArrow} />
            </div>
        </div>
    )
}
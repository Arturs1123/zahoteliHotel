'use client'
import moment from "moment";
import clsx from "clsx";
type DayType = {
    year: number,
    month: number,
    day: number,
    isWeekend: boolean,
    isToday: boolean,
    startDay?: moment.Moment,
    endDay?: moment.Moment,
    isStartDay: boolean,
    isEndDay: boolean,
    isInRange: boolean,
}

type CalendarPropsType = {
    year?: number,
    month?: number,
    startDay: moment.Moment | null,
    endDay: moment.Moment | null,
    onClick?: (day: moment.Moment) => void,
}

const MonoCalendar = ({ year = moment().get('year'), month = moment().get('month') + 1, onClick = () => { }, startDay, endDay }: CalendarPropsType) => {
    const weekdays = ['Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Пн', 'Вс'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const firstDayOfMonth = moment.utc(`${year}-${month}-01`);
    const daysInMonth = firstDayOfMonth.daysInMonth();
    const weekdayOfFirstDay = firstDayOfMonth.isoWeekday();
    const arrOfDays: DayType[] = []
    let date = 0
    let isEnableDay = false
    for (let day = 1; day <= 42; day++) {
        if (day === weekdayOfFirstDay) isEnableDay = true
        if (date >= daysInMonth) isEnableDay = false
        if (isEnableDay) date++; else date = 0
        const isToday = year === moment().get('year') && month === moment().get('month') + 1 && date === moment().get('date')
        const isStartDay = year === startDay?.get('year') && month === startDay?.get('month') + 1 && date === startDay?.get('date')
        const isEndDay = year === endDay?.get('year') && month === endDay?.get('month') + 1 && date === endDay?.get('date')
        const isInRange = moment(`${year}-${month}-${date}`).isAfter(startDay) && moment(`${year}-${month}-${date}`).isBefore(endDay)
        arrOfDays.push({ year, month, day: date, isWeekend: (day % 7 === 6 || day % 7 === 0), isToday, isStartDay, isEndDay, isInRange })
    }

    const cellStyleForCommon = 'border-y-0 border-x-[2px] border-white text-[16px] leading-[24px] flex-none rounded-[8px] w-[48px] h-[44px] flex items-center justify-center cursor-pointer'
    const cellStyelForToday = 'border border-accent text-accent'
    const cellStyleForBusy = 'bg-[#E139141A] text-[#E13914]'
    const cellStyleForFree = 'bg-[#3BA87E1A] text-[#3BA87E]'
    const cellStyleForDisable = 'bg-[#EEEEEE1A] text-[#EEEEEE]'
    const cellStyelForNormal = 'bg-[#F9F9F9] text-[#292D32]'
    const cellStyelForWeekend = 'bg-[#F9F9F9] text-[#E13914]'
    const cellStyleForStartDay = 'rounded-tr-none rounded-br-none !bg-accent border-r-accent text-white'
    const cellStyleForEndDay = 'rounded-tl-none rounded-bl-none !bg-accent border-l-accent text-white'
    const cellStyleForInRange = 'rounded-none !bg-accent text-white'

    const handleClick = (dayItem: DayType) => {
        onClick(moment(`${dayItem.year}-${dayItem.month}-${dayItem.day}`))
    }

    return (
        <div>
            <div className="w-[332px]">
                <h5 className="text-h5 text-[#292D32] text-center mb-[32px]">{months[month - 1]} {year}</h5>
                <div className="flex mb-[18px]">
                    {
                        weekdays.map((week, i) =>
                            <span key={week} className={`text-p3 text-custom-gray w-[44px] h-[24px] text-center ${i !== 6 ? 'mr-[4px]' : ''}`}>{week}</span>
                        )
                    }
                </div>
                <div>
                    {Array(6).fill(0).map((v, i) => <div key={i} className="flex mb-[4px]">
                        {Array(7).fill(0).map((w, j) => {
                            const dayItem = arrOfDays[i * 7 + j]
                            return <span
                                onClick={() => handleClick(dayItem)}
                                key={i * 7 + j}
                                className={clsx(
                                    { 'border-y-0 border-x-[2px] border-white text-[16px] leading-[24px] flex-none rounded-[8px] w-[48px] h-[44px] flex items-center justify-center cursor-pointer bg-[#F9F9F9] text-[#292D32] font-[700]': true },
                                    { 'border border-t-[2px] border-b-[2px] !border-accent text-accent': dayItem.isToday },
                                    { 'bg-[#F9F9F9] text-[#E13914]': dayItem.isWeekend },
                                    { 'rounded-tr-none rounded-br-none !bg-[#3041D9] border-r-accent text-white': dayItem.isStartDay },
                                    { 'rounded-tl-none rounded-bl-none !bg-[#3041D9] border-l-accent text-white': dayItem.isEndDay },
                                    { 'rounded-none !bg-accent text-white border-x-accent': dayItem.isInRange },
                                    { '!bg-white': dayItem.day === 0 }
                                )}
                            >
                                {dayItem.day !== 0 ? dayItem.day : ''}
                            </span>
                        })}
                    </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default MonoCalendar;
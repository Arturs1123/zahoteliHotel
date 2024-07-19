'use client'

import { useState } from "react"
import CategorySelect from "@/components/CategoryList"
import ExcursionsFilter from "./components/Filter"
import { ExcursionItemProps } from "./components/ExcursionItem"
import ExcursionItem from "./components/ExcursionItem"

const categories = [
    { icon: '', label: 'Bce' },
    { icon: '/icons/svg/Group.svg', label: 'В Абхазии' },
    { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
    { icon: '/icons/svg/Mount Fuji.svg', label: 'В горы' },
    { icon: '/icons/svg/Classical Building.svg', label: 'Места' },
    { icon: '/icons/svg/Beach With Umbrella.svg', label: 'Морские' }
]

const lowerPriceLimit = 500
const searchedAmount = 1654

const excursions: ExcursionItemProps[] = [
    {
        thumbnail: '/thumbs/excursions/excursion1.png',
        houseType: 'Гостевой дом',
        star: 5,
        isMyFavorite: true,
        rating: { number: 10.0, label: 'Прекрасно' },
        commentAmount: 120,
        excursionName: 'Гостевой дом в Тихой Гавани',
        address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
        services: [
            { icon: '/icons/svg/Users.svg', label: 'Групповая до 10 человек' },
            { icon: '/icons/svg/Time.svg', label: '3 часа' },
            { icon: '/icons/svg/guider.svg', label: 'С гидом' },
            { icon: '/icons/svg/bus front.svg', label: 'Автобусная' },
        ],
        bonus: [{ label: 'Популярная', color: '#3BA87E' }, { label: 'Необычная', color: '#3C4EF2' }, { label: 'Достопримечательности', color: '#DAA009' }],
        price: 1500,
        capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2',
        description: 'Вы посетите ущелье Ахцу, наберете воды из нарзанного источника и продегустируете мед с вином в горном кафе. На курортах Красной Поляны, среди сказочных пейзажей, узнаете о развит',
    },
    {
        thumbnail: '/thumbs/excursions/excursion2.png',
        houseType: 'Гостевой дом',
        star: 5,
        isMyFavorite: true,
        rating: { number: 10.0, label: 'Прекрасно' },
        commentAmount: 120,
        excursionName: 'Гостевой дом в Тихой Гавани',
        address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
        services: [
            { icon: '/icons/svg/Users.svg', label: 'Групповая до 10 человек' },
            { icon: '/icons/svg/Time.svg', label: '3 часа' },
            { icon: '/icons/svg/guider.svg', label: 'С гидом' },
            { icon: '/icons/svg/bus front.svg', label: 'Автобусная' },
        ],
        bonus: [{ label: 'Популярная', color: '#3BA87E' }, { label: 'Необычная', color: '#3C4EF2' }, { label: 'Достопримечательности', color: '#DAA009' }],
        price: 1500,
        capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2',
        description: 'Вы посетите ущелье Ахцу, наберете воды из нарзанного источника и продегустируете мед с вином в горном кафе. На курортах Красной Поляны, среди сказочных пейзажей, узнаете о развит',
    },
    {
        thumbnail: '/thumbs/excursions/excursion3.png',
        houseType: 'Гостевой дом',
        star: 5,
        isMyFavorite: true,
        rating: { number: 10.0, label: 'Прекрасно' },
        commentAmount: 120,
        excursionName: 'Гостевой дом в Тихой Гавани',
        address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
        services: [
            { icon: '/icons/svg/Users.svg', label: 'Групповая до 10 человек' },
            { icon: '/icons/svg/Time.svg', label: '3 часа' },
            { icon: '/icons/svg/guider.svg', label: 'С гидом' },
            { icon: '/icons/svg/bus front.svg', label: 'Автобусная' },
        ],
        bonus: [{ label: 'Популярная', color: '#3BA87E' }, { label: 'Необычная', color: '#3C4EF2' }, { label: 'Достопримечательности', color: '#DAA009' }],
        price: 1500,
        capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2',
        description: 'Вы посетите ущелье Ахцу, наберете воды из нарзанного источника и продегустируете мед с вином в горном кафе. На курортах Красной Поляны, среди сказочных пейзажей, узнаете о развит',
    },
]

export default function Excursions() {
    const [filterExpanded, setFilterToggle] = useState(false)
    const [sortByExpanded, setSortByToggle] = useState(false)

    return (
        <div className="md:px-[60px] px-[16px] md:py-[40px] py-[32px] middle:flex">
            <ExcursionsFilter className="md:w-[306px] flex-none md:mr-[24px] middle:block hidden" />
            <div className="grow">
                <div className="md:mb-[24px] mb-[20px]">
                    <h3 className="md:text-h3 text-h4 md:mb-[12px] mb-[8px]">Экскурсии в Сочи, Краснодарский край</h3>
                    <p className="text-custom-gray md:text-p1 text-p3">{searchedAmount} варианта от {lowerPriceLimit} ₽</p>
                </div>
                <CategorySelect items={categories} className="md:mb-[24px] middle:block hidden" />
                <div className="middle:hidden block relative mb-[20px]">
                    <div className="flex flex-wrap justify-between">
                        <button className="border border-accent text-[14px] font-semibold leading-[20px] px-[20px] py-[10px] rounded-lg flex items-center" onClick={() => setFilterToggle(!filterExpanded)} >
                            <span className="mr-[8px] text-accent">Фильтры</span>
                            <img src="/icons/svg/Filter.svg" alt="filter" className="w-[20px]" />
                        </button>
                        <button className="text-[14px] font-semibold leading-[20px] px-[20px] py-[10px] flex items-center" onClick={() => setSortByToggle(!sortByExpanded)}>
                            <span className="mr-[8px] text-accent">Сортировать по</span>
                            {
                                sortByExpanded ? <img src="/icons/svg/arrow-down-accent.svg" alt="filter" className="w-[20px] rotate-180" /> :
                                    <img src="/icons/svg/arrow-down-accent.svg" alt="filter" className="w-[20px]" />
                            }

                        </button>
                    </div>
                    {
                        filterExpanded ? <div className="absolute top-[50px] z-[100] bg-white w-full"><ExcursionsFilter className="shadow-md" /></div> : null
                    }
                    {
                        sortByExpanded ? <div className="absolute top-[50px] z-[100] bg-white w-full shadow-md">
                            <CategorySelect items={categories} />
                        </div> : null
                    }
                </div>

                {
                    excursions.map((item, i) => (
                        <ExcursionItem key={i} {...item} className="lg:mb-[24px] mb-[20px]" />
                    ))
                }
            </div>
        </div>
    )
}
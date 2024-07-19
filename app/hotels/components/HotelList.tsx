'use client'

import CategorySelect, { CategorySelectProps } from "@/components/CategoryList";
import HotelItem, { HotelItemProps } from "./HotelItem";
import { Button } from "antd";
import { useState } from "react";
import HotelFilter from "./HotelFilter";

export default function HotelList() {
    const categoryItems = [
        { icon: '', label: 'По популярности' },
        { icon: '', label: 'По рейтингу' },
        { icon: '', label: 'Со скидками' },
        { icon: '', label: 'Сначала дешевые' },
        { icon: '/icons/svg/discount-shape.svg', label: 'Сначала дорогие' },
    ]

    const hotels: HotelItemProps[] = [
        {
            thumbnails: [
                '/thumbs/hotels/hotel_thumb1.jpeg',
                '/thumbs/hotels/hotel_thumb2.png',
                '/thumbs/hotels/hotel_thumb3.png'
            ],
            houseType: 'Гостевой дом',
            star: 5,
            isMyFavorite: true,
            rating: { number: 10.0, label: 'Прекрасно' },
            commentAmount: 120,
            hotelName: 'Гостевой дом в Тихой Гавани',
            address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
            services: [
                { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
                { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
                { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
                { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
            ],
            bonus: [{ label: 'Скидка 20%', color: '#3BA87E' }, { label: 'Завтрак включен', color: '#3C4EF2' }, { label: 'Трансфер включен', color: '#DAA009' }],
            price: {
                isDiscounted: true,
                original: 150000,
                discounted: 120000
            },
            capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2'
        },
        {
            thumbnails: [
                '/thumbs/hotels/hotel_thumb1.jpeg',
                '/thumbs/hotels/hotel_thumb2.png',
                '/thumbs/hotels/hotel_thumb3.png'
            ],
            houseType: 'Гостевой дом',
            star: 5,
            isMyFavorite: true,
            rating: { number: 10.0, label: 'Прекрасно' },
            commentAmount: 120,
            hotelName: 'Гостевой дом в Тихой Гавани',
            address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
            services: [
                { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
                { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
                { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
                { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
            ],
            bonus: [{ label: 'Скидка 20%', color: '#3BA87E' }, { label: 'Завтрак включен', color: '#3C4EF2' }, { label: 'Трансфер включен', color: '#DAA009' }],
            price: {
                isDiscounted: false,
                original: 120000,
                discounted: 120000
            },
            capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2'
        },
        {
            thumbnails: [
                '/thumbs/hotels/hotel_thumb1.jpeg',
                '/thumbs/hotels/hotel_thumb2.png',
                '/thumbs/hotels/hotel_thumb3.png'
            ],
            houseType: 'Гостевой дом',
            star: 5,
            isMyFavorite: true,
            rating: { number: 10.0, label: 'Прекрасно' },
            commentAmount: 120,
            hotelName: 'Гостевой дом в Тихой Гавани',
            address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
            services: [
                { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
                { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
                { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
                { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
            ],
            bonus: [{ label: 'Скидка 20%', color: '#3BA87E' }, { label: 'Завтрак включен', color: '#3C4EF2' }, { label: 'Трансфер включен', color: '#DAA009' }],
            price: {
                isDiscounted: true,
                original: 150000,
                discounted: 120000
            },
            capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2'
        },
        {
            thumbnails: [
                '/thumbs/hotels/hotel_thumb1.jpeg',
                '/thumbs/hotels/hotel_thumb2.png',
                '/thumbs/hotels/hotel_thumb3.png'
            ],
            houseType: 'Гостевой дом',
            star: 5,
            isMyFavorite: true,
            rating: { number: 10.0, label: 'Прекрасно' },
            commentAmount: 120,
            hotelName: 'Гостевой дом в Тихой Гавани',
            address: 'Сочи, Адлер • 200 м до моря • 1.5 км до центра',
            services: [
                { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
                { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
                { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
                { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
            ],
            bonus: [{ label: 'Скидка 20%', color: '#3BA87E' }, { label: 'Завтрак включен', color: '#3C4EF2' }, { label: 'Трансфер включен', color: '#DAA009' }],
            price: {
                isDiscounted: true,
                original: 150000,
                discounted: 120000
            },
            capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2'
        },
    ]
    const [filterExpanded, setFilterToggle] = useState(false)
    const [sortByExpanded, setSortByToggle] = useState(false)

    return (
        <div>
            <div className="md:mb-[24px] mb-[20px]">
                <p className="md:text-[44px] text-[30px] md:leading-[52.8px] leading-[36px] font-bold md:mb-[12px] mb-[8px]">Отели в Сочи, Краснодарский край</p>
                <p className="text-custom-gray text-[20px] lg:mb-[24px] mb-[20px]"><span>1 654</span> варианта от <span>7 200</span> ₽</p>
                <CategorySelect className="lg:block hidden" items={categoryItems} />
                <div className="lg:hidden block relative">
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
                        filterExpanded ? <div className="absolute top-[50px] z-[100] bg-white w-full"><HotelFilter /></div> : null
                    }
                    {
                        sortByExpanded ? <div className="absolute top-[50px] z-[100] bg-white w-full">
                            <CategorySelect items={categoryItems} />
                        </div> : null
                    }

                </div>
            </div>
            <div>
                {hotels.map((hotel, i) => {
                    return (
                        <HotelItem className="mb-[24px]" key={i} {...hotel} />
                    )
                })}
            </div>
        </div >
    )
}
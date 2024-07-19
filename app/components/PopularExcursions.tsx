'use client'

import LinkToMore from "./LinkToMore";
import CategorySelect from "@/components/CategoryList";
import ExcursionItem from "@/components/ExcursionItem";
import { getExcursionCategories } from "../backend_apis";

type PopularExcursionsProps = {
    title?: string;
    all_direction_url?: string;
    places?: [],
    categories?: []
}

const popularExcursions: {
    title: string,
    categories: { icon: string, label: string }[],
    duration: string,
    rating: number,
    reviews: number,
    thumbnail: string,
    isInOurTown: boolean,
}[] = [
        {
            title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок',
            categories: [
                { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
                { icon: '/icons/svg/bicycle.svg', label: 'Велосипед' },
                { icon: '/icons/svg/on foot.svg', label: 'Пешком' },
            ],
            duration: '2',
            rating: 9.6,
            reviews: 120,
            thumbnail: '/thumbs/popular_excursions/thumb.png',
            isInOurTown: true,
        },
        {
            title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок',
            categories: [
                { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
                { icon: '/icons/svg/bicycle.svg', label: 'Велосипед' },
                { icon: '/icons/svg/on foot.svg', label: 'Пешком' },
            ],
            duration: '1',
            rating: 5.3,
            reviews: 90,
            thumbnail: '/thumbs/popular_excursions/thumb.png',
            isInOurTown: false,
        },
        {
            title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок',
            categories: [
                { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
                { icon: '/icons/svg/bicycle.svg', label: 'Велосипед' },
                { icon: '/icons/svg/on foot.svg', label: 'Пешком' },
            ],
            duration: '2',
            rating: 9.1,
            reviews: 87,
            thumbnail: '/thumbs/popular_excursions/thumb.png',
            isInOurTown: true,
        },
        {
            title: 'Джиппинг в горную Джи горную Абхазию — озера, водопады и Шерлок',
            categories: [
                { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
                { icon: '/icons/svg/bicycle.svg', label: 'Велосипед' },
                { icon: '/icons/svg/on foot.svg', label: 'Пешком' },
            ],
            duration: '1.5',
            rating: 7.6,
            reviews: 90,
            thumbnail: '/thumbs/popular_excursions/thumb.png',
            isInOurTown: false,
        },
    ]

const categories = [
    { icon: '', label: 'Bce' },
    { icon: '/icons/svg/Group.svg', label: 'В Абхазии' },
    { icon: '/icons/svg/Pickup Truck.svg', label: 'Джиппинг' },
    { icon: '/icons/svg/Mount Fuji.svg', label: 'В горы' },
    { icon: '/icons/svg/Classical Building.svg', label: 'Места' },
    { icon: '/icons/svg/Beach With Umbrella.svg', label: 'Морские' }
]


export default function PopularExcursions({ title = "", all_direction_url = "", places = [], categories = [] }: PopularExcursionsProps) {

    return (
        <div className="mx-auto max-w-[1200px] md:py-[60px 80px] py-[32px]">
            <p className="md:text-5xl text-2xl font-semibold">{title}</p>
            <div>
                <div className="md:flex md:flex-row md:justify-between items-center md:mb-5 mb-2">
                    <CategorySelect items={categories} />
                    <LinkToMore className="lg:block hidden" caption="Все экскурсии" linkURL="" />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-[20px]">
                    {popularExcursions.map((item, i) => (
                        <ExcursionItem
                            key={i}
                            title={item.title}
                            categories={item.categories}
                            duration={item.duration}
                            rating={item.rating}
                            reviews={item.reviews}
                            thumbnail={item.thumbnail}
                            isInOurTown={item.isInOurTown} />
                    ))}
                </div>
                <div className="text-center">
                    <LinkToMore className="lg:hidden block mx-auto" caption="Все направления" linkURL="/excursions" />
                </div>
            </div>
        </div>
    );
}

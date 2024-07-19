import CategorySelect from "@/components/CategoryList";
import HotelItem from "@/components/HotelItem";

const categories = [
    { icon: '/icons/svg/House.svg', label: 'Отели' },
    { icon: '/icons/svg/routing.svg', label: 'Экскурсии' },
]

const favoriteHotels = [
    {
        thumbnails: [
            '/thumbs/other_hotels/other_hotels1.png',
            '/thumbs/other_hotels/other_hotels2.jpeg',
            '/thumbs/other_hotels/other_hotels3.jpeg',
        ],
        houseType: 'Эко - отель',
        hotelName: 'Ниагара',
        star: 4,
        address: 'Сочи, поселок Лоо • 200 м до моря • 1.5 км до центра',
        bonus: [{ label: 'Лучшая цена' }, { label: 'Завтрак включен' }],
        price: {
            isDiscounted: false,
            original: 120000,
            discounted: 120000
        },
        isMyFavorite: false,
        rating: 8.6,
        capacity: 'за 5 ночей для 3 гостей',
        services: [
            { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
            { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
            { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
            { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
        ],
    },
    {
        thumbnails: [
            '/thumbs/other_hotels/other_hotels1.png',
            '/thumbs/other_hotels/other_hotels2.jpeg',
            '/thumbs/other_hotels/other_hotels3.jpeg',
        ],
        houseType: 'Эко - отель',
        hotelName: 'Ниагара',
        star: 4,
        address: 'Сочи, поселок Лоо • 200 м до моря • 1.5 км до центра',
        bonus: [{ label: 'Лучшая цена' }, { label: 'Завтрак включен' }],
        price: {
            isDiscounted: false,
            original: 120000,
            discounted: 120000
        },
        isMyFavorite: false,
        rating: 8.6,
        capacity: 'за 5 ночей для 3 гостей',
        services: [
            { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
            { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
            { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
            { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
        ],
    },
    {
        thumbnails: [
            '/thumbs/other_hotels/other_hotels1.png',
            '/thumbs/other_hotels/other_hotels2.jpeg',
            '/thumbs/other_hotels/other_hotels3.jpeg',
        ],
        houseType: 'Эко - отель',
        hotelName: 'Ниагара',
        star: 4,
        address: 'Сочи, поселок Лоо • 200 м до моря • 1.5 км до центра',
        bonus: [{ label: 'Лучшая цена' }, { label: 'Завтрак включен' }],
        price: {
            isDiscounted: false,
            original: 120000,
            discounted: 120000
        },
        isMyFavorite: false,
        rating: 8.6,
        capacity: 'за 5 ночей для 3 гостей',
        services: [
            { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
            { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
            { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
            { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
        ],
    },
    {
        thumbnails: [
            '/thumbs/other_hotels/other_hotels1.png',
            '/thumbs/other_hotels/other_hotels2.jpeg',
            '/thumbs/other_hotels/other_hotels3.jpeg',
        ],
        houseType: 'Эко - отель',
        hotelName: 'Ниагара',
        star: 4,
        address: 'Сочи, поселок Лоо • 200 м до моря • 1.5 км до центра',
        bonus: [{ label: 'Лучшая цена' }, { label: 'Завтрак включен' }],
        price: {
            isDiscounted: false,
            original: 120000,
            discounted: 120000
        },
        isMyFavorite: false,
        rating: 8.6,
        capacity: 'за 5 ночей для 3 гостей',
        services: [
            { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
            { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
            { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
            { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
        ],
    },
    {
        thumbnails: [
            '/thumbs/other_hotels/other_hotels1.png',
            '/thumbs/other_hotels/other_hotels2.jpeg',
            '/thumbs/other_hotels/other_hotels3.jpeg',
        ],
        houseType: 'Эко - отель',
        hotelName: 'Ниагара',
        star: 4,
        address: 'Сочи, поселок Лоо • 200 м до моря • 1.5 км до центра',
        bonus: [{ label: 'Лучшая цена' }, { label: 'Завтрак включен' }],
        price: {
            isDiscounted: false,
            original: 120000,
            discounted: 120000
        },
        isMyFavorite: false,
        rating: 8.6,
        capacity: 'за 5 ночей для 3 гостей',
        services: [
            { icon: '/icons/svg/swimming-pool 1.svg', label: 'Бассейн' },
            { icon: '/icons/svg/sun-fog.svg', label: 'Вид на море' },
            { icon: '/icons/svg/fork-spoon 1.svg', label: 'Ресторан' },
            { icon: '/icons/svg/elevator 1.svg', label: 'Лифт' },
        ],
    },
]

export default function FavoriteList() {
    return (
        <div>
            <h3 className="md:text-h3 text-h4 md:mb-[24px] mb-[8px]">Избранное</h3>
            <CategorySelect items={categories} className="md:mb-[24px] mb-[16px]" />
            <div className="grid middle:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[24px] gap-[16px]">
                {favoriteHotels.map((hotel, i) => <div key={i}>
                    <HotelItem  {...hotel} />
                </div>)}
            </div>
        </div>
    )
}
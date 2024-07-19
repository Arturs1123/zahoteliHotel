import Link from "next/link";
import Image from "next/image";
import HotelInfo from "./components/HotelInfo";
import Playground from "./components/Playground";
import SearchBar from "./components/SearchBar";
import RoomCategory from "./components/Room";
import { AccommodationType } from "./components/AccommodationSelect";
import HotelOtherInfo from "./components/HotelOtherInfo";
import Ratings from "./components/Ratings";
import Terms from "./components/Terms";
import OtherHotels from "./components/OtherHotels";

const hotelInfo = {
    thumbnails: [
        '/thumbs/album/album1.jpeg',
        '/thumbs/album/album2.jpeg',
        '/thumbs/album/album3.jpeg',
        '/thumbs/album/album4.jpeg',
        '/thumbs/album/album5.png',
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
    capacity: 'за 5 ночей для 3 гостей • доступно категорий: 2',
    roomCateories: [
        {
            thumbnails: [
                '/thumbs/rooms/room1.png',
                '/thumbs/rooms/room2.png',
                '/thumbs/rooms/room3.png',
                '/thumbs/rooms/room4.png',
            ],
            type: 'Стандарт',
            area: 16,
            amentities: [
                { icon: '/icons/svg/wifi 1.svg', label: 'Бесплатный Wi-Fi' },
                { icon: '/icons/svg/new-computer 1.svg', label: 'Телевизор' },
                { icon: '/icons/svg/air-conditioning 1.svg', label: 'Кондиционер' },
                { icon: '/icons/svg/Sea.svg', label: 'Вид на море' },
                { icon: '/icons/svg/tub.svg', label: 'Ванна' },
                { icon: '/icons/svg/hair-dryer-one.svg', label: 'Фен' },
            ],
            remark: [
                { label: 'Остался 1 номер', color: '#E13914' },
                { label: 'Скидка 20%', color: '#3BA87E' },
                { label: 'Бесплатная отмена до 6 августа', color: '#3BA87E' },
                { label: 'Трансфер включен', color: 'Трансфер включен' },
            ],
            accommodations: [
                { type: 'DOUBLE' as AccommodationType, label: 'двуспальная кровать', icon: '/icons/svg/double-bed.svg', amount: 2 },
                { type: 'SINGLE' as AccommodationType, label: 'односпальных кровати', icon: '/icons/svg/single-bed.svg', amount: 2, },
                { type: 'EXTRA' as AccommodationType, label: 'Дополнительная односпальная кровать (+3 000 ₽) ', icon: '/icons/svg/extra-bed.svg', amount: 1 },
            ],
            nutrition: [
                { label: 'Завтрак' },
                { label: 'Завтрак и ужин (+12 000 ₽)' },
                { label: 'Завтрак, обед и ужин (+20 000 ₽)' },
            ],
        },
        {
            thumbnails: [
                '/thumbs/rooms/room1.png',
                '/thumbs/rooms/room2.png',
                '/thumbs/rooms/room3.png',
                '/thumbs/rooms/room4.png',
            ],
            type: 'Номер повышенной комфортности',
            area: 20,
            amentities: [
                { icon: '/icons/svg/wifi 1.svg', label: 'Бесплатный Wi-Fi' },
                { icon: '/icons/svg/new-computer 1.svg', label: 'Телевизор' },
                { icon: '/icons/svg/air-conditioning 1.svg', label: 'Кондиционер' },
                { icon: '/icons/svg/Sea.svg', label: 'Вид на море' },
                { icon: '/icons/svg/tub.svg', label: 'Ванна' },
                { icon: '/icons/svg/hair-dryer-one.svg', label: 'Фен' },
            ],
            remark: [
                { label: 'Остался 1 номер', color: '#E13914' },
                { label: 'Скидка 20%', color: '#3BA87E' },
                { label: 'Бесплатная отмена до 6 августа', color: '#3BA87E' },
                { label: 'Трансфер включен', color: 'Трансфер включен' },
            ],
            accommodations: [
                { type: 'DOUBLE' as AccommodationType, label: 'двуспальная кровать', icon: '/icons/svg/double-bed.svg', amount: 2 },
                { type: 'SINGLE' as AccommodationType, label: 'односпальных кровати', icon: '/icons/svg/single-bed.svg', amount: 2, },
                { type: 'EXTRA' as AccommodationType, label: 'Дополнительная односпальная кровать (+3 000 ₽) ', icon: '/icons/svg/extra-bed.svg', amount: 1 },
            ],
            nutrition: [
                { label: 'Завтрак' },
                { label: 'Завтрак и ужин (+12 000 ₽)' },
                { label: 'Завтрак, обед и ужин (+20 000 ₽)' },
            ]
        },
        {
            thumbnails: [
                '/thumbs/rooms/room1.png',
                '/thumbs/rooms/room2.png',
                '/thumbs/rooms/room3.png',
                '/thumbs/rooms/room4.png',
            ],
            type: 'Люкс с видом на море',
            area: 24,
            amentities: [
                { icon: '/icons/svg/wifi 1.svg', label: 'Бесплатный Wi-Fi' },
                { icon: '/icons/svg/new-computer 1.svg', label: 'Телевизор' },
                { icon: '/icons/svg/air-conditioning 1.svg', label: 'Кондиционер' },
                { icon: '/icons/svg/Sea.svg', label: 'Вид на море' },
                { icon: '/icons/svg/tub.svg', label: 'Ванна' },
                { icon: '/icons/svg/hair-dryer-one.svg', label: 'Фен' },
            ],
            remark: [
                { label: 'Остался 1 номер', color: '#E13914' },
                { label: 'Скидка 20%', color: '#3BA87E' },
                { label: 'Бесплатная отмена до 6 августа', color: '#3BA87E' },
                { label: 'Трансфер включен', color: 'Трансфер включен' },
            ],
            accommodations: [
                { type: 'DOUBLE' as AccommodationType, label: 'двуспальная кровать', icon: '/icons/svg/double-bed.svg', amount: 2 },
                { type: 'SINGLE' as AccommodationType, label: 'односпальных кровати', icon: '/icons/svg/single-bed.svg', amount: 2, },
                { type: 'EXTRA' as AccommodationType, label: 'Дополнительная односпальная кровать (+3 000 ₽) ', icon: '/icons/svg/extra-bed.svg', amount: 1 },
            ],
            nutrition: [
                { label: 'Завтрак' },
                { label: 'Завтрак и ужин (+12 000 ₽)' },
                { label: 'Завтрак, обед и ужин (+20 000 ₽)' },
            ]
        },
    ]
}

const searchInfo = {
    from: '6 марта',
    to: '10 марта',
    members: '3 гостя',
    checkIn: '14:00',
    checkOut: '12:00',
}

const playgrounds = [
    { thumbnail: '/thumbs/playgrounds/playground1.jpeg', placeName: 'Дендрарий', reachMethod: { goby: 'foot', time: 15, distance: 650 } },
    { thumbnail: '/thumbs/playgrounds/playground2.png', placeName: 'Парк Ривьера', reachMethod: { goby: 'foot', time: 45, distance: 2.03 } },
    { thumbnail: '/thumbs/playgrounds/playground3.jpeg', placeName: 'Олимпийский парк', reachMethod: { goby: 'bus', time: 45, distance: 15.03 } },
]

const { from, to, members, checkIn, checkOut } = searchInfo

const hotelInfos = [
    {
        type: 'general',
        title: 'Общее',
        items: [
            'Кондиционер',
            'Круглосуточная стойка',
            'Лифт',
            'Отель для некурящих',
            'Кондиционер',
            'Круглосуточная стойка',
            'Лифт',
            'Отель для некурящих',
        ]
    },
    {
        type: 'beauty',
        title: 'Красота и здоровье',
        items: [
            'Сауна',
            'Паровая баня',
            'Хаммам',
        ]
    },
    {
        type: 'food',
        title: 'Питание и напитки',
        items: [
            'Бар',
            'Бар у бассейна',
            'Бесплатный чай/кофе',
            'Возможен полный пансион',
            'Возможен полупансион',
            'Бар',
            'Бар у бассейна',
            'Бесплатный чай/кофе',
            'Возможен полный пансион',
            'Возможен полупансион',
        ]
    },
    {
        type: 'availability',
        title: 'Доступность',
        items: [
            'Бар оборудован для доступа гостей на инвалидных креслах',
            'Ресторан оборудован для доступа гостей на инвалидных креслах',
            'Ресторан оборудован для доступа гостей на инвалидных креслах',
        ]
    },
    {
        type: 'language',
        title: 'Персонал говорит',
        items: [
            'На русском',
            'На английском',
        ]
    },
    {
        type: 'services',
        title: 'Услуги и удобства',
        items: [
            'Гладильные принадлежности',
            'Прачечная и гладильные услуги ',
            'Услуги консьержа',
        ]
    },
    {
        type: 'transport',
        title: 'Транспорт',
        items: [
            'Парковка бесплатная на территории',
            'Трансфер из аэропорта',
        ]
    },
]

const ratingInfo = {
    rating: 8.6,
    label: 'Отличный',
    ratingAmount: 109,
    indexes: [
        { label: 'Чистота', rating: 9.6 },
        { label: 'Расположение', rating: 9.4 },
        { label: 'Гостеприимство', rating: 9.6 },
        { label: 'Сервис', rating: 9.6 },
        { label: 'Чистота', rating: 5.6 },
        { label: 'Качество Wi-Fi', rating: 8.6 },
        { label: 'Местоположение', rating: 9.6 },
        { label: 'Цена\\качество', rating: 9.4 },
        { label: 'Оценка номера', rating: 9.6 },
    ],
    categories: [
        { label: 'Все отзывы' },
        { label: 'Территория', amount: 196 },
        { label: 'Питание', amount: 16 },
        { label: 'Бассейн', amount: 32 },
        { label: 'Персонал', amount: 196 },
        { label: 'Обслуживание', amount: 196 },
        { label: 'Пляж', amount: 196 },
        { label: 'Сервис', amount: 196 },
    ],
}

const ratings = [
    {
        name: 'Анастасия',
        rating: 9.6,
        goodMessage: 'Чистый отель, с новой мебелью, на каждом этаже кулер с холодной и горячей водой. Мы попросили чайник в номер и нам дали. Персонал молодежь, всегда улыбаются и всегда готовы помочь. Был номер с балконом и видом на море, очень просторный. В номерах есть холодильник и сейф.',
        badMessage: 'Туалетно-мыльные принадлежности(туалетная бумага, мыло...)не пополняются. Их кладут один раз перед приездом.',
        like: 120,
        dislike: 2,
        createdAt: '20 октября 2023',
    },
    {
        name: 'Анастасия',
        rating: 7.6,
        goodMessage: 'Чистый отель, с новой мебелью, на каждом этаже кулер с холодной и горячей водой. Мы попросили чайник в номер и нам дали. Персонал молодежь, всегда улыбаются и всегда готовы помочь. Был номер с балконом и видом на море, очень просторный. В номерах есть холодильник и сейф.',
        badMessage: 'Туалетно-мыльные принадлежности(туалетная бумага, мыло...)не пополняются. Их кладут один раз перед приездом.',
        like: 120,
        dislike: 2,
        createdAt: '20 октября 2023',
    },
    {
        name: 'Анастасия',
        rating: 5.6,
        goodMessage: 'Чистый отель, с новой мебелью, на каждом этаже кулер с холодной и горячей водой. Мы попросили чайник в номер и нам дали. Персонал молодежь, всегда улыбаются и всегда готовы помочь. Был номер с балконом и видом на море, очень просторный. В номерах есть холодильник и сейф.',
        badMessage: 'Туалетно-мыльные принадлежности(туалетная бумага, мыло...)не пополняются. Их кладут один раз перед приездом.',
        like: 120,
        dislike: 2,
        createdAt: '20 октября 2023',
    },
]


export default function Hotel() {
    return (
        <div>
            <div className="md:pt-[8px] md:pb-[40px] pt-[16px] pb-[32px] md:px-[120px] px-[16px]">
                <div className="md:mb-[32px] mb-[16px]">
                    <Link href="/hotels">
                        <span className="flex items-center">
                            <Image src="/icons/svg/BackArrow.svg" alt="back arrow" width={24} height={24} />
                            <span className="text-[18px] leading-[26px] font-semibold text-custom-gray ml-[8px]">К списку отелей</span>
                        </span>
                    </Link>
                </div>
                <HotelInfo {...hotelInfo} />
            </div>
            <div className="md:px-[120px] md:py-[40px] px-[16px] pt-[16px] pb-[8px] middle:flex">
                <div className="middle:w-[827px] middle:mr-[40px]">
                    <p className="md:text-[30px] text-[20px] md:font-bold font-[800] md:leading-[36px] leading-[27.32px] md:mb-[24px] mb-[20px]">
                        Доступно 3 категории номеров с 6 по 10 марта
                    </p>
                    <SearchBar from={from} to={to} members={members} checkIn={checkIn} checkOut={checkOut} />
                    {
                        hotelInfo.roomCateories.map((category, i) => (
                            <RoomCategory {...category} className="mt-[24px]" key={i} />
                        ))
                    }
                </div>
                <div className="md:grow">
                    <div>
                        <p className="text-[24px] leading-[28.8px] font-bold mb-[16px]">Рядом с отелем</p>
                        <div>
                            {
                                playgrounds.map((playground, i) => (
                                    <Playground key={i} {...playground} className="mb-[24px]" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <HotelOtherInfo infos={hotelInfos} />
            <Ratings {...ratingInfo} ratings={ratings} className="md:px-[120px] md:py-[40px] px-[16px] py-[16px] pb-[32px]" />
            <Terms />
            <OtherHotels />
        </div>
    )
}
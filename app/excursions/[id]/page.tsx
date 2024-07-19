'use client'

import Link from "next/link"
import Image from "next/image"
import AlbumThumb from "@/components/AlbumThumb";
import RatingBadge from "@/components/RatingBadge"
import FullWidthBtn from "@/components/FullWidthBtn"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShareBtn from "@/components/ShareBtn";
import Workflow from "@/components/Workflow";
import Ratings from "./components/Ratings";
import ExcursionItem from "@/components/ExcursionItem";
import Booking from "./components/Booking";

const excursionDetail = {
    rating: 8.9,
    reviewAmount: 120,
    infos: {
        maxGroupSize: 10,
        time: '3 часа',
        guider: true,
        transport: 'Автобусная',
    },
    price: 1500,
    title: 'Незабываемая природа и три курорта Красной поляны',
    from: 'Сочи, Автовокзал',
    to: 'Сочи, Красная Поляна',
    thumbnails: [
        '/thumbs/excursions/excursion detail1.png',
        '/thumbs/excursions/excursion detail2.png',
        '/thumbs/excursions/excursion detail3.png',
        '/thumbs/excursions/excursion detail4.png',
        '/thumbs/excursions/excursion detail5.png',
    ],
    summary: 'Вы посетите ущелье Ахцу, наберете воды из нарзанного источника и продегустируете мед с вином в горном кафе. На курортах Красной Поляны, среди сказочных пейзажей, узнаете о развитии европейского комплекса и прокатитесь на канатке. А вечер проведете среди огней Олимпийского парка, где узнаете главное об исторических Играх-2014.',
    workflow: [
        'Парк развлечений Скайпарк ~ 2 часа',
        'Форелевое хозяйство ~ 1 час',
        'Река Мзымта ~ 2 часа',
        'Ахштырское ущелье ~ 2 часа',
        'Красная поляна ~ 2 часа',
    ],
    placesToGo: [
        { thumb: '/thumbs/excursions/places1.png', title: 'Ущелья, источники и гастрономическая остановка', description: 'Утро начнется с увлекательной дороги к горнолыжным курортам Красной поляны. Первым делом вы приедете на смотровую площадку в ущелье Ахцу, где сможете сделать фото на память на фоне шикарных видов, а также увидите скальную дорогу на знаменитый поселок. В нарзанном источнике Чвижепсе отведаете целебной минеральной воды и, при желании, возьмете ее с собой. А затем продегустируете мед и вино в колоритном горном кафе, где вам также предложат традиционные блюда кавказской кухни.' },
        { thumb: '/thumbs/excursions/places2.png', title: 'Ущелья, источники и гастрономическая остановка', description: 'По пути вы услышите историю поселка. А прибыв на место, познакомитесь поближе с тремя горнолыжными курортами: Газпром, Роза Хутор и Красная Поляна (Горки Город). Здесь вас ждет величие и спокойствие гор, наисвежайший воздух, европейская архитектура и история развития комплекса от А до Я. Особое удовольствие приносит канатка — с каждой высотой вам откроются незабываемые горные панорамы. На одном из курортов (на выбор) у вас будет достаточно времени, чтобы подняться на канатке и побывать на всех уровнях, где она останавливается.' },
        { thumb: '/thumbs/excursions/places3.png', title: 'Ущелья, источники и гастрономическая остановка', description: 'Лучшее время для посещения Олимпийского парка — вечер. Именно в это время суток мы вас туда и отвезем. Вы увидите каждый олимпийский объект в россыпи разноцветных огней, узнаете, какие где проходили соревнования, послушаете историю события, перевернувшего жизнь Сочи и окрестностей, и осознаете масштаб работы, проведенной для первой в мире зимней Олимпиады в субтропиках.' },
    ],
    priceDetail: {
        include: [
            'Старховка',
            'Трансфер',
            'Дегустации',
        ],
        notInclude: [
            'Канатная дорога (от 900 до 1950 ₽)',
            'Посещение источника Чвижепсе',
            'Обед в кафе',
        ]
    },
    importants: [
        'Мы будем много ходить, наденьте удобную обувь и одежду',
        'Трансфер по Сочи включен в стоимость. Возможен выезд из Лоо за дополнительную плату (+ 3000 руб. в обе стороны)'
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

const ratingInfo = {
    rating: 8.6,
    label: 'Отличный',
    ratingAmount: 109,
}

const otherExcursions = [
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

export default function ExcursionDetail() {
    const { rating, reviewAmount, infos, price, title, from, to, thumbnails, summary, workflow, placesToGo, priceDetail, importants } = excursionDetail
    const { maxGroupSize, time, guider, transport } = infos
    return (
        <div>
            <div className="md:px-[120px] px-[16px] md:py-[8px] py-[16px] pb-[40px]">
                <div className="md:mb-[32px] mb-[16px]">
                    <Link href="/hotels">
                        <span className="flex items-center">
                            <Image src="/icons/svg/BackArrow.svg" alt="back arrow" width={24} height={24} />
                            <span className="text-[18px] leading-[26px] font-semibold text-custom-gray ml-[8px]">К списку экскурсий</span>
                        </span>
                    </Link>
                </div>
                <div className="xl:flex">
                    <div>
                        <div className="md:mb-[32px] mb-[20px]">
                            <AlbumThumb photos={thumbnails} className="mb-[32px] md:block hidden" />
                            <div className="md:hidden block relative h-[200px]">
                                <Carousel
                                    additionalTransfrom={0}
                                    arrows={false}
                                    autoPlay
                                    autoPlaySpeed={2000}
                                    centerMode={false}
                                    containerClass="h-full rounded-xl"
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite={false}
                                    itemClass=""
                                    keyBoardControl
                                    minimumTouchDrag={80}
                                    pauseOnHover
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    renderDotsOutside={false}
                                    responsive={{
                                        desktop: {
                                            breakpoint: {
                                                max: 3000,
                                                min: 1024
                                            },
                                            items: 2,
                                            partialVisibilityGutter: 40
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 464,
                                                min: 0
                                            },
                                            items: 1,
                                            partialVisibilityGutter: 30
                                        },
                                        tablet: {
                                            breakpoint: {
                                                max: 1024,
                                                min: 464
                                            },
                                            items: 1,
                                            partialVisibilityGutter: 30
                                        }
                                    }}
                                    rewind
                                    rewindWithAnimation
                                    shouldResetAutoplay
                                    showDots
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable
                                    rtl={undefined}

                                >
                                    {thumbnails.map((thumbnail, i) => (
                                        <img key={i} src={thumbnail} className="rounded-lg h-[200px] h-full w-full" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                                    ))}
                                </Carousel>
                                <ShareBtn className="absolute top-[12px] right-[12px]" type="share" />
                                <ShareBtn className="absolute top-[12px] left-[12px]" />
                            </div>
                        </div>
                        <div>
                            <div className="md:flex md:justify-between md:items-start md:mb-[16px] mb-[8px]">
                                <h3 className="md:text-h3 text-h4 w-[90%]">{title}</h3>
                                <div className="md:flex items-center hidden">
                                    <Image src="/icons/svg/heart_32.svg" className="mr-[16px]" alt="like" width={32} height={32} />
                                    <Image src="/icons/svg/Share.svg" alt="like" width={32} height={32} />
                                </div>
                            </div>
                            <div className="md:flex items-center mb-[16px]">
                                <div className="flex items-center mr-[16px] md:mb-0 mb-[8px]">
                                    <Image src="/icons/svg/location.svg" width={24} height={24} alt="from" className="mr-[8px]" />
                                    <span className="text-p2 text-custom-gray">{from}</span>
                                </div>
                                <Image src="/icons/svg/Arrow.svg" width={24} height={24} alt="arrow" className="mr-[16px] md:block hidden" />
                                <div className="md:flex items-center hidden">
                                    <Image src="/icons/svg/location.svg" width={24} height={24} alt="from" className="mr-[8px]" />
                                    <span className="text-p2 text-custom-gray">{to}</span>
                                </div>
                                <div className="md:hidden pl-[32px] flex items-center">
                                    <Image src="/icons/svg/repeat.svg" width={24} height={24} alt="from" className="mr-[8px]" />
                                    <Image src="/icons/svg/location.svg" width={24} height={24} alt="from" className="mr-[8px]" />
                                    <span className="text-p2 text-custom-gray">{to}</span>
                                </div>
                            </div>
                            <div className="flex items-center md:mb-0 mb-[24px]">
                                <Image src="/icons/svg/Map.svg" width={24} height={24} alt="map" className="mr-[8px]" />
                                <span className="text-p2 text-accent">Посмотреть маршрут на карте</span>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[333px] rounded-xl flex-none xl:ml-[40px] p-[24px] bg-[#EEEEEE]">
                        <div className="md:flex hidden mb-[16px] items-center">
                            <RatingBadge rating={rating} className="mr-[12px]" size="lg" />
                            <span>
                                <p className="text-h5 mb-[6px]">Отлично</p>
                                <p className="text-p2 text-accent">{reviewAmount} отзывов</p>
                            </span>
                        </div>
                        <div className="p-[16px] rounded-lg bg-[#3C4EF21A] mb-[32px]">
                            <p className="text-p4 mb-[32px]">
                                «Отличный маршрут, хорошая организации, все прошло на одном дыхании. Это был чудесный, насыщенный день, полный эмоций и впечатлений!»
                            </p>
                        </div>
                        <div className="xl:mb-[82px] mb-[32px]">
                            <div className="flex items-center mb-[20px]">
                                <Image src="/icons/svg/users.svg" width={24} height={24} alt="group max size" className="mr-[8px]" />
                                <span className="text-p2">Групповая до {maxGroupSize} человек</span>
                            </div>
                            <div className="flex items-center mb-[20px]">
                                <Image src="/icons/svg/time.svg" width={24} height={24} alt="time" className="mr-[8px]" />
                                <span className="text-p2">{time}</span>
                            </div>
                            {
                                guider ? <div className="flex items-center mb-[20px]">
                                    <Image src="/icons/svg/guider.svg" width={24} height={24} alt="guider" className="mr-[8px]" />
                                    <span className="text-p2">С гидом</span>
                                </div> : null
                            }
                            <div className="flex items-center">
                                <Image src="/icons/svg/bus front.svg" width={24} height={24} alt="transport" className="mr-[8px]" />
                                <span className="text-p2">{transport}</span>
                            </div>
                        </div>
                        <div className="flex justify-between mb-[16px]">
                            <span className="text-p3 text-custom-gray">Стоимость 1 билета</span>
                            <span className="text-h5">{price}₽</span>
                        </div>
                        <FullWidthBtn caption="Забронировать экскурсию" />
                    </div>
                </div>
                <div className="xl:mr-[373px] mr-0 md:mt-[32px] mt-[24px]">
                    <p className="text-p2 text-custom-gray mb-[32px]">{summary}</p>
                    <div className="md:px-0 px-[16px] mb-[32px]">
                        <h4 className="md:text-h4 text-h5 mb-[24px]">Программа</h4>
                        <Workflow workflow={workflow} />
                    </div>
                    <div className="md:py-0 py-[16px]">
                        <h4 className="text-h4 md:mb-[32px] mb-[20px]">Что вас ожидает</h4>
                        <div>
                            {
                                placesToGo.map((place, i) => <div className="md:flex md:mb-[32px] mb-[20px]" key={i}>
                                    <img src={place.thumb} alt="place thumb" className="rounded-lg md:w-[240px] w-full h-[240px] md:mr-[24px] mr-0 md:mb-0 mb-[16px]" style={{ objectFit: 'cover' }} />
                                    <div>
                                        <h5 className="md:text-h5 text-h6 mb-[12px]">{place.title}</h5>
                                        <p className="text-p2">{place.description}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className="md:text-h4 text-h5 mb-[24px]">Организационные детали</h4>
                        <h5 className="md:text-h5 text-h6 mb-[16px]">Как проходит экскурсия</h5>
                        <p className="text-p2 mb-[24px]">Мы перевозим наших гостей на комфортабельных автобусах с большими панорамными окнами, у каждого сидения есть климат-контроль. Остановки занимают не менее 15 минут.
                            В зависимости от ситуации на дорогах, сезона и сбора участников по отелям экскурсия может длиться до 12 часов. Мы забираем участников из Центрального, Адлерского и Хостинского районов Сочи или на ближайшей остановке общественного транспорта.
                        </p>
                        <h5 className="md:text-h5 text-h6 mb-[16px]">Что входит в стоимость, а что — нет</h5>
                        <div className="md:grid md:grid-cols-2">
                            <div>
                                {priceDetail.include.map((item, i) => <div className="flex items-center mb-[16px]" key={i}>
                                    <Image src="/icons/svg/tick-circle.svg" className="mr-[8px]" width={24} height={24} alt="tick" />
                                    <span>{item}</span>
                                </div>)}
                            </div>
                            <div>
                                {priceDetail.notInclude.map((item, i) => <div className="flex items-center mb-[16px]" key={i}>
                                    <Image src="/icons/svg/Error.svg" className="mr-[8px]" width={24} height={24} alt="not tick" />
                                    <span>{item}</span>
                                </div>)}
                            </div>
                        </div>
                        <div className="md:flex md:items-center mt-[8px] md:p-[32px] p-[16px] border border-accent rounded-lg bg-[#3C4EF21A]">
                            <Image src="/icons/svg/important.svg" width={72} height={72} alt="important" className="mr-[24px] md:block hidden" />
                            <div>
                                <h5 className="md:block hidden text-h5 text-h6 mb-[16px]">Важно учесть</h5>
                                <div className="md:hidden flex items-center mb-[16px]">
                                    <Image src="/icons/svg/lamp-on.svg" width={38} height={38} alt="important" className="mr-[8px]" />
                                    <h5 className="text-h6">Важно учесть</h5>
                                </div>
                                <ul className="list-disc pl-[30px]">
                                    {importants.map((item, i) => <li className="md:text-p2 text-p3" key={i}>
                                        {item}
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:mt-[40px]">
                <div className="md:py-[40px] py-[16px] bg-[#3C4EF20D] md:px-[120px] px-[16px]">
                    <Booking />
                </div>
                <div className="md:px-[120px] px-[16px] md:py-[8px] py-[16px] pb-[40px]">
                    <div className="md:py-[40px] py-[16px]">
                        <Ratings ratings={ratings} rating={ratingInfo.rating} label={ratingInfo.label} ratingAmount={ratingInfo.ratingAmount} />
                    </div>
                    <div className="md:py-[40px] py-[16px]">
                        <h4 className="md:text-h4 text-h5 md:mb-[32px] mb-[24px]">Похожие экскурсии</h4>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-[20px]">
                            {otherExcursions.map((item, i) => (
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
                    </div>
                </div>
            </div>
        </div>
    )
}
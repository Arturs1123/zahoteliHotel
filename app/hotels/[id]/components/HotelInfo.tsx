'use client'
import AlbumThumb from "@/components/AlbumThumb";
import { Rate } from "antd";
import RatingBadge from "@/components/RatingBadge"
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export type HotelInfoProps = {
    thumbnails: string[]
    houseType: string,
    star: number,
    isMyFavorite: boolean,
    rating: { number: number, label: string },
    commentAmount: number,
    hotelName: string,
    address: string,
    services: { icon: string, label: string }[],
    bonus: { label: string, color: string }[],
    price: {
        original: number,
        discounted: number,
        isDiscounted: boolean,
    },
    capacity: string
}

export default function HotelInfo({
    thumbnails = [],
    houseType = '',
    star = 0,
    isMyFavorite = false,
    rating = { number: 0, label: '' },
    commentAmount = 0,
    hotelName = '',
    address = '',
    services = [],
    bonus = [],
    price = {
        isDiscounted: true,
        original: 0,
        discounted: 0
    },
    capacity = '',
    ...props
}: HotelInfoProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={props.className ? props.className : ''}>
            <AlbumThumb photos={thumbnails} className="mb-[32px] md:block hidden" />
            <div className="md:hidden block">
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={2000}
                    centerMode={false}
                    containerClass="container"
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
            </div>
            <div className="p-[16px] middle:grow">
                <div className="flex items-center mb-[8px]">
                    <div className="grow">
                        <div className="flex items-center justify-between">
                            <span>
                                <span className="text-[18px] font-semibold text-custom-gray leading-[26px] mr-[8px]">{houseType}</span>&nbsp;
                                {star > 0 ? <Rate defaultValue={star} count={star} /> : null}
                            </span>
                            <span className="md:hidden inline-block flex items-center" >
                                <RatingBadge size="md" rating={rating.number} />
                                <p className="text-[14px] text-accent leading-[20px] font-semibold ml-[8px]">{commentAmount}&nbsp;отзывов</p>
                            </span>
                        </div>
                        <p className="font-bold md:text-[44px] text-[30px] mb-[16px] md:leading-[52.8px] leading-[36px] flex items-center">
                            <span className="md:mr-[16px] pr-0">{hotelName}</span>
                            <Image src="/icons/svg/heart_32.svg" alt="like" width={32} height={32} className="mr-[16px] md:inline hidden" />
                            <Image src="/icons/svg/Share.svg" alt="like" width={32} height={32} className="mr-[16px] md:inline hidden" />
                        </p>
                    </div>

                    <div className="flex flex-none items-center">
                        <RatingBadge size="lg" rating={rating.number} className="md:inline-block hidden" />
                        <span className="ml-[8px] md:block hidden">
                            <p className="text-[24px] leading-[28.8px] font-bold">{rating.label}</p>
                            <p className="text-[18px] text-accent leading-[26px] font-semibold">{commentAmount}&nbsp;отзывов</p>
                        </span>
                    </div>
                </div>
                <div className="flex mb-[16px]">
                    <img src="/icons/svg/location.svg" alt="location" className="w-[20px] h-[20px]" />
                    <p className="text-[18px] font-semibold leading-[26px] text-custom-gray ml-[8px]">{address}</p>
                </div>
                <div className="flex items-center mb-[16px]">
                    <div className="flex items-center text-[#292D32] text-[14px] overflow-hidden">
                        {services.map((service, i) => (
                            <span key={i} className="flex mr-[12px] items-center flex-none">
                                <img src={service.icon} alt="service icon" className="w-[24px] h-[24px]" />
                                <span className="ml-[6px] text-[18px] leading-[26px] font-semibold">{service.label}</span>
                            </span>))}
                    </div>
                    <p className="text-accent grow text-[18px] ml-[10px] leading-[26px] font-semibold">Ещё</p>
                </div>
                <div className="flex items-center flex-wrap">
                    <Image src="/icons/svg/Desert Island.svg" alt="island" width={26} height={26} className="mr-[8px]" />
                    <span className="text-[18px] leading-[26px] font-semibold text-[#292D32] mr-[16px]">200 м до моря • 1.5 км до центра</span>
                    <Image src="/icons/svg/Map.svg" alt="map" width={24} height={24} className="mr-[1px]" />
                    <span className="text-[18px] leading-[26px] font-semibold text-accent">Посмотреть на карте</span>
                </div>
            </div>
        </div>
    )
}
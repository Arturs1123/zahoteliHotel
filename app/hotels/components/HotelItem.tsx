'use client'
import ChooseButton from "@/components/ChooseButton"
import RatingBadge from "@/components/RatingBadge"
import Tag from "@/components/Tag"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rate } from "antd";
import Link from "next/link";

export type HotelItemProps = {
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
export default function HotelItem({
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
}: HotelItemProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`middle:flex rounded-xl border ${props.className ? props.className : ''}`}>
            <div className="p-[4px] relative middle:w-[428px]">
                <Carousel
                    customRightArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer w-[48px] h-[48px]' />
                    }
                    customLeftArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer rotate-180 w-[48px] h-[48px]' />
                    }
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
                            items: 1,
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
                    showDots
                    rewind
                    rewindWithAnimation
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    rtl={undefined}

                >
                    {thumbnails.map((thumbnail, i) => (
                        <img key={i} src={thumbnail} className="middle:rounded-bl-lg rounded-tl-lg middle:rounded-tr-none rounded-tr-lg middle:h-full h-[200px] w-full" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                    ))}
                </Carousel>

                <div className="w-[40px] h-[40px] p-[10px] rounded-full bg-[#FFFFFFCC] absolute top-[12px] left-[12px]">
                    {
                        isMyFavorite ? <img src="/icons/svg/heart.svg" alt="like" title="like" width={20} height={20} /> :
                            <img src="/icons/svg/like.svg" alt="like" title="like" width={20} height={20} />
                    }
                </div>
            </div>
            <div className="p-[16px] middle:grow">
                <div className="flex items-center mb-[8px]">
                    <div className="grow">
                        <div className="flex">
                            <span className="text-[14px] font-semibold text-custom-gray">{houseType}</span>&nbsp;
                            {star > 0 ? <Rate defaultValue={star} count={star} /> : null}
                        </div>
                        <p className="font-medium text-xl mb-2">{hotelName}</p>
                    </div>

                    <div className="flex flex-none items-center">
                        <RatingBadge size="md" rating={rating.number} />
                        <span className="ml-[8px] md:block hidden">
                            <p className="text-base font-bold">{rating.label}</p>
                            <p className="text-[14px] text-accent">{commentAmount}&nbsp;отзывов</p>
                        </span>
                    </div>
                </div>
                <div className="flex mb-[16px]">
                    <img src="/icons/svg/location.svg" alt="location" className="w-[20px] h-[20px]" />
                    <p className="text-[14px] font-semibold leading-[20px] text-custom-gray ml-[6px]">{address}</p>
                </div>
                <div className="flex items-center mb-[32px]">
                    <div className="flex items-center text-[#292D32] text-[14px] overflow-hidden">
                        {services.map((service, i) => (
                            <span key={i} className="flex mr-[16px] items-center flex-none">
                                <img src={service.icon} alt="service icon" className="w-[20px] h-[20px]" />
                                <span className="ml-[6px]">{service.label}</span>
                            </span>))}
                    </div>
                    <p className="text-accent grow text-[14px] ml-[10px]">Ещё</p>
                </div>
                <div className="flex mb-[14px]">
                    {bonus.map((item, i) => (
                        <Tag text={item.label} color={item.color} key={i} className="mr-[8px]" />
                    ))}
                </div>
                <hr className="mb-[14px]" />
                <div className="flex justify-between">
                    <div>
                        <div className="mb-[4px]">
                            <span className="text-[14px] text-custom-gray font-semibold leading-[20px] mr-[4px]">от</span>
                            {price.isDiscounted ?
                                <span>
                                    <span className="text-[16px] font-semibold leading-[24px] mr-[8px]">{price.original}₽</span>
                                    <span className="text-[#3BA87E] text-[24px] leading-[28.8px] font-bold">{price.discounted}₽</span>
                                </span> :
                                <span className="text-[24px] font-bold leading-[28.8px]">{price.original}₽</span>}
                        </div>
                        <p className="text-[14px] font-semibold leading-[20px] text-custom-gray">{capacity}</p>
                    </div>
                    <div className="flex-none md:block hidden">
                        <Link href="/hotels/123"><ChooseButton /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
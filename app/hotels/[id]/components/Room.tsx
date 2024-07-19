'use client'

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Tag from "@/components/Tag";
import AccommodationSelect, { AccommodationType } from "./AccommodationSelect";
import Nutrition from "./Nutrition";
import BillAndBook from "./BillAndBook";
import FullWidthBtn from "@/components/FullWidthBtn";
import { useState } from "react";
import { Modal, Drawer } from "antd";

type ImageUrl = string

export type RoomCategoryProps = {
    thumbnails: ImageUrl[],
    type: string,
    area: number,
    amentities: { icon: ImageUrl, label: string }[],
    remark: { label: string, color: string }[],
    accommodations: { type: AccommodationType, label: string, icon: ImageUrl, amount: number }[],
    nutrition: { label: string }[],
}

export default function RoomCategory({
    thumbnails = [],
    type = '',
    area = 0,
    amentities = [],
    remark = [],
    accommodations = [],
    nutrition = [],
    ...props
}: RoomCategoryProps & React.HTMLAttributes<HTMLDivElement>) {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="p-[4px] rounded-t-xl border border-b-0">
                <div className="md:block hidden">
                    <Carousel
                        customRightArrow={
                            <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer w-[48px] h-[48px]' />
                        }
                        customLeftArrow={
                            <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer rotate-180 w-[48px] h-[48px]' />
                        }
                        additionalTransfrom={0}
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={false}
                        containerClass="rounded-t-xl "
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
                                items: 3,
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
                                items: 3,
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
                        partialVisbile
                        rtl={undefined}

                    >
                        {thumbnails.map((thumbnail, i) => (
                            <img key={i} src={thumbnail} className="h-[200px] h-full w-full pr-[4px]" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                        ))}
                    </Carousel>
                </div>
                <div className="md:hidden block">
                    <Carousel
                        arrows={false}
                        additionalTransfrom={0}
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={false}
                        containerClass="rounded-t-xl "
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
                            <img key={i} src={thumbnail} className="h-[200px] h-full w-full md:pr-[4px]" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="md:px-[24px] px-[12px] md:pt-[16px] md:pb-[24px] py-[12px] border border-t-0 rounded-b-xl">
                <p className="md:text-[24px] text-[20px] md:font-bold font-[800] md:leading-[28px] leading-[27.32px] md:mb-[12px] md-[8px]">{type} • {area} м²</p>
                <div className="flex items-center md:mb-[16px] mb-[12px]">
                    <div className="flex items-center text-[#292D32] text-[14px] overflow-hidden">
                        {amentities.map((amentity, i) => (
                            <span key={i} className="flex mr-[16px] items-center flex-none">
                                <img src={amentity.icon} alt="service icon" className="w-[20px] h-[20px]" />
                                <span className="ml-[6px]">{amentity.label}</span>
                            </span>))}
                    </div>
                    <p className="text-accent grow text-[14px] ml-[10px]">Ещё</p>
                </div>
                <div className="flex mb-[16px] overflow-auto">
                    {remark.map((item, i) => (
                        <Tag key={i} className="mr-[8px] flex-none" text={item.label} />
                    ))}
                </div>
                <div className="lg:hidden block">
                    <FullWidthBtn caption="От 120 000 ₽ · Забронировать" onClick={() => setToggle(!toggle)} />
                </div>
                <hr className="mb-[16px] lg:block hidden" />
                <div className="lg:flex divide-x gap-[34px] lg:block hidden">
                    <div className="lg:w-[486px] lg:flex-none">
                        <p className="text-[18px] font-bold leading-[24px] lg:mb-[16px] mb-[12px]">Размещение</p>
                        <AccommodationSelect accommodations={accommodations} />
                        <p className="text-[18px] font-bold leading-[24px] lg:mb-[16px] mb-[12px] mt-[24px] ">
                            <span className="lg:mr-[12px] mr-[8px]">Питание</span>
                            <Tag text="Завтрак" bgColor='#3C4EF21A' color='#3C4EF2' />
                        </p>
                        <Nutrition nutrition={nutrition} />
                    </div>
                    <hr className="lg:hidden block mb-[12px]" />
                    <div className="grow-none lg:pl-[24px]">
                        <BillAndBook discount={20} total={85000} prepayment={9000} payment={76000} />
                    </div>
                </div>
                <Drawer
                    placement='bottom'
                    closable={false}
                    onClose={() => { setToggle(false) }}
                    open={toggle}
                >
                    <div className="fixed bottom-0 left-0 right-0 rounded-t-xl bg-white z-[100] px-[24px] py-[16px]">
                        <div className="md:w-[486px] md:flex-none">
                            <p className="text-[18px] font-bold leading-[24px] md:mb-[16px] mb-[12px]">Размещение</p>
                            <AccommodationSelect accommodations={accommodations} />
                            <p className="text-[18px] font-bold leading-[24px] md:mb-[16px] mb-[12px] mt-[24px] ">
                                <span className="md:mr-[12px] mr-[8px]">Питание</span>
                                <Tag text="Завтрак" bgColor='#3C4EF21A' color='#3C4EF2' />
                            </p>
                            <Nutrition nutrition={nutrition} />
                        </div>
                        <hr className="md:hidden block mb-[12px]" />
                        <div className="grow-none md:pl-[24px]">
                            <BillAndBook discount={20} total={85000} prepayment={9000} payment={76000} />
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
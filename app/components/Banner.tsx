'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Banner() {
    const Banners = [
        { image: '/banner/Frame 77.svg' },
        { image: '/banner/Frame 346.svg' },
        { image: '/banner/Frame 346.svg' },
        { image: '/banner/Frame 347.svg' },
        { image: '/banner/Frame 347.svg' },
    ]

    return (
        <div className="md:py-[0px 60px] pl-[16px] py-[16px] mx-auto max-w-[1200px]">
            <div className='md:block hidden'>
                <Carousel
                    customRightArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer w-[48px] h-[48px]' />
                    }
                    customLeftArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer rotate-180 w-[48px] h-[48px]' />
                    }
                    additionalTransfrom={0}
                    arrows
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
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind
                    rewindWithAnimation
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    partialVisible
                    rtl={undefined}
                >
                    {Banners.map((banner, i) => (
                        <img key={i} src={banner.image} className='w-[586px] y-[395px] pr-[40px]' />
                    ))}
                </Carousel>
            </div>
            <div className='md:hidden block'>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={2000}
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
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind
                    rewindWithAnimation
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    partialVisible
                    arrows={false}
                    rtl={undefined}
                >
                    {Banners.map((banner, i) => (
                        <img key={i} src={banner.image} className='w-[293px] y-[197.5px] pr-[20px]' />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}